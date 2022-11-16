const phoneNumber = document.getElementById('phone')

phoneNumber.addEventListener("keyup", (e)=>{
    const value = phoneNumber.value
    if (value === "") {
        text.innerText = "input a number";
        text.style.color = "#ff0000";
      }
      // value should be a number
      else if (isNaN(value)) {
        text.innerText = "Not Valid";
        text.style.color = "#ff0000";
      }
      // phone number length should be 10
      else if (value.length != 10) {
        text.innerText = "Not Valid";
        text.style.color = "#ff0000";
      }
      // first letter should be 0
      else if (value.charAt(0) != "0") {
        text.innerText = "Not Valid";
        text.style.color = "#ff0000";
      }
      // the second number shouldn't be 6 or 9
      else if (value.charAt(1) === "6" || value.charAt(1) === "9") {
        text.innerText = "Not Valid";
        text.style.color = "#ff0000";
        console.log("valid number ", value);
        // statisfy all restriction then valid
      } else {
        text.innerText = "Valid Phone Number";
        text.style.color = "green";
      }
})