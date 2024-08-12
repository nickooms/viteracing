var company = /** @class */ (function () {
    function company() {
        this.empId++;
        this._eta = false;
        this._production = false;
    }
    company.empId = 753800;
    return company;
}());
var emp1 = new company();
var emp1 = new company();
var emp2 = new company();
console.log(emp2.empId);
