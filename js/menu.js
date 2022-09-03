let foods = [
    {
        "name": "Cream Chicken Chiladas",
        "image": "assets/images/products/01.jpg",
        "price": 100,
        "type": "breakfast",
        "des": "Conveniently imaiipact are worldwide andng datang arovem theme with there"
    },
    {
        "name": "Cream Chicken Chiladas",
        "image": "assets/images/products/02.jpg",
        "price": 100,
        "type": "breakfast",
        "des": "Conveniently imaiipact are worldwide andng datang arovem theme with there"
    },
    {
        "name": "Cream Chicken Chiladas",
        "image": "assets/images/products/03.jpg",
        "price": 100,
        "type": "breakfast",
        "des": "Conveniently imaiipact are worldwide andng datang arovem theme with there"
    },
    {
        "name": "Cream Chicken Chiladas",
        "image": "assets/images/products/04.jpg",
        "price": 100,
        "type": "breakfast",
        "des": "Conveniently imaiipact are worldwide andng datang arovem theme with there"
    },
    
]

$(document).ready(function () {
    var foodItems = []
    foods.filter(function (food) { return food.type == "breakfast" }).forEach(food => {
        var foodEl = `<div class="col-lg-6 col-12">
                        <div class="product-item style-2">
                            <div class="product-thumb">
                                <img src=${food.image} alt="food-product">
                                <span class="price">$${food.price}</span>
                            </div>
                            <div class="product-content">
                                <div class="product-title">
                                    <h6><a href="#">${food.name}</a></h6>
                                    <div class="rating">
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                        <i class="bi bi-star-fill"></i>
                                    </div>
                                </div>
                                <div class="product-desc">
                                    <p>${food.des}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        foodItems.push(foodEl);
    });
    $(".products.breakfasts .tabcontent .row").prepend(foodItems);
});

$(".common-ajax").click(function (e) { 
    e.preventDefault();
    var self = $(this);
    if($(this).hasClass("loading")){
        return;
    }
    $(this).addClass("loading");
    var foodItems = ""
    foods.forEach(food => {
        var foodEl = `<div class="col-lg-6 col-12">
                        <div class="product-item style-2">
                            <div class="product-thumb">
                                <img src=${food.image} alt="food-product">
                                <span class="price">$${food.price}</span>
                            </div>
                            <div class="product-content">
                                <div class="product-title">
                                    <h6><a href="#">${food.name}</a></h6>
                                    <div class="rating">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    </div>
                                </div>
                                <div class="product-desc">
                                    <p>${food.des}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        foodItems += foodEl
    });
    var newrows = $(foodItems);

    setTimeout(function(){
        newrows.insertBefore(self);
        self.removeClass("loading");
    }, 500)
    
});