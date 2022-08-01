/*Generic Class/ Template Class */

class KeyValuePair<K,V>{
    constructor(public key:K, public value:V){}
}

let pair = new KeyValuePair('1', 'a'); // implicit
let pair1 = new KeyValuePair<number, string>(1, 'a'); // explicit

console.log(pair);
console.log(pair1);