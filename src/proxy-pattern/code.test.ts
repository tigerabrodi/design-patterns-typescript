import { it, expect } from 'vitest'

import { personProxy } from './code'

it('Proxy should work', () => {
  expect(personProxy.name).toBe('John Doe')
  expect(personProxy.age).toBe(30)
  personProxy.name = 'Jane Doe'
  expect(personProxy.name).toBe('Jane Doe')
  personProxy.age = 31
  expect(personProxy.age).toBe(31)
})
