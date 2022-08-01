/*Generic Interfaces */
interface Result<T>{
    data: T|null,
    error: string|null
}

function fetchData<T>(url:string):Result<T>{
    if(url){
        console.log(url);
    }
    return {
        data: null, error:null
    };
}

interface User{
    username: string;
}

interface Product{
    title:string;
}

let user = fetchData<User>('url');
let result = fetchData<Product>('url');
result.data?.title;