interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'John Doe',
  age: 30,
}

export const personProxy = new Proxy(person, {
  get: (obj: Person, prop: keyof Person) => {
    console.log(`The value of ${String(prop)} is ${Reflect.get(obj, prop)}`)
    return Reflect.get(obj, prop)
  },
  set: (obj: Person, prop: keyof Person, value: (typeof obj)[keyof Person]) => {
    console.log(
      `Changed ${String(prop)} from ${Reflect.get(obj, prop)} to ${value}`
    )
    return Reflect.set(obj, prop, value)
  },
})
