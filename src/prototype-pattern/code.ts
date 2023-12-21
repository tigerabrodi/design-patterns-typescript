/** Prototype Pattern */

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    console.log('Woof!')
  }
}

export class SuperDog extends Dog {
  constructor(name: string) {
    super(name)
  }

  fly() {
    console.log(`Flying!`)
  }
}

const dog1 = new SuperDog('Daisy')
dog1.bark()
dog1.fly()
