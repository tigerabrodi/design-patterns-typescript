import { it, expect } from 'vitest'

import { singletonCounter } from './code'

it('should increment the counter', () => {
  const counter = singletonCounter.getInstance()
  expect(counter.getCount()).toBe(0)
  counter.increment()
  expect(counter.getCount()).toBe(1)
})

it('should decrement the counter', () => {
  const counter = singletonCounter.getInstance()
  expect(counter.getCount()).toBe(1)
  counter.decrement()
  expect(counter.getCount()).toBe(0)
})
