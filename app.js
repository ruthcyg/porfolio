"use strict"

const hamburgerContainer = document.querySelector("#header__main-nav");
const hamburger =document.querySelector(".header__main-nav--hamburger");
const links = document.querySelectorAll(".header__main-nav--links li");
const nameInput= document.querySelector("#name");
//const email= document.querySelector("#email");
//const message= document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error");



hamburger.addEventListener("click", () => {
hamburgerContainer.classList.toggle("clicked");
links.forEach((link) => {
    link.classList.toggle("fade");
})
});

function showMessage(){
  var message = document.getElementById("message").value;
  display_message.innerHTML= message;
}

//function submitForm(){
 // document.hidden._next.value='about-me';
//}

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('mail');
const phone = document.getElementById('phon');
const names = document.getElementById('names');
const emailError = document.querySelector('#mail + span.error');
const phoneError = document.querySelector('#phon + span.error');
const nameError = document.querySelector('#names + span.error');

//console.log(nameError)

//console.log(messageError)
email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
   // emailError.innerText="good";
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});


//////////////////////////////////////
phone.addEventListener('input', function (event) {
  
  if (phone.validity.valid) {
   // phoneError.textContent= ""
    phoneError.textContent = ''; 
    phoneError.className = 'error'; 
  } else {
    
    showError();
  }
});

names.addEventListener('input', function (event) {
  
  if (names.validity.valid) {
   // phoneError.textContent= ""
    nameError.textContent = ''; 
    nameError.className = 'error'; 
  } else {
    
    showError();
  }
});
////////////////////////////////////////



/////////////////////////////////////

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  
  if(!email.validity.valid  && !phone.validity.valid )
    {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
 event.preventDefault();

  }
submitForm();
  
});

///////////////////////////////////
function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  }  if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  }  if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.email shoul
    emailError.textContent = `email should be at least ${ email.minLength } characters; you have entered ${ email.value.length }.`;
  };

  /////////////////////////////////
  if(phone.validity.tooShort) {
   
    phoneError.textContent = ` please enter valid phone number`;
  };


  //////////////////////////////
  if(names.validity.tooShort) {
   
    nameError.textContent = `name should be at least ${ names.minLength } characters; you have entered ${ names.value.length }. `;
  };

 
  // Set the styling appropriately
  emailError.className = 'error active';
  phoneError.className="error active";
  nameError.className="error active";
}





/** Validate Data *
function validateForm(){
   clearMessage()
    if(nameInput.value.length< 1){
        
        errorNodes[0].innerText = "Name cannot be blank";
        console.log(errorNodes)
       nameInput.classList.add("error-border");
    }

    if(!emailIsValid (email.value)){}
    }
    
}

//Clear error / success messages

function clearMessage(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText ="";
    }
    nameInput.classList.remove("error-border")
}
*/