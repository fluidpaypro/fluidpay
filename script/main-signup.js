$(document).ready(function () {
    $("#phone").mask("+000 000 000 000", {
        placeholder: "+353 123 456 789"
    });
});

document.getElementById("btnSignUp").addEventListener("click", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var country = document.getElementById("country").value;
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var terms = document.getElementById("terms").checked;

    var errorIds = ["nameError", "emailError", "phoneError", "countryError", "passwordError", "confirmPasswordError", "termsError",];

    errorIds.forEach(function (id) {
        document.getElementById(id).innerText = "";
    });

    var isValid = true;
    var namePattern = /^[A-Za-zÀ-ÿ\s]+$/;
    var emailPattern = /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/;
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (name === "") {
        document.getElementById("nameError").innerText = "Please enter your full name";
        isValid = false;
    }
    else if (!namePattern.test(name)) {
        document.getElementById("nameError").innerText = "Name must contain only letters and spaces"
        isValid = false;
    }
    else if (name.length < 3) {
        document.getElementById("nameError").innerText = "Name must contain at least 3 characters";
        isValid = false;
    }
    else if (name.length > 50) {
        document.getElementById("nameError").innerText = "Name cannot exceed 50 characters";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Please enter your email";
        isValid = false;
    }
    else if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerText = "Please enter your phone number";
        isValid = false;
    }

    if (country === "") {
        document.getElementById("countryError").innerText = "Please select your country";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerText = "Please enter a password";
        isValid = false;
    }
    else if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerText = "Password must contain at least 8 characters, upper and lowercase, number and special character";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Please confirm your password";
        isValid = false;
    }
    else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Password does not match";
        isValid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerText = "You must agree to the terms";
        isValid = false;
    }

    if (isValid) {
        alert("Account created sucessfully")
        document.getElementById("signupForm").reset();
    }
})

function validatePasswordMatch() {
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();
    var error = document.getElementById("confirmPasswordError");

    if (password === "" && confirmPassword === "") {
        error.innerText = "";
        return;
    }

    if (confirmPassword === "") {
        error.innerText = "";
        return;
    }

    if (password === confirmPassword) {
        error.innerText = "";
    } else {
        error.innerText = "Password does not match";
    }
}

document.getElementById("confirmPassword").addEventListener("input", function () {
    validatePasswordMatch();
});

document.getElementById("password").addEventListener("input", function () {
    if (document.getElementById("confirmPassword").value.trim() !== "") {
        validatePasswordMatch();
    }
});
