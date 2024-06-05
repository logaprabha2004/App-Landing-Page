function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function RegistrationForm() {
    
    let name = document.RegistrationForm.name.value;
    let username = document.RegistrationForm.username.value;
    let email = document.RegistrationForm.email.value;
    let country = document.RegistrationForm.country.value;
    let gender = document.RegistrationForm.gender.value;
    let dob = document.RegistrationForm.dob.value;
    let mobile = document.RegistrationForm.mobile.value;
    let password = document.RegistrationForm.password.value;
    let confirmpassword = document.RegistrationForm.confirmpassword.value;
	
    let nameErr = usernameErr = emailErr = countryErr = countryErr = genderErr = dobErr = mobileErr = passwordErr = confirmPassword =true;
    
    
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    if(username == "") {
        printError("usernameErr", "Please enter your name");
    } else {
        let regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(username) === false) {
            printError("usernameErr", "Please enter a valid name");
        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }
    
    
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    
    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
    
  
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    
    if(dob == "") {
        printError("dobErr", "Please select your gender");
    } else {
        printError("dobErr", "");
        dobErr = false;
    }


    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        let regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
    if(password == "") {
        printError("passwoedErr", "Please enter your email address");
    } else {
        
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(password) === false) {
            printError("passwordErr", "Please enter a valid email address");
        } else{
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    if(confirmpasswordpassword == "") {
        printError("confirmpasswoedErr", "Please enter your email address");
    } else {
        
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(confirmpassword) === false) {
            printError("confirmpasswordErr", "Please enter a valid email address");
        } else{
            printError("confirmpasswordErr", "");
            confirmpasswordErr = false;
        }
    }

    if((nameErr || usernameErr || emailErr || countryErr || genderErr || dobErr || mobileErr || passwordErr || confirmpasswordErr) == true) {
       return false;
    } else {
        
        let dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "User Name: " + username + "\n" +
                          "Email Address: " + email + "\n"+
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n"+
                          "dob: " + dob + "\n"+
                          "Mobile Number: " + mobile + "\n" +
                          "Password: " + password + "\n" ;
       
        alert(dataPreview);
    }
};