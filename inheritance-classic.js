
class PoweredDevice {

}

class Scanner extends PoweredDevice {

}

class Printer extends PoweredDevice {
  
}

// Not possible: Multiple inheritance
//class Copier extends Scanner extends   Printer {
//
//  start() {
//  {  
//}

class Array {
  constructor() {
    this.values = [];
  }
  
  add(element) {
    this.values.push(element);
  }

  addAll(elements) {
    elements.forEach(element => {
      this.values.push(element);
    });
  }
}

class Array2 {
  constructor() {
    this.values = [];
  }
  
  add(element) {
    this.values.push(element);
  }

  addAll(elements) {
    elements.forEach(element => {
      this.add(element);
    });
  }
}

class ArrayCount extends Array2 {
  constructor() {
    super();
    this.count = 0;
  }

  add(element) {
    super.add(element);
    this.count++;
  }

  addAll(elements) {
    super.addAll(elements);
    this.count += elements.length;
  }

  getCount() {
    return this.count;
  }
}

const ac = new ArrayCount();
ac.add(2);
ac.addAll([3,4,5]);
console.log(ac.getCount());