/* eslint-disable no-new */
import { change, getOptions, shake } from './util'
import UseBootstrapTagComponent from './use-bootstrap-tag.svelte'

export default function UseBootstrapTag(inputElement: HTMLInputElement) {
  const classWrapper = 'ub-wrapper'
  const nextElement = inputElement.nextElementSibling
  if (nextElement && nextElement.classList.contains(classWrapper)) {
    nextElement.remove()
  }

  const target = document.createElement('div')
  target.className = classWrapper
  inputElement.insertAdjacentElement('afterend', target)

  const options = getOptions(inputElement.dataset)
  new UseBootstrapTagComponent({
    target,
    props: {
      options,
      inputElement,
    },
  })

  function addValue(value: string | string[]) {
    const currentValues = getValues()
    let newValues = Array.isArray(value) ? value : [value]
    if (!options.isDuplicate) {
      newValues = shake(newValues, currentValues)
    }
    if (newValues.length > 0) {
      currentValues.push(...newValues)
    }
    change(inputElement, currentValues.join(options.separator))
  }
  function removeValue(value: string | string[]) {
    const currentValues = getValues()
    const valueArray = Array.isArray(value) ? value : [value]
    valueArray.forEach((val) => {
      const index = currentValues.indexOf(val)
      if (index !== -1) {
        currentValues.splice(index, 1)
      }
    })
    change(inputElement, currentValues.join(options.separator))
  }
  function getValue() {
    return inputElement.value
  }
  function getValues() {
    return getValue().split(options.separator)
  }

  return { addValue, removeValue, getValue, getValues }
}
