
let carts = document.querySelectorAll('.add_cart ');



let products = [

    {
        name: "bday candle",
        tag: "bday candle",
        price: 5000,
        inCart: 0

    },

    {
        name: "unicorn decor",
        tag: "unicorn decor",
        price: 5000,
        inCart: 0

    },

    {
        name: "packing paper",
        tag: "packing paper",
        price: 5000,
        inCart: 0

    },
    {
        name: "gift bag",
        tag: "gift bag",
        price: 5000,
        inCart: 0
    },
    {
        name: "banner",
        tag: "banner",
        price: 5000,
        inCart: 0

    },

    {
        name: "candle",
        tag: "candle",
        price: 5000,
        inCart: 0

    },

    {
        name: "light",
        tag: "light",
        price: 5000,
        inCart: 0

    },
    {
        name: "party bomb",
        tag: "party bomb",
        price: 5000,
        inCart: 0
    }
];





for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        //  console.log('Add to cart')
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}



function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    // console.log("the product clicked is",product);
    // console.log(productNumbers)
    // console.log(typeof productNumbers)

    productNumbers = parseInt(productNumbers)

    //  console.log( productNumbers)
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span ').textContent = productNumbers + 1;

    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span ').textContent = 1;


    }


    setItems(product);

}
onloadCartNumbers();



function onloadCartNumbers() {


    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {

        document.querySelector('.cart span ').textContent = productNumbers;
    }

}


function setItems(product) {
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    //console.log("My cartItems are", cartItems);
    //console.log("Inside of SetItems function")
    //console.log("The product clicked is:", product)




    if (cartItems != null) {
        // console.log(cartItems[product.tag]);

        if (cartItems[product.tag] == undefined) {
            cartItems =
            {

                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;


    }
    else {

        product.inCart = 1;
        cartItems =
        {
            [product.tag]: product
        }
    }


    localStorage.setItem("productInCart", JSON.stringify(cartItems));

}


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');


    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);

    }

    else {
        localStorage.setItem("totalCost", product.price);

    }

}




function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    // console.log(cartItems)
    let productContainer = document.querySelector(".product");
    let cartCost = localStorage.getItem('totalCost');


    if (cartItems && productContainer) {
        // console.log("running");
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {

            productContainer.innerHTML += 
               `<div class="product">
                    <img src="./img/${item.tag}.jpg">
                    <span>${item.name}</span></div>

                <div class= "price"> ${item.price}</div>
                <div class= "quantity"> ${item.inCart}</div>
                <div class= "total"> ${item.inCart*item.price},00</div>
            

            `;

        });


        productContainer.innerHTML += 
        `<div class="basketTotalContainer">
             <h4  class="basketTotalTitle">
             Basket Total
             </h4>
             <h4  class="basketTotal">
             ${cartCost}
             </h4>
             `;




    }



}
