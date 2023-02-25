// comment under every input when the input does not fit


//prevent input of non numbers? or use a pattern with a description.
const telInput= document.getElementById("tel"); 
// telInput.addEventListener("input",removeNonNumeric)

function removeNonNumeric() {
    console.log(this.value)
    this.value = this.value.replace(/[^0-9]/g, "");
    //todo add an output error after 3*times non number?
  }