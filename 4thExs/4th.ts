type InputParamType <T> = T extends number ? number : string;



function conditionalNumber <T> (value: InputParamType<T>): void{
    if (typeof value === 'number'){
        console.log(value.toFixed(2))
    }else{
        console.log(value)
    }
}