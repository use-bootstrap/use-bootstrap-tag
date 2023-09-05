interface Observer {
  execute: () => void
  dependencies: Set<Set<Observer>>
}

const context: Observer[] = []

function cleanup(observer: Observer) {
  for (const dep of observer.dependencies) {
    dep.delete(observer)
  }
  observer.dependencies.clear()
}

function subscribe(observer: Observer, subscriptions: Set<Observer>) {
  subscriptions.add(observer)
  observer.dependencies.add(subscriptions)
}

function state<T>(value: T): [() => T, (newValue: T) => void] {
  const subscriptions = new Set<Observer>()
  function read(): T {
    const observer = context[context.length - 1]
    if (observer) {
      subscribe(observer, subscriptions)
    }
    return value
  }
  function write(newValue: T): void {
    value = newValue
    for (const observer of [...subscriptions]) {
      observer.execute()
    }
  }
  return [read, write]
}

function effect(fn: () => void): void {
  const effect: Observer = {
    execute(): void {
      cleanup(effect)
      context.push(effect)
      fn()
      context.pop()
    },
    dependencies: new Set<Set<Observer>>(),
  }
  effect.execute()
}

export { state, effect }
