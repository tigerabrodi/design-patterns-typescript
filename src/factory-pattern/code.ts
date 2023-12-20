/** Factory Pattern */

export const createUser = ({
  firstName,
  lastName,
  email,
}: {
  firstName: string
  lastName: string
  email: string
}) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
})
