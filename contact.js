let loginForm = document.querySelector("#loginForm");

function validateEmail(inputText) {
            // var mailFormat =  /\S+@\S+\.\S+/;
            var mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (!inputText.value.match(mailFormat)) {
                alert("Please input a correct email");
                            return false;}
            else{
                return true;
            }

};

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = document.querySelector("#name");
  let mailText = document.querySelector("#email");
  let queryEntered = document.querySelector("#query");
  let messageText = document.querySelector("#mess");

  

    if (userName.value.length <3 || validateEmail(mailText) == false ) {
    alert("Ensure you input a valid value in both name and email ");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${userName.value} and email value of ${email.value}
       query value of $(queryEntered.value) and a message text of $(messsageText.value)
      `
    );

    userName.value = "";
    //email.value =""; tn funciona
    mailText.value = "";
    queryEntered.value = "";
    messageText.value = "";
  }


});





