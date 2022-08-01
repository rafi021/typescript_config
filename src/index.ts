/*Generic Functions */

function wrapInArray<T>(value: T){
    return [value];
}

let numbers = wrapInArray(1);
console.log(numbers);


class ArrayUtils{
    static wrapInArray <T>(value: T){
        return [value];
    }
}

let numbers1= ArrayUtils.wrapInArray(1);
console.log(numbers1); 