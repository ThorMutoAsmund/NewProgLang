class Person {
  property Name { get; set; }
  
  greet(title, message) {
    return message + '! ' + title + ' ' + this.Name;
  }

  greet2(t as title, m as message) {
    return m + '! ' + t + ' ' + this.Name;
  }
}

const p = new Person();
p.Name = 'Thomas';
const greeting = p.greet(title:'mr', message:'hello there');
const greeting2 = p.greet2(title:'mr', message:'hello there');

static class Math {
  static add(a as @0, b as @1) => a + b;
}

Math.add(1, 2);
