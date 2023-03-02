const form = document.getElementById("user-registration");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + .errorMessage");

const tel = document.getElementById("tel");
const telError = document.querySelector("#tel + .errorMessage");

const pwd = document.getElementById("pwd");
const repeatPwd = document.getElementById("repeatPwd");
let pwdRequirements = document.getElementsByClassName("pwdRequirement");

function checkInput(e) {
  let input = e.target;
  let errorMessage = input.nextElementSibling;

  //constantly check if user corrects error
  if (input.validity.valid) {
    input.classList.add("visited");
    input.classList.remove("inputError");
    errorMessage.textContent = "";
  }

  //visited: user had visited and now creates an error, error creations gets aggressive
  //or user leaves field
  else if (input.classList.contains("visited") || e.type == "blur") {
    input.classList.add("inputError");
    input.classList.add("visited");
    switch (input.id) {
      case "email":
        createEmailError(input, errorMessage);
        break;
      case "tel":
        createTelError(input, errorMessage);
        break;

      default:
        errorMessage.textContent = "error wrong input";
        break;
    }
  }
}
function createEmailError(input, errorMessage) {
  if (input.validity.valueMissing) {
    errorMessage.innerHTML =
      "*required <br> You need to enter an email address. ";
  } else if (input.validity.typeMismatch) {
    // there is a bug/annoying think when the user types a dot it is then an error

    errorMessage.innerHTML = `Entered value needs to be an email address.<br>
                          for Example: firstname@domain.com`;
  } else {
    errorMessage.innerHTML = `please enter an email address.<br>
    for Example: firstname@domain.com`;
  }
}
function createTelError(input, errorMessage) {
  if (input.validity.patternMismatch) {
    if (telNumErrorCounter > 3) {
      errorMessage.innerHTML = "only Enter numbers <br>None number deleted!";
      input.value = input.value.replace(/[^0-9]/g, "");
    } else {
      errorMessage.textContent = "only Enter numbers";
      telNumErrorCounter++;
    }
  } else {
    errorMessage.textContent =
      "Please Enter a telephone number or leave empty.";
  }
}

function checkPwd(e) {

  input = e.target;
  if (input.validity.valid) {
   
    input.classList.remove("inputError");
    [...pwdRequirements].map((pwdRequirement) => {
      pwdRequirement.classList.add("pwdCorrect");
    });

    if (e.type == "blur") {
      document.getElementById("pwdRequirements").classList.remove("visible");
    }
  } 
  else {
    input.classList.add("inputError");
    document.getElementById("pwdRequirements").classList.add("visible");

    [...pwdRequirements].map((pwdRequirement) => {
      pwdRequirement.classList.add("pwdWrong")
      pwdRequirement.classList.remove("pwdCorrect");
    });
    if(/[a-z]/.test(input.value)){
      document.getElementById("pwdLow").classList.remove("pwdWrong")
      document.getElementById("pwdLow").classList.add("pwdCorrect")
    }
    if(/[A-Z]/.test(input.value)){
      document.getElementById("pwdUp").classList.remove("pwdWrong")
      document.getElementById("pwdUp").classList.add("pwdCorrect")
    }
    if(/[0-9]/.test(input.value)){
      document.getElementById("pwdNum").classList.remove("pwdWrong")
      document.getElementById("pwdNum").classList.add("pwdCorrect")
    }
    if(input.value.length>=8){
      document.getElementById("pwdLength").classList.remove("pwdWrong")
      document.getElementById("pwdLength").classList.add("pwdCorrect")
    }
    
    
    
    
  }
}

email.addEventListener("input", checkInput);
email.addEventListener("blur", checkInput);

//is their a simple non global way?
let telNumErrorCounter = 0;
tel.addEventListener("input", checkInput);
tel.addEventListener("blur", checkInput);

pwd.addEventListener("input", checkPwd);
pwd.addEventListener("blur", checkPwd);
pwd.addEventListener("focus", () =>
  document.getElementById("pwdRequirements").classList.add("visible")
);

