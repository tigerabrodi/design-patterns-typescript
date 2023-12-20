/** Observer Pattern */

export class Observable {
  private observers: Array<(data: string) => void>

  constructor() {
    this.observers = []
  }

  subscribe(func: (data: string) => void) {
    this.observers.push(func)
  }

  unsubscribe(func: (data: string) => void) {
    this.observers = this.observers.filter((observer) => observer !== func)
  }

  notify(data: string) {
    this.observers.forEach((observer) => observer(data))
  }
}
