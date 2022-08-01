/*Inheritance */

class Person {
    constructor(
        public firstName:string, public lastName:string
    ){}

    get fullName(){
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

