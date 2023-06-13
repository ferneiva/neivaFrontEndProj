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

validatePass = (inputPass) => {
    if(inputPass.value.length< 6){
        alert("Please password must have at least 6 characters");
        return false;
    }
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
  let passValue = document.querySelector("#pass");

  

    if (userName.value.length <3 || validateEmail(mailText) == false || validatePass(passValue) == false){
        alert("Ensure you input a valid value in both name, email and password ");
    }
    else{ alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${userName.value} and email value of ${email.value}
       query value of $(queryEntered.value) and a message text of $(messsageText.value password not shown)
      `

    );
    userName.value = "";
    //email.value =""; tb funciona
    mailText.value = "";
    passValue.value ="";
    queryEntered.value = "";
    messageText.value = "";
    }
});
    // This below also works the error was length value insted of value lenght on password
    
    /*if (userName.value.length <3 || validateEmail(mailText) == false){
    if(validatePass(passValue) == false)
    {console.log("enter 2nd if")
    alert("Ensure you input a valid value in both name, email and password ");
    }}
    else {
    
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${userName.value} and email value of ${email.value}
       query value of $(queryEntered.value) and a message text of $(messsageText.value password not shown)
      `
    );

    userName.value = "";
    //email.value =""; tb funciona
    mailText.value = "";
    passValue.value ="";
    queryEntered.value = "";
    messageText.value = "";
  }


});*/





