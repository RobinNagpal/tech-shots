define([], function () {
    return {
        getGroundShippingCost: function (product) {
            if (product.weight <= .5) {
                return 5;
            } else if (product.weight > .5 && product.weight <= 2) {
                return 10;
            } else if (product.weight > 2 && product.weight <= 10) {
                return 20;
            }
        }
    }
});