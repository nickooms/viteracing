var b = /** @class */ (function () {
    function b() {
        this.a = "Success!";
    }
    b.prototype.fun = function () {
        return this.a;
    };
    return b;
}());
var obj = new b;
console.log(obj.fun());
