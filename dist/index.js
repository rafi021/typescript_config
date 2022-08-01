"use strict";
function wrapInArray(value) {
    return [value];
}
let numbers = wrapInArray(1);
console.log(numbers);
class ArrayUtils {
    static wrapInArray(value) {
        return [value];
    }
}
let numbers1 = ArrayUtils.wrapInArray(1);
console.log(numbers1);
//# sourceMappingURL=index.js.map