/* Type Assertions */
let phone = document.getElementById('phone') as HTMLInputElement;

// Or

let phone1 = <HTMLInputElement> document.getElementById('phone');


console.log(phone.value); // accessing the input field value
console.log(phone1.value);