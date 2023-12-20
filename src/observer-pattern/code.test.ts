import { it, expect, vi } from 'vitest'

import { Observable } from './code'

it('should notify all observers when data changes', () => {
  const observable = new Observable()
  const observer1 = vi.fn()
  const observer2 = vi.fn()
  observable.subscribe(observer1)
  observable.subscribe(observer2)
  observable.notify('Hello')
  expect(observer1).toHaveBeenCalledWith('Hello')
  expect(observer2).toHaveBeenCalledWith('Hello')
})

it('should unsubscribe observers', () => {
  const observable = new Observable()
  const observer1 = vi.fn()
  const observer2 = vi.fn()
  observable.subscribe(observer1)
  observable.subscribe(observer2)
  observable.unsubscribe(observer1)
  observable.notify('Hello')
  expect(observer1).not.toHaveBeenCalled()
  expect(observer2).toHaveBeenCalledWith('Hello')
})
