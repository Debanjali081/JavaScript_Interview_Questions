// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
    if (password.length < 8) {
        return false
    }


    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasDigit = false;

    for (i = 0; i < password.length; i++) {
        if (password[i] >= 'a' && password[i] <= 'z') {
            hasLowerCase = true
        }
        else if (password[i] >= 'A' && password[i] <= 'Z') {
            hasUpperCase = true
        }
        else if (password[i] >= '0' && password[i] <= '9') {
            hasDigit = true
        }
        if (hasLowerCase && hasUpperCase && hasDigit) {
            return true
        }


    }
    return hasLowerCase && hasUpperCase && hasDigit

}


if (isValidPassword("Debanjali017@gmail.com")) {
    console.log("Password Is Valid")
} else {
    console.log("password is invalid")
}



