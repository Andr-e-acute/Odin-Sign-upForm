const form =document.getElementById("user-registration");

const email = document.getElementById("email");
const emailError= document.querySelector("#email + .errorMessage")
const tel= document.getElementById("tel"); 
const pwd= document.getElementById("pwd");
const repeatPwd =document.getElementById("repeatPwd")


email.addEventListener("input",(e)=>{
  //constantly check if user corrects error
  if(email.validity.valid){
  correctInput(e)
  emailError.textContent="";
  }
  //user had visited and now creates an error, error creations gets aggressive
  else if(email.classList.contains("visited")){
  wrongInput(e)
  createEmailError()
  } 
})

// when user leaves field create Error Message
email.addEventListener("blur",(e)=>{
  if(email.validity.valid){
    correctInput(e)
  }
  else{
    wrongInput(e)
    createEmailError();
  }
})
function correctInput(e){
    e.target.classList.add("visited")
    e.target.classList.remove("inputError")
 }
 function wrongInput(e){
  e.target.classList.add("inputError")
  e.target.classList.add("visited")
 }
function createEmailError(){

if (email.validity.valueMissing) {
  emailError.innerHTML = "*required <br> You need to enter an email address. "
}
else if(email.validity.typeMismatch){
  emailError.innerHTML =`Entered value needs to be an email address.<br>
                        for Example: firstname@domain.com`
}
}



//is their a simple non global way?
let telNumErrorCounter=0;

//create error when user first 
tel.addEventListener("blur",removeNonNumeric)

function removeNonNumeric() {
  console.log(tel.validity.valid)
  
  //todo is this  a good idea? 
  // prevent input of non numbers? or use a pattern with a description.
    // this.value = this.value.replace(/[^0-9]/g, "");
    //todo add an output error after 3*times non number?
  }


  //check on every 
