// Store management script
var cartTotal = localStorage.getItem('checkout');

var additemButtons = document.querySelectorAll('.addtocart');

additemButtons.forEach(button => {
    // add a listener for add to cart if such a button id is pressed
    button.addEventListener("click", addToCart);
});

//Update the shopping cart quantity to that stored in localstorage
document.querySelector('.cart-quantity').innerHTML = cartTotal;

//Get a reference to the clear storage link in footer
var clearBtn = document.querySelector('.clearStorage');
//Subscribe to click events on this link
clearBtn.addEventListener('click', ClearCart, false);

//Adds an item quantity to the cart
function addToCart() 
{
    var total=localStorage.getItem('checkout');
    total++;
    localStorage.setItem('checkout',total);
    document.querySelector('.cart-quantity').innerHTML=total;
}

//Clears the cart quantity from local storage and resets the counter to 0
function ClearCart()
{
    localStorage.setItem('checkout',0);
    document.querySelector('.cart-quantity').innerHTML = cartTotal;
}
