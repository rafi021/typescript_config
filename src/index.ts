/* Optional chaining */
type Customer = {
    birthday: Date
};

function getCustomer (id: number): Customer|null|undefined{
    return id === 0 ? null: { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer);

let customer1 = getCustomer(1);
console.log(customer1);


// Optional Property access parameter
let customer2 = getCustomer(1);
console.log(customer2?.birthday);
