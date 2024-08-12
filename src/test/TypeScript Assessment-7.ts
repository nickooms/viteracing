const alterEgo = "Slade Wilson";
function outerFunction()
{
     let alterEgo = "Wade Wilson";
     setTimeout(
         function(){
             console.log(alterEgo);
         },2000);
}
outerFunction();
