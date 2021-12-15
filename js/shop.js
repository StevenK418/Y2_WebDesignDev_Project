// shop.js
var cartTotal = localStorage.getItem('checkout');

var additem = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
additem.addEventListener("click", addToCart);

var clearBtn = document.querySelector('.clearStorage');
clearBtn.addEventListener('click', ClearCart, false);

// FetchGuitarData();

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
    localStorage.clear();
    localStorage.setItem('checkout',0);
    document.querySelector('.cart-quantity').innerHTML=0;
}



// //Store JSON Populator code
// function FetchGuitarData()
// {
//     let baseUrl = "../res/JSON/guitars.json";

//     //Perform the fetch on the url
//     fetch(baseUrl)
//     .then(response=> response.json())
//     .then(json =>
//     {
//         console.log(json);

//         CreateNewStoreItem(json);
//     })
//     .catch((error) => {
//        //Print error message to console
//         console.log(error);
//     });
// }

// function CreateNewStoreItem(json)
// {
//     let item = document.createElement('div');
//     let image = document.createElement('img');
//     let body = document.createElement('div');
//     let title = document.createElement('h5');

//     let text = document.createElement('p');

//     let button = document.createElement('a');


//     image.src = json.image;

//     title.innerHTML = json.name;

//     text.innerHTML = json.Wood;

//     item.classList.add('card');

//     button.classList.add('btn');


//     item.appendChild(image);
//     item.appendChild(body);
//     item.appendChild(title);
//     item.appendChild(text);
//     item.appendChild(button);

//     document.querySelector('.store-items').appendChild(item);
// }
