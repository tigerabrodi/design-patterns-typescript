import { it, expect } from 'vitest'

import { SuperDog } from './code'

it('should bark and fly', () => {
  const dog1 = new SuperDog('Daisy')
  expect(dog1.name).toBe('Daisy')
  dog1.bark()
  dog1.fly()
})
