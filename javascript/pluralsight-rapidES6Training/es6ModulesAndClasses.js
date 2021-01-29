/**
 * ES6 Modules and Classes
 */

// #### Class Fundamentals #### //
class Task {
  constructor() {
    console.log('constructing Task');
  }
  showId() {
    console.log('99');
  }
}
console.log(typeof Task); // function
let task = new Task(); // constructing task
console.log(typeof Task); // object
console.log(task instanceof Task); // true
task.showId() // 99
console.log(task.showId === Task.prototype.showId); // true - adding a method to a class adds it to the prototype.

// ### extends and super #### //
class Project {
  constructor(name) {
    console.log('constructing Project: ' + name);
  }
  getTaskCount() {
    return 50;
  }
}
class SoftwareProduct extends Project {
  constructor() {
    super(); // super is required if a class which extends has a constructor
    console.log('constructing Software Project');
  }
  getTaskCount() {
    return super.getTaskCount() + 10;
  }
}
let p = new SoftwareProduct('Mazatlan') // constructing Project: Mazatlan, constructing Software Project
p.getTaskCount() // 50 <--- methods are inherited 
p.getTaskCount() // 60 <--- methods can be overwritten and super called from within the function

// #### Properties for Class Instances #### //
class ProjectProps {
  constructor() {
    console.log(this.location = 'Mazatlan');
  }
}
class SoftwareProductProps extends ProjectProps {
  constructor() {
    super(); // super is required if a class which extends has a constructor
    this.location = this.location + ' Beach';
  }
}
let pProps = new SoftwareProductProps();
console.log(p.location); // Mazatlan Beach

// #### Static Members #### //
class ProjectStatic {
  static getDefaultId() {
    return 0;
  }
}
console.log(ProjectStatic.getDefaultId()); // 0
var pStatic = new ProjectStatic();
// console.log(pStatic.getDefaultId()); // Error - only ProjectStatic has access to the static methods

// #### new.target #### //
class ProjectTarget {
  constructor() {
    console.log(typeof new.target); // function
    console.log(new.target); // constructor() {console.log(typeof new.target); console.log(new.target);}
    console.log(new.target.getDefaultId()); // 99
  }
}
class SoftwareProductTarget extends ProjectTarget {
  static getDefaultId() {return 99;}
  constructor() {
    super(); // super is required if a class which extends has a constructor
  }
}
var pTarget = new ProjectTarget();
var spTarget = new SoftwareProductTarget(); // constructor() {super();}