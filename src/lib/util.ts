type ElementAttributes<T extends keyof HTMLElementTagNameMap> = {
  [K in keyof HTMLElementTagNameMap[T]]?: HTMLElementTagNameMap[T][K] | Partial<CSSStyleDeclaration>
}

export function arraysAreEqual<T>(arr1: T[], arr2: T[]) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index])
}

export function change(target: HTMLInputElement, value: string) {
  target.value = value
  target.dispatchEvent(new Event('change'))
}

export function pull<T>(items: T[], value: T): void {
  const i = items.lastIndexOf(value)
  i !== -1 && items.splice(i, 1)
}

export function createElement<T extends keyof HTMLElementTagNameMap>(tagName: T, config?: ElementAttributes<T>) {
  const element = document.createElement(tagName)
  if (config) {
    for (const key in config) {
      (element as any)[key] = config[key]
    }
  }
  return element
}

export function processData(data: string | string[] | (string | string[])[], separator: string): string[] {
  return (typeof data === 'string'
    ? data.split(separator)
    : Array.isArray(data)
      ? data.flatMap(item => (typeof item === 'string' ? item.split(separator) : []))
      : []) as string[]
}
