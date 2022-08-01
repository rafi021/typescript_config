function calculateTax(income:number, taxtYear?:number) :number{
    if((taxtYear || 2022) <50000)
        return income*1.2;
    return income*1.3;
}

console.log(calculateTax(20000));