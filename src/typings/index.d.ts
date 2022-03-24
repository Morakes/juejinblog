declare global {
    interface ResultType{
        code:number,
        data?:any,
        msg?:string,
        total?:number,
        token?:string
    }
}

export {__global}