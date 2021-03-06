
//Handles user details via local storage 
//Data can be viewed and updated via register.html
if (localStorage.getItem('userdetails') === null) 
{  
    var userDetails = {firstName:"Walter", lastName:"Mitty", dob:"1990-12-01",address1:"Buenos Ayres Drive", address2:"Strandhill", address3:"Co. Sligo", email:"wmitty@email.com", phone:"0451234567"};
   
    localStorage.setItem('userdetails',JSON.stringify(userDetails));

    document.getElementById("firstName").setAttribute('value',userDetails.firstName);
    document.getElementById("lastName").setAttribute('value',userDetails.lastName);
    document.getElementById("DOB").setAttribute('value',userDetails.dob);
    document.getElementById("addressLine1").setAttribute('value',userDetails.address1);       
    document.getElementById("addressLine2").setAttribute('value',userDetails.address2);
    document.getElementById("addressLine3").setAttribute('value',userDetails.address3);
    document.getElementById("phoneNumber").setAttribute('value',userDetails.phone);
    document.getElementById("emailAddress").setAttribute('value',userDetails.email);
} 
else 
{
    userDetails=JSON.parse(localStorage.getItem('userdetails'));
    document.getElementById("firstName").setAttribute('value',userDetails.firstName);
    document.getElementById("lastName").setAttribute('value',userDetails.lastName);
    document.getElementById("DOB").setAttribute('value',userDetails.dob);
    document.getElementById("addressLine1").setAttribute('value',userDetails.address1);       
    document.getElementById("addressLine2").setAttribute('value',userDetails.address2);
    document.getElementById("addressLine3").setAttribute('value',userDetails.address3);
    document.getElementById("phoneNumber").setAttribute('value',userDetails.phone);
    document.getElementById("emailAddress").setAttribute('value',userDetails.email);
}

var userDetailsUpdate = document.getElementById('udetails');

userDetailsUpdate.addEventListener("submit", UpdateUserDetails);

function UpdateUserDetails() 
{
    var userDetails={};
    userDetails.firstName=document.getElementById('firstName').value;
    userDetails.lastName=document.getElementById('lastName').value;
    userDetails.dob=document.getElementById('DOB').value;
    userDetails.address1=document.getElementById('addressLine1').value;   
    userDetails.address2=document.getElementById('addressLine2').value;
    userDetails.address3=document.getElementById('addressLine3').value; 
    userDetails.email = document.getElementById("emailAddress").value;
    userDetails.phone = document.getElementById("phoneNumber").value;
    //Convert javascript object to string with JSON.stringify and save to localstorage
    localStorage.setItem('userdetails', JSON.stringify(userDetails));
    window.location.href = "login.html";  // redirect to login page
    event.preventDefault();
}
