// Generate a random CAPTCHA value
function generateCaptcha() {
  const captchaValue = Math.random().toString(36).substr(2, 6).toUpperCase();
  document.getElementById("captcha-value").textContent = captchaValue;
}

// Refresh the CAPTCHA
function refreshCaptcha() {
  generateCaptcha();
  document.getElementById("captcha-input").value = "";
}
function validateForm() {
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var tel = document.forms["contactForm"]["tel"].value;
  
  // You can now use the 'name', 'email', and 'tel' variables to process the form data further
  return true;
}

// Validate the entered CAPTCHA
function validateCaptcha() {
  const enteredValue = document.getElementById("captcha-input").value.trim().toUpperCase();
  const captchaValue = document.getElementById("captcha-value").textContent;


  if (enteredValue === captchaValue) {
    alert("Data is Submited successfully!");
    refreshCaptcha();
  } else {
    alert("Please fill details");
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
  generateCaptcha();
});

document.getElementById("refresh-btn").addEventListener("click", function() {
  refreshCaptcha();
});

document.getElementById("submit-btn").addEventListener("click", function() {
  validateCaptcha();
});

document.getElementById("captcha-input").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    validateCaptcha();
  }
});
