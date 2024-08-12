interface a
{
	a:string;
	abstract fun(): string;

}
class b implements a{
a:string;
constructor()
{
this.a="Success!"
}
	fun()
	{
		return this.a;

	}
}
let obj = new b;
console.log(obj.fun());
