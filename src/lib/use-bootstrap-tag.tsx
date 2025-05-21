/* eslint-disable no-new-func */
import { effect, state } from 'stef'
import { arraysAreEqual, change, createElement, processData, pull } from './util'

const name = 'use-bootstrap-tag'
const classTarget = `${name}-target`

interface UseBootstrapTagReturnType {
  getValue: () => string
  getValues: () => string[]
  addValue: (value: string | string[]) => void
  addReadonlyValue: (value: string | string[]) => void
  removeValue: (value: string | string[]) => void
}

export default function UseBootstrapTag(element: Element | HTMLElement | null): UseBootstrapTagReturnType {
  const target = element as HTMLInputElement

  // If reinitialized
  const nextElement = target.nextElementSibling
  if (nextElement && nextElement.classList.contains(name)) {
    nextElement.remove()
  }

  // Root
  const root = createElement('div')
  target.insertAdjacentElement('afterend', root)

  // Config
  const dataset = target.dataset
  const readonlySet = new Set<string>()
  const config = {
    separator: dataset.ubTagSeparator || ',',
    variant: dataset.ubTagVariant || 'secondary',
    xPosition: dataset.ubTagXPosition as 'left' | 'right' || 'right',
    transform: dataset.ubTagTransform || 'input => input',
    validate: dataset.ubTagValidate || '',
    validateModifiers: dataset.ubTagValidateModifiers || 'i',
    isDuplicate: dataset.ubTagDuplicate !== undefined,
    rainbow: dataset.ubTagRainbow !== undefined,
    max: +dataset.ubTagMax! > 0 ? +dataset.ubTagMax! : undefined,
    noInputOnblur: dataset.ubTagNoInputOnblur !== undefined,
  }
  const colorMap = new Map<string, string>()

  const tags = () => root.querySelectorAll('button')
  const animateTag = (tag: HTMLButtonElement) => {
    tag.classList.add('duplicate')
    setTimeout(() => {
      tag.classList.remove('duplicate')
    }, 150)
  }

  // Returned methods
  const predefinedColors = [
    '#f44336', // red
    '#e91e63', // pink
    '#9c27b0', // purple
    '#673ab7', // deep purple
    '#3f51b5', // indigo
    '#2196f3', // blue
    '#03a9f4', // light blue
    '#00bcd4', // cyan
    '#009688', // teal
    '#4caf50', // green
    '#8bc34a', // light green
    '#cddc39', // lime
    '#ffeb3b', // yellow
    '#ffc107', // amber
    '#ff9800', // orange
    '#ff5722', // deep orange
    '#795548', // brown
    '#9e9e9e', // gray
    '#607d8b', // blue gray
    '#8e24aa', // strong purple
    '#d81b60', // strong pink
    '#43a047', // dark green
    '#1e88e5', // vivid blue
    '#f4511e', // strong orange
    '#6d4c41', // dark brown
    '#3949ab', // bold indigo
    '#00897b', // deep teal
    '#fbc02d', // bold yellow
    '#5e35b1', // dark purple
    '#00acc1', // medium cyan
  ]
  const getRandomColor = () => predefinedColors[Math.floor(Math.random() * predefinedColors.length)]
  const getContrastingTextColor = (bgColor: string): string => {
    // Remove '#' and convert to RGB
    const hex = bgColor.replace('#', '')
    const r = Number.parseInt(hex.substring(0, 2), 16)
    const g = Number.parseInt(hex.substring(2, 4), 16)
    const b = Number.parseInt(hex.substring(4, 6), 16)

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    // Return black for light backgrounds, white for dark backgrounds
    return luminance > 0.5 ? '#000' : '#fff'
  }
  const isValid = (value: string): boolean => {
    const re = new RegExp(config.validate, config.validateModifiers)
    return !config.validate || re.test(value)
  }
  const getValue = (): string => target.value
  const getValues = (): string[] => getValue().split(config.separator).filter(i => i !== '')
  const addValue = (value: string | string[]): void => {
    const values = getValues()
    const insert = processData(value, config.separator)
    if (!config.max || values.length < config.max) {
      // Get duplicates
      const duplicates = [] as number[]
      !config.isDuplicate && values.forEach((value, index) => insert.includes(value) && duplicates.push(index))
      // Get inserted
      const inserted = [] as string[]
      insert.forEach((i) => {
        if (!isValid(i)) {
          return false
        }
        if (values.includes(i)) {
          config.isDuplicate && inserted.push(i)
        }
        else {
          inserted.push(i)
        }
      })

      values.push(...inserted)
      if (!arraysAreEqual(getValues(), values)) {
        change(target, values.join(config.separator))
        // Animate inserts
        inserted.forEach((item) => {
          const tag = tags()[values.lastIndexOf(item)]
          const tagHeight = tag.offsetHeight
          tag!.style.height = 0 as unknown as string
          setTimeout(() => (tag.style.height = `${tagHeight}px`), 0)
          setTimeout(() => tag.style.removeProperty('height'), 150)
        })
      }
      // Animate duplicates
      if (!config.isDuplicate) {
        duplicates.forEach(index => animateTag(tags()[index]))
      }
    }
    else {
      insert.length > 0 && tags().forEach(animateTag)
    }
  }
  const addReadonlyValue = (value: string | string[]): void => {
    const insert = processData(value, config.separator)
    readonlySet.clear() // Optional: depends if you want to reset previous readonly tags
    insert.forEach(v => readonlySet.add(v))
    addValue(insert)
  }
  const removeValue = (value: string | string[]): void => {
    const values = getValues()
    const remove = processData(value, config.separator)
    remove.forEach((i) => {
      if (!readonlySet.has(i)) {
        pull(values, i)
        colorMap.delete(i)
      }
    })
    if (!arraysAreEqual(getValues(), values)) {
      change(target, values.join(config.separator))
    }
  }

  // Target states
  const classList = target.classList
  const disabled = target.disabled

  target.tabIndex = -1
  classList.add(classTarget)

  // Local states
  const [value, setValue] = state(target.value)
  const [focus, setFocus] = state(false)
  const [text, setText] = state('')
  const values = () => value().split(config.separator).filter(i => i.trim() !== '')
  const texts = () => new Function(`return ${config.transform}`)()(text().trim()) as string
  const placeholder = () => values().length ? '' : target.placeholder

  // Styling
  root.className = `${name} d-flex flex-wrap align-items-center gap-1 ${classList.value}`.replace(classTarget, '')
  effect(() => {
    focus() ? root.classList.add('focus') : root.classList.remove('focus')
  })

  // Functions
  const textFocus = () => root.querySelector('input')?.focus()
  const removeByIndex = (index: number) => {
    if (index >= 0) {
      removeValue(values()[index])
    }
  }
  const appendTag = (force = false) => {
    const value = texts()
    value === '' && setText('')
    if (text().includes(config.separator) || (force && text() !== '')) {
      addValue(value.split(config.separator).filter(i => i.trim() !== ''))
      setText('')
    }
  }

  // Tags
  const tagElement = createElement('button', {
    type: 'button',
    className: `align-items-center gap-1 d-inline-flex py-0 border-0 btn btn-${config.variant}`,
    disabled,
  })
  classList.contains('form-control-sm') && tagElement.classList.add('btn-sm')
  classList.contains('form-control-lg') && tagElement.classList.add('btn-lg')
  config.xPosition === 'left' && tagElement.classList.add('flex-row-reverse')
  const closeTagElement = createElement('span', {
    className: 'd-inline-flex',
    role: 'button',
    tabIndex: -1,
    innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',
  })
  const renderTags = (items: string[]) => {
    tags().forEach(tag => tag.remove())
    items.reverse().forEach((value, i) => {
      const index = items.length - 1 - i
      const tag = tagElement.cloneNode() as typeof tagElement
      tag.innerHTML = value
      if (config.rainbow) {
        if (!colorMap.has(value)) {
          colorMap.set(value, getRandomColor())
        }
        const color = colorMap.get(value)!
        tag.style.backgroundColor = color
        tag.style.color = getContrastingTextColor(color)
      }
      tag.onfocus = () => {
        tag.classList.add('active')
        setFocus(true)
      }
      tag.onblur = () => {
        tag.classList.remove('active')
        setFocus(false)
      }
      tag.onkeydown = ({ key }) => {
        if ((key === 'Backspace' || key === 'Delete') && !readonlySet.has(value)) {
          removeByIndex(index)
          const nextFocus = key === 'Backspace' ? index - 1 : values().length === index ? -1 : index
          if (nextFocus === -1) {
            textFocus()
          }
          else {
            tags()[nextFocus].focus()
          }
        }
      }
      if (!disabled && !readonlySet.has(value)) {
        const span = closeTagElement.cloneNode(true) as typeof closeTagElement
        span.onclick = () => {
          removeByIndex(index)
          textFocus()
        }
        tag.append(span)
      }
      root.prepend(tag)
    })
  }
  effect(() => {
    renderTags(values())
  })

  // Input
  if (!disabled) {
    const wrapper = createElement('div', {
      className: 'input-wrapper',
    })
    const span = createElement('span')
    const input = createElement('input', {
      type: 'text',
    })
    input.onfocus = () => {
      setFocus(true)
    }
    input.onblur = () => {
      setFocus(false)
      config.noInputOnblur ? setText('') : appendTag(true)
    }
    input.onkeydown = (e) => {
      if (text() === '' && e.key === 'Backspace') {
        removeByIndex(values().length - 1)
      }
      if (text() !== '' && e.key === 'Enter') {
        appendTag(true)
        e.preventDefault() // prevent form submit
      }
    }
    input.oninput = () => {
      setText(input.value)
      appendTag()
    }
    effect(() => {
      span.innerHTML = text() || placeholder() || 'i'
      input.placeholder = placeholder()
      input.value = text()
    })
    wrapper.append(span, input)
    root.append(wrapper)
  }

  root.onclick = (e) => {
    if ((e.target as Element).tagName !== 'BUTTON') {
      textFocus()
    }
  }

  target.addEventListener('change', () => {
    setValue(target.value)
  })
  target.addEventListener('focus', textFocus)

  return { getValue, getValues, addValue, removeValue, addReadonlyValue }
}
