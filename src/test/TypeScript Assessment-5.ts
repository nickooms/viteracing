function fun(str: string):number{
    return 42;
}
function fun(num: number): string{
    return "hello! "+num;
}

let d: string = "hello!";
var disp:number = fun(d);
console.log(disp);
