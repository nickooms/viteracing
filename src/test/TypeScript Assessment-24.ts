function invoke(constructor:Function) {
   var newconstructor : any = function (...args) {     
     this.alterEgo="Bruce Wayne";
     }	 
 return newconstructor;
}
@invoke
class Product {
	public alterEgo: string;
	constructor(data: string) {
		this.alterEgo = data;
	}
}
var p = new Product("Dark Knight");
console.log(`Product name is : ${p.alterEgo}`);
