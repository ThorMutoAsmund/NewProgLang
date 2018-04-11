class Person {
  property Name { get; set; }

  constructor(name) {
    this.Name = name;
  }
}

class CompanyUnit {
  property CompanyNumber { get; set; }

  constructor(companyNumber) {
    this.CompanyNumber = companyNumber;
  }
}

class Employee contains person: Person, unit: CompanyUnit {
  constructor(name, companyNumber) {
    
  }
}