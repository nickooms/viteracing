var defaultPrice;
(function (defaultPrice) {
    defaultPrice[defaultPrice["Single"] = 1000] = "Single";
    defaultPrice[defaultPrice["Double"] = 2000] = "Double";
    defaultPrice[defaultPrice["Triple"] = 3000] = "Triple";
})(defaultPrice || (defaultPrice = {}));
var cost;
(function (cost) {
    cost[cost["Red"] = 1000] = "Red";
    cost[cost["Green"] = 0] = "Green";
    cost[cost["Blue"] = 5000] = "Blue";
    cost[cost["White"] = 3000] = "White";
})(cost || (cost = {}));
;
var price = cost.Blue;
