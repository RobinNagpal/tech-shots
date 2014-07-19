define(
    [
        './util/tax-calculator',
        './util/shipping-cost-calculator'
    ], function (taxCalculator, shippingCalculator) {

        return {
            getProductPrice: function (product) {
                var productPrice = product.price
                    + taxCalculator.getTax(product)
                    + shippingCalculator.getGroundShippingCost(product);
                return productPrice;
            }
        }

    });