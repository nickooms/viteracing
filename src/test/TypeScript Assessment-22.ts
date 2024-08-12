class A{
printData&lt;T>(data: T): T{
    if (data == "Barry Allen")
        console.log("Data Received");
return data;
}
}
let obj = new A();
let data:string=obj.printData&lt;string>('Barry Allen');
