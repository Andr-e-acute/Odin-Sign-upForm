const form =document.getElementById("user-registration");

const email = document.getElementById("email");
const emailError= document.querySelector("#email + .errorMessage")
const tel= document.getElementById("tel"); 
const pwd= document.getElementById("pwd");
const repeatPwd =document.getElementById("repeatPwd")


//constantly check if user corrects error
email.addEventListener("input",(e)=>{
  if(email.validity.valid){
  correctEmailInput()
  }
  //user had visited and now creates an error, error creations gets aggressive
  else if(email.classList.contains("visited")){
  createEmailError()
  } 
})

// when user leaves field create Error
email.addEventListener("blur",(e)=>{
  if(email.validity.valid){
    correctEmailInput()
  }
  else{
    createEmailError();
  }
})
function correctEmailInput(){
    email.classList.add("visited")
    emailError.textContent="";
    email.classList.remove("inputError")
}
function createEmailError(){
  email.classList.add("inputError")
  email.classList.add("visited")
if (email.validity.valueMissing) {
  emailError.innerHTML = "*required <br> You need to enter an email address. "
}
else if(email.validity.typeMismatch){
  emailError.innerHTML =`Entered value needs to be an email address.<br>
                        for Example: firstname@domain.com`
}
}





//todo is this  a good idea? 
// prevent input of non numbers? or use a pattern with a description.
tel.addEventListener("input",removeNonNumeric)

function removeNonNumeric() {
    console.log(tel.validity.valid)
    // this.value = this.value.replace(/[^0-9]/g, "");
    //todo add an output error after 3*times non number?
  }


  //
