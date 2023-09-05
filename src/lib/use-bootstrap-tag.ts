/* eslint-disable no-new-func */
import { effect, state } from './reactive'
import { arraysAreEqual, change, createElement, processData, pull } from './util'

const name = 'use-bootstrap-tag'
const classTarget = `${name}-target`

export default function UseBootstrapTag(target: HTMLInputElement) {
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
  const config = {
    separator: dataset.ubTagSeparator || ',',
    variant: dataset.ubTagVariant || 'secondary',
    xPosition: dataset.ubTagXPosition as 'left' | 'right' || 'right',
    transform: dataset.ubTagTransform || 'input => input',
    isDuplicate: dataset.ubTagDuplicate !== undefined,
  }

  const tags = () => root.querySelectorAll('button')

  // Returned methods
  const getValue = (): string => target.value
  const getValues = (): string[] => getValue().split(config.separator).filter(i => i !== '')
  const addValue = (value: string | string[]): void => {
    const values = getValues()
    const insert = processData(value, config.separator)

    // Get duplicates
    const duplicates = [] as number[]
    !config.isDuplicate && values.forEach((value, index) => insert.includes(value) && duplicates.push(index))

    // Get inserted
    const inserted = [] as string[]
    insert.forEach((i) => {
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
      duplicates.forEach((index) => {
        const tag = tags()[index]
        tag.classList.add('duplicate')
        setTimeout(() => {
          tag.classList.remove('duplicate')
        }, 150)
      })
    }
  }
  const removeValue = (value: string | string[]): void => {
    const values = getValues()
    const remove = processData(value, config.separator)
    remove.forEach(i => pull(values, i))
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
  const texts = () => Function(`return ${config.transform}`)()(text().trim()) as string
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
  const renderTags = (items: string[]) => {
    tags().forEach(button => button.remove())
    const element = createElement('button', {
      type: 'button',
      className: `align-items-center gap-1 d-inline-flex py-0 border-0 btn btn-${config.variant}`,
      disabled,
    })
    classList.contains('form-control-sm') && element.classList.add('btn-sm')
    classList.contains('form-control-lg') && element.classList.add('btn-lg')
    config.xPosition === 'left' && element.classList.add('flex-row-reverse')
    items.reverse().forEach((value, i) => {
      const index = items.length - 1 - i
      const tag = element.cloneNode() as typeof element
      tag.innerHTML = value
      tag.onfocus = () => {
        tag.classList.add('active')
        setFocus(true)
      }
      tag.onblur = () => {
        tag.classList.remove('active')
        setFocus(false)
      }
      tag.onkeydown = ({ key }) => {
        if (key === 'Backspace' || key === 'Delete') {
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
      if (!disabled) {
        const span = createElement('span', {
          className: 'd-inline-flex',
          role: 'button',
          tabIndex: -1,
          innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',
        })
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
      appendTag(true)
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

  return { getValue, getValues, addValue, removeValue }
}
