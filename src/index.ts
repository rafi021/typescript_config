let Employee : {
    id: number, 
    name: string,
    retire: (date: Date) => void;
}
= {
    id: 1,
    name: "Ibrahim", 
    retire: (date: Date) => {
        console.log(date);
    }
}

console.log(Employee);
console.log(Employee.retire(new Date));