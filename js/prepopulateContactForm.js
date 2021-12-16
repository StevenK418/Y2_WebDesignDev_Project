
//Prepopulate the contact form with user details stored in local storage. 

var userDetails = JSON.parse(localStorage.getItem('userdetails'));

if(localStorage.getItem('userdetails') != null)
{
    //Retreive and concatenate names from local storage
    var userName = userDetails.firstName + " " + userDetails.lastName;
    //Retrieve the email from local storage
    var email = userDetails.email;

    //Get and set the name input field
    var nameField = document.getElementById('name');
    nameField.setAttribute('value', userName);

    //Get and set the email input field
    var emailField = document.getElementById('emailAddress');
    emailField.setAttribute('value', email);
}
else
{
    //If no details storedm print error to the console
    console.log('No user details found! Please register first.');
}

