/*Inheritance */

class Person {
    constructor(
        public firstName:string, public lastName:string
    ){}

    get fullName():string {
        return this.firstName+' '+ this.lastName;
    }

    walk() {
        console.log("Walking");
    }
}

class Student extends Person{
    constructor(
        public studentId:number,
        firstName: string,
        lastName: string
    ){
        super(firstName, lastName)
    }
}

class Teacher extends Person{

    override get fullName(): string {
        return 'Professor ' + super.fullName
    }
}


let teacher = new Teacher("Mahmud", "Ibrahim");

console.log(teacher.fullName);

