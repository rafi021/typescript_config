/* Abstract Classes and Methods 

An abstract class is a class with partial implementation.
Abstract classes cann;t be instantiated and have to be inherited.

*/

abstract class Shape {
    constructor(public color:string) {}

    abstract render() :void;
}

class Circle extends Shape{
    constructor(public radius:number, color:string){
        super(color);
    }

    override render(): void {
        console.log('Rendering a circle');
    }
}