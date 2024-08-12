enum defaultPrice {Single=1000,Double=2000,Triple=3000 }
enum cost { Red = defaultPrice.Single, Green=Blue, Blue = defaultPrice.Double+defaultPrice.Triple, White=defaultPrice.Triple };
var price=cost.Blue;
