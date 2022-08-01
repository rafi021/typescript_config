/*Literal types */

type Quantity = 50|100;
type Metric = 'cm'|'inch';

let qty: Quantity = 100; // OK
let qty1: Quantity = 50; // OK
let qty2: Quantity = 30; // Not OK only Quantity values


let unit_value: Metric = 'inch'; // OK
let unit_value1: Metric = 'cm'; // OK
let unit_value2: Metric = 'mm'; // Not OK only Metric values
 