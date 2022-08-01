"use strict";
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer);
let customer1 = getCustomer(1);
console.log(customer1);
let customer2 = getCustomer(1);
console.log(customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday);
//# sourceMappingURL=index.js.map