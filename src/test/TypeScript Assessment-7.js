var alterEgo = "Slade Wilson";
function outerFunction() {
    var alterEgo = "Wade Wilson";
    setTimeout(function () {
        console.log(alterEgo);
    }, 2000);
}
outerFunction();
