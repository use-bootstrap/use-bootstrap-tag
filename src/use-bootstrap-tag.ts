/* eslint-disable no-eval */
import { name } from '../package.json'

type ElementAttributes<T extends keyof HTMLElementTagNameMap> = {
  [K in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][K] | Partial<CSSStyleDeclaration>
}

function UseBootstrapTag(target: HTMLInputElement) {
  const { ubTagSeparator, ubTagDuplicate, ubTagTransform, ubTagEnter } = target.dataset
  const isDuplicate = ubTagDuplicate !== undefined
  const isEnter = ubTagEnter !== undefined
  const separator = ubTagSeparator || ','
  const transform = ubTagTransform || 'input => input'
  const isDisabled = target.disabled
  let tags: HTMLSpanElement[] = []

  const classRoot = name
  const classWrapper = 'd-flex align-items-center gap-1 flex-wrap'
  const classHidden = 'd-none'
  const classInput = 'autowidth'
  const classFocus = 'focus'
  const classDisabled = 'disabled'
  const classTag = 'd-inline-flex align-items-center gap-1 px-2 text-bg-secondary'
  const xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'

  function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, config?: ElementAttributes<T>) {
    const element = document.createElement(tagName)
    if (config) {
      for (const key in config) {
        if (Object.prototype.hasOwnProperty.call(config, key)) {
          const value = config[key];
          (element as any)[key] = value
        }
      }
    }
    return element
  }

  // Remove 'DOM' if it already exists.
  const nextElement = target.nextElementSibling
  if (nextElement && nextElement.classList.contains(classRoot)) {
    nextElement.remove()
  }

  // Root.
  const root = createElement('div', {
    className: `${classRoot} ${classWrapper} ${target.classList.value}`,
  })
  if (isDisabled) {
    root.classList.add(classDisabled)
  }

  // Input.
  const input = createElement('input', {
    type: 'text',
    className: classInput,
    placeholder: target.placeholder,
    disabled: isDisabled,
  })
  input.addEventListener('input', () => {
    autoWidth()
    appendTag()
  })
  root.append(input)

  // Insert the DOM after the target element.
  target.insertAdjacentElement('afterend', root)
  target.classList.add(classHidden)

  // Tag border radius.
  const rootBorderRadius = Number.parseFloat(getComputedStyle(root).getPropertyValue('border-radius')) / 16 // 1rem = 16px
  const tagBorderRadius = rootBorderRadius > 0.0625 ? rootBorderRadius - 0.0625 : 0

  function autoWidth() {
    const context = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D
    const text = input.value || input.placeholder || ''
    context.font = getComputedStyle(input).font
    input.style.width = `${context.measureText(text).width}px`
    context.canvas.remove()
  }

  function getValue() {
    return target.value.trim()
  }

  function getValues() {
    return getValue().split(separator)
  }

  function triggerChange() {
    target.dispatchEvent(new Event('change'))
  }

  function onExists(values: string[]) {
    tags.forEach((tag) => {
      if (values.includes(tag.textContent!)) {
        tag.style.transform = 'scale(1.1)'
        setTimeout(() => {
          tag.style.transform = 'none'
        }, 150)
      }
    })
  }

  function setValue(value: string, exists?: string[]) {
    target.value = value
    triggerChange()
    if (exists && exists.length > 0) {
      onExists(exists)
    }
  }

  function removeValue(value: string | string[]) {
    const values = getValues()
    const valueArray = Array.isArray(value) ? value : [value]
    valueArray.forEach((val) => {
      const index = values.indexOf(val)
      if (index !== -1) {
        values.splice(index, 1)
      }
    })
    setValue(values.join(separator))
  }

  function filter(values: string[]) {
    return values.filter(i => i.trim() !== '')
  }

  function createTag(textContent: string) {
    const outerSpan = createElement('span', {
      className: `${classTag}${isDisabled ? ' bg-opacity-50' : ''}`,
      textContent,
    })
    outerSpan.style.transition = 'transform .1s'
    if (tagBorderRadius > 0) {
      outerSpan.style.borderRadius = `${tagBorderRadius}rem`
    }
    if (!isDisabled) {
      const innerSpan = createElement('span', {
        className: 'd-inline-flex',
        innerHTML: xIcon,
      })
      if (!isDisabled) {
        outerSpan.style.cursor = 'default'
        innerSpan.style.cursor = 'pointer'
        innerSpan.onclick = () => {
          removeValue(textContent)
        }
      }
      outerSpan.prepend(innerSpan)
    }
    return outerSpan
  }

  function getWrapperContent() {
    return filter(getValues()).map(createTag)
  }

  function toggleValidityClass() {
    const form = target.form
    if (form) {
      root.classList.remove('is-valid', 'is-invalid')
      form.classList.contains('was-validated') && root.classList.add(target.validity.valid ? 'is-valid' : 'is-invalid')
    }
  }

  function update() {
    input.value = ''
    root.querySelectorAll('span').forEach(el => el.remove())
    autoWidth()
    tags = []
    getWrapperContent().reverse().forEach((tag) => {
      root.prepend(tag)
      tags.push(tag)
    })
    toggleValidityClass()
  }

  update()

  function addValue(value: string | string[]) {
    const currentValues = getValues()
    let values = filter(Array.isArray(value) ? value : value.split(separator))
    const exists: string[] = []
    if (!isDuplicate) {
      values.forEach((v) => {
        if (currentValues.includes(v) && !exists.includes(v)) {
          exists.push(v)
        }
      })
      values = values.filter(v => !exists.includes(v))
    }
    setValue(filter([...currentValues, ...values]).join(separator), exists)
  }

  function appendTag(force = false) {
    const inputValue = input.value
    const value = eval(transform)(inputValue.trim())
    if (value === '') {
      input.value = ''
      autoWidth()
    }
    if (inputValue.includes(separator) || (force && inputValue !== '')) {
      addValue(value)
    }
  }

  function listen() {
    if (!isDisabled) {
      // Focus to input.
      root.addEventListener('click', () => input.focus())

      // Toggle focus class.
      input.addEventListener('focus', () => root.classList.add(classFocus))
      input.addEventListener('blur', () => {
        root.classList.remove(classFocus)
        appendTag(true) // Add tag on blur
      })

      input.addEventListener('keydown', (e) => {
        const value = input.value
        const key = e.key

        // Remove with backspace.
        if (value === '' && key === 'Backspace' && input.previousElementSibling) {
          setValue(getValues().slice(0, -1).join(separator))
        }

        // Add with Enter.
        if (value !== '' && key === 'Enter' && isEnter) {
          appendTag(true)
          e.preventDefault() // prevent from submit
        }
      })
    }

    // Validation.
    const form = target.form
    if (form) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            toggleValidityClass()
          }
        })
      })
      observer.observe(form, {
        attributes: true,
        attributeFilter: ['class'],
      })
    }

    target.addEventListener('change', () => update())
  }

  listen()

  return { addValue, removeValue, getValue, getValues }
}

export { UseBootstrapTag }
