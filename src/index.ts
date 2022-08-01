/*Ploymorphisum */

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

class Principle extends Person{
    override get fullName(): string {
        return "Principle "+ super.fullName;
    }
}

let teacher = new Teacher("Mahmud", "Ibrahim");

function printNames (people: Person[]){
    for(let person of people)
        console.log(person.fullName);
}

printNames([
    new Student (1, "M", "Ibrahim"),
    new Teacher ('Max', 'Gain'),
    new Principle('Mr.', 'Rosebelt')
])


