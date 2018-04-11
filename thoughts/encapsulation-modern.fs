
class Person {
  property Age {
    get; 
    set;
  }

  // Property with getter and setter
  property Name {
    get => this.$Name;
    set(_) => this.$Name = _;
  }

  // Property with explicit backing variable
  property Name using _name {
    get => this._name;
    set(_) => this._name = _;
  }

  constructor(name, age) {
    this[Person.nameProperty] = name;
    this[Person.ageProperty] = age;
  }
}

class Dog contains base: Animal {
  // Property delegation
  property Age -> base;

  // Normal property
  property Name { get; set; }

  // Renaming delegation
  property ScientificName -> base.Name;
}

