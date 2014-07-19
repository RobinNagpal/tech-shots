requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js'
});

// Start the main app logic.
requirejs(['./shopping-cart'],
    function (shoppingCart) {
        var product = {
            name : "TRX",
            type : "HEALTH_AND_FITNESS",
            price: 350.00,
            weight: 2
        };

        var productPrice = shoppingCart.getProductPrice(product);

        document.getElementById("productPrice").innerHTML = productPrice;

 });