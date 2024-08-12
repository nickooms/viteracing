var var1 = 20;
function fun()
{
    var1 = 21;
    var a = () => {var var1=40 };
    a();

}
fun();
console.log(var1);
