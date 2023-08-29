<script lang="ts">
  import { onMount, tick } from 'svelte'
  import { slide } from 'svelte/transition'
  import {
    change,
    classCenterGap,
    classInlineFlex,
    keyBackspace,
    shake,
    type Options,
  } from './util'

  export let inputElement: HTMLInputElement
  export let options: Options

  const name = 'use-bootstrap-tag'
  const disabled = inputElement.disabled
  const sm = inputElement.classList.contains('form-control-sm')
  const lg = inputElement.classList.contains('form-control-lg')
  const left = options.xPosition === 'left'

  let root: HTMLDivElement
  let value = ''
  let focus = false
  let valid = false
  let invalid = false
  let text = ''
  let textElement: HTMLInputElement | undefined
  let textWidth = 0
  let textFocus = false
  let textFont = ''
  let tagActiveIndex = -1

  $: values = value.split(options.separator).filter((i) => i !== '')
  $: placeholder = values.length ? '' : inputElement.placeholder
  $: if (textElement) {
    if (textFont === '') {
      textFont = getComputedStyle(textElement).font
    }
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (context) {
      context.font = textFont
      textWidth = context.measureText(text || placeholder).width
    }
    canvas.remove()
  }
  $: if (textFocus) {
    textElement.focus()
  }
  $: if (tagActiveIndex >= 0) {
    getTagElement(tagActiveIndex + 1).focus()
  }

  inputElement.classList.add(`${name}-target`)
  inputElement.tabIndex = -1

  onMount(() => {
    setValueFromInputElement()
    inputElement.addEventListener('change', setValueFromInputElement)
    inputElement.addEventListener('focus', () => (textFocus = true))
    if (inputElement.form) {
      handleValidation()
    }
  })

  function setValueFromInputElement() {
    value = inputElement.value
  }
  function toggleValidationClasses() {
    valid = false
    invalid = false
    if (inputElement.form.classList.contains('was-validated')) {
      if (inputElement.validity.valid) {
        valid = true
      } else {
        invalid = true
      }
    }
  }
  function handleValidation() {
    toggleValidationClasses()
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          toggleValidationClasses()
        }
      })
    })
    observer.observe(inputElement.form, {
      attributes: true,
      attributeFilter: ['class'],
    })
  }
  function handleRootClick(e: MouseEvent) {
    if ((e.target as HTMLElement).tagName.toLowerCase() !== 'button') {
      textFocus = true
    }
  }
  function handleTagFocus(e: FocusEvent) {
    const tag = e.target as HTMLButtonElement
    focus = true
    tag.classList.add('active')
    tagActiveIndex = +tag.dataset.index
  }
  function handleTagBlur(e: FocusEvent) {
    const tag = e.target as HTMLButtonElement
    focus = false
    tag.classList.remove('active')
    tagActiveIndex = -1
  }
  function setValues(values: string[]) {
    change(inputElement, values.join(options.separator))
    if (inputElement.form) {
      toggleValidationClasses()
    }
  }
  function handleRemove(index: number) {
    if (index >= 0) {
      setValues(values.filter((_, i) => i !== index))
    }
  }
  async function handleTagKeyup(e: KeyboardEvent) {
    if (e.key === keyBackspace || e.key === 'Delete') {
      const index = +(e.target as HTMLButtonElement).dataset.index
      handleRemove(index)
      await tick()
      tagActiveIndex = values.length === index ? index - 1 : index
      if (tagActiveIndex === -1) {
        textFocus = true
      }
    }
  }
  function handleExists(existingIndex: number[]) {
    existingIndex.forEach((index) => {
      const tag = getTagElement(index + 1)
      tag.style.transform = 'scale(1.1)'
      setTimeout(() => {
        tag.style.transform = 'none'
      }, 150)
    })
  }
  function appendTag(force = false) {
    const value = Function(`return ${options.transform}`)()(
      text.trim()
    ) as string
    if (value === '') {
      text = ''
    }
    if (text.includes(options.separator) || (force && text !== '')) {
      let newValues = value
        .split(options.separator)
        .filter((i) => i.trim() !== '')
      if (newValues.length > 0) {
        if (!options.isDuplicate) {
          const existingIndex: number[] = []
          values.forEach((currentValue, index) => {
            if (newValues.includes(currentValue)) {
              existingIndex.push(index)
            }
          })
          newValues = shake(newValues, values)
          handleExists(existingIndex)
        }
        values.push(...newValues)
        setValues(values)
      }
      text = ''
    }
  }
  function handleTextElementBlur() {
    focus = false
    appendTag(true)
    textFocus = false
  }
  function handleTextElementKeydown(e: KeyboardEvent) {
    if (text === '' && e.key === keyBackspace) {
      handleRemove(values.length - 1)
    }
    if (options.isEnter && text !== '' && e.key === 'Enter') {
      appendTag(true)
      e.preventDefault() // prevent form submit
    }
  }
  function getTagElement(index: number) {
    return root.querySelector<HTMLButtonElement>(`button:nth-child(${index})`)
  }
</script>

<div
  bind:this={root}
  class={`${name} d-flex flex-wrap ${classCenterGap} ${inputElement.classList.value}`}
  class:disabled
  class:focus
  class:is-valid={valid}
  class:is-invalid={invalid}
  on:click={handleRootClick}
  on:keydown={undefined}
  role="none"
>
  {#each values as value, index}
    <button
      type="button"
      class={`${classCenterGap} ${classInlineFlex} py-0 border-0 btn btn-${options.variant}`}
      class:flex-row-reverse={left}
      class:btn-sm={sm}
      class:btn-lg={lg}
      {disabled}
      data-index={index}
      on:focus={handleTagFocus}
      on:blur={handleTagBlur}
      on:keyup={handleTagKeyup}
      in:slide={{ duration: 150 }}
    >
      {value}
      {#if !disabled}
        <span
          class={classInlineFlex}
          role="button"
          tabindex="-1"
          on:click={() => handleRemove(index)}
          on:keydown={undefined}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      {/if}
    </button>
  {/each}
  <input
    type="text"
    {placeholder}
    bind:this={textElement}
    bind:value={text}
    style:width={`${textWidth}px`}
    {disabled}
    on:focus={() => (focus = true)}
    on:blur={handleTextElementBlur}
    on:keydown={handleTextElementKeydown}
    on:input={() => appendTag()}
  />
</div>
