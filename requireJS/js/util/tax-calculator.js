define([], function () {
    return {
        getTax: function (product) {
            if (product.type == "HEALTH_AND_FITNESS") {
                return product.price * 0.05;
            }

            return product.price * 0.12;
        }
    }
});