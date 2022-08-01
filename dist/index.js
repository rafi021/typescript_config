"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return "Principle " + super.fullName;
    }
}
let teacher = new Teacher("Mahmud", "Ibrahim");
function printNames(people) {
    for (let person of people)
        console.log(person.fullName);
}
printNames([
    new Student(1, "M", "Ibrahim"),
    new Teacher('Max', 'Gain'),
    new Principle('Mr.', 'Rosebelt')
]);
//# sourceMappingURL=index.js.map