class PoweredDevice {
  
}
  
class Scanner contains base: PoweredDevice {
  start() {

  }
}

class Printer contains base: PoweredDevice {
  start() {
    
  }
}

// Multiple 'inheritance' is now possible through 'contains'
class Copier contains scanner: Scanner, printer: Printer {
  // Calling start should start the scanner
  start() {
    scanner.start();
  }

  // Alternative
  delegate start() -> scanner;
}

class ArrayCount contains base: Array {
  // Contained objects are automatically constructed
  constructor() {
    this.count = 0;
  }

  // Add method
  add(element) {
    base.add(element);
    this.count++;
  }

  // Alternative
  delegate add(element) -> base -> {
    this.count++
  }

  addAll(elements) {
    base.addAll(elements);
    this.count += elements.length;
  }

  // Alternative
  delegate addAll(elements) -> base -> {
    this.count += elements.length;
  }

  // Or just
  addAll(elements) -> base {
    this.count += elements.length;
  }

  // Call base after loval code
  addAll(elements) {
    this.count += elements.length;
  } -> base
  
  getCount() {
    return this.count;
  }
}