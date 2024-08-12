var cost;
(function (cost) {
    cost[cost["Blue"] = 5000] = "Blue";
    cost[cost["Green"] = 5000] = "Green";
    cost[cost["Red"] = 7500] = "Red";
    cost[cost["White"] = 5000] = "White";
    cost[cost["Black"] = 2000] = "Black";
})(cost || (cost = {}));
;
console.log(cost[5000]);
