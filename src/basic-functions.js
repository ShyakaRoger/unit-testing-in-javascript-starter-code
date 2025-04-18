// validate an email address
function validateEmail(email) {
  // Check if the email contains the '@' symbol and a '.'
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

// validate a password on complexity requirements
function validatePassword(password) {

  // Check for capital letter
  const regex = /[A-Z]/;

  if(!regex.test(password)){
    return false;
  }

  return password.length >= 8;
}

// validate a phone number
function validatePhoneNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}

// Validate username
function validateUsername(username){
  // Return false if username is not a string
  if(typeof username !== "string"){
    return false;
  }

  // Return false if username is too short
  if(username.length < 3){
    return false;
  }

  // Return falses if the username can parse as a number
  if(!isNaN(parseFloat(username))){
    return false;
  }

  // Return true if all other ifs pass
  return true;
}

module.exports = {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateUsername
};


