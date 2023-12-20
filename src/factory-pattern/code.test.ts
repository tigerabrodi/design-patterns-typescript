import { it, expect } from 'vitest'

import { createUser } from './code'

it('creates a user', () => {
  const user = createUser({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
  })

  expect(user.firstName).toBe('John')
  expect(user.lastName).toBe('Doe')
  expect(user.email).toBe('john@gmail.com')
})
