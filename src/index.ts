/*Generic Constraints */

// function echo <T>(value: T): T{
//     return value;
// }


//limit only number or string  input type = T; return type = T
function echo <T extends number|string>(value: T): T{
    return value;
}

console.log(echo('1')); 
console.log(echo(1)); 
// console.log(echo(true));  // not OK

// By using Shape/ Interface
interface Person{
    name:string
}


function echo2 <T extends Person>(value: T): T{
    return value;
}

console.log(echo2({name: 'Ibrahim'})); 
