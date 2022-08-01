/* Unknown & Never Types */

function render (document:unknown){
    /*we have to narrow down to a specifc type before we can perform any operation
    on an unknown types */

    if(typeof document === 'string'){
        document.toUpperCase();
    }
}


function proccesEvents() : never{
    /*This function never returns because it has an infinte loop */
    while (true){
        
    }
}
