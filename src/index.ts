type Employee = {
    id: number, 
    name: string,
    retire: (date: Date) => void;
}


let employee : Employee
= {
    id: 1,
    name: "Ibrahim", 
    retire: (date: Date) => {
        console.log(date);
    }
}

console.log(employee);
console.log(employee.retire(new Date));