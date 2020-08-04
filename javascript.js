
let carts = document.querySelectorAll('.add_cart ');

/*let products = [

    {
        name: 'Black Coat',
        tag: coat,
        price=20,
        inCart=0

    },

    {
        name: 'Black Jeans',
        tag: jeans,
        price=20,
        inCart=0

    },

    {
        name: 'Laptop',
        tag: laptop,
        price=20,
        inCart=0

    },
    {
        name: 'Perfume',
        tag: perfume,
        price=20,
        inCart=0

    },


];
*/

function onloadCartNumbers() {


    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {

        document.querySelector('.cart span ').textContent = productNumbers;
    }

}




for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        //  console.log('Add to cart')
        cartNumbers();

    })
}



function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    //console.log(productNumbers)
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

}
onloadCartNumbers();



