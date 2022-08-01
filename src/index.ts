/*Extending Generic Classes */
interface Product {
    name:string;
    price:number;
}

class Store<T>{
    private _objects: T[] = [];

    /* add new value type = T into the _objects private array variable */
    add(obj: T):void{
        this._objects.push(obj)
    }
}

// Pass on the generic type parameter
class CompressibleStore<T> extends Store<T>{
    compress() {
        console.log('Compressing store');
    }
}

let store = new CompressibleStore<Product>();
store.compress();


// Fix the generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(category:string): Product[]{
        return [
            
        ];
    }
}