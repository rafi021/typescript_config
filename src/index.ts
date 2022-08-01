/* The key of Operator */

interface Product{
    name: string;
    price: number;
}

class Store<T>{
    protected _objects: T[] = [];

    add(obj: T): void{
        this._objects.push(obj);
    }

    // T is Product
    // Key of T => 'name'|'price'

    find(property: keyof T, value:unknown):T|undefined{
        return this._objects.find((obj) => {
            obj[property] === value
        })
    }
}

let store = new Store<Product>();
store.add({
    name: 'a', price: 1
});

console.log(store.find('name', 'a')); 
console.log(store.find('price', 1));
// store.find('othervalue', 1);  // Not OK 
