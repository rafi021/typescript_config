"use strict";
function calculateTax(income, taxtYear) {
    if ((taxtYear || 2022) < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(20000));
//# sourceMappingURL=index.js.map