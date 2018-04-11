
class Person {
  constructor(name, age) {    
    this[Person.nameProperty] = name;
    this[Person.ageProperty] = age;
  }

  static nameProperty() { return Symbol() }
  get Name() {
    return this[Person.nameProperty];
  }
  set Name(v) {
    this[Person.nameProperty] = v;
  }

  static ageProperty() { return Symbol() }
  get Age() {
    return this[Person.ageProperty];
  }
  set Age(v) {
    this[Person.ageProperty] = v;
  }

  test() {
    let a1 = (b) => 2;
    let a2 = () => this.a = 3;
    a2();
  }
}

const p = new Person('Thor',45);
console.log(p.Name);
p.Name = 'Preben';
console.log(p.Name);

console.log(Object.keys(p));

p.test();
console.log(p.a);