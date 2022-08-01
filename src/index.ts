function calculateTax(income:number) :number{
    if(income<50000)
        return income*1.2;
    return income*1.3;
}

console.log(calculateTax(20000));