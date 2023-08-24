export const classInlineFlex = 'd-inline-flex'
export const classCenterGap = 'align-items-center gap-1'
export const keyBackspace = 'Backspace'

export function change(target: HTMLInputElement, value: string) {
  target.value = value
  target.dispatchEvent(new Event('change'))
}

export function shake(newValues: string[], currentValues: string[]) {
  return newValues.filter(i => !currentValues.includes(i))
}

export function getOptions(dataset: DOMStringMap): Options {
  return {
    separator: dataset.ubTagSeparator || ',',
    variant: dataset.ubTagVariant || 'secondary',
    xPosition: dataset.ubTagXPosition as Options['xPosition'] || 'right',
    transform: dataset.ubTagTransform || 'input => input',
    isEnter: dataset.ubTagEnter !== undefined,
    isDuplicate: dataset.ubTagDuplicate !== undefined,
  }
}

export interface Options {
  separator: string
  variant: string
  xPosition: 'left' | 'right'
  transform: string
  isEnter: boolean
  isDuplicate: boolean
}
