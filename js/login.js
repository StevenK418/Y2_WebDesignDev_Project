var loginStatus = document.getElementById('login-form');

if(loginStatus != null)
{
    // add a listener for add to cart if such a button id is pressed
    loginStatus.addEventListener("submit", loginUser);
}

//Get a reference to the clear storage link in footer
var clearBtn = document.querySelector('.clearStorage');
//Subscribe to click events on this link and logout
clearBtn.addEventListener('click', LogUserOut, false);

//Update the loggedin field on load
UpdateLoggedInField();

function loginUser() {

    // wait for submit button to be clicked on login form - 
    // this code only invoked if login form submit button clicked

    var email = document.getElementById('emailAddressID').value;
    var password= document.getElementById('passwordID').value;

    if (email=="wmitty@email.com" && password=="password1")  {   
        // successful login, user redirected to shop.html
        localStorage.setItem('loggedIn',1);    
        window.location.href = "store.html";  // redirect to shop page
    }
    else {
        // login unsuccessful, error message appears
        localStorage.setItem('loggedIn',0);
        var element = document.getElementById("loginerror");
        element.classList.remove("d-none");
    }
    UpdateLoggedInField();
    event.preventDefault();
}

function LogUserOut()
{
    //Reset loggedIn to 0
    localStorage.setItem('loggedIn', 0);
    //Update the logged in field
    UpdateLoggedInField();  
}

function UpdateLoggedInField()
{
    var userDetails = JSON.parse(localStorage.getItem('userdetails'));
    let statusLink = document.querySelector('.login-link');
    if(localStorage.getItem('loggedIn') == 1)
    {
        statusLink.innerHTML = `Welcome: ${userDetails.firstName}`;
    }
    else{
        statusLink.innerHTML = "Login | signup";
    }
}

