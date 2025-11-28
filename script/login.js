document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const btnLogin = document.getElementById('btnLogin');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }

    emailInput.addEventListener('blur', function() {
        const email = emailInput.value.trim();
        
        if (email === '') {
            showError(emailError, 'Email is required');
        } else if (!validateEmail(email)) {
            showError(emailError, 'Please enter a valid email address');
        } else {
            clearError(emailError);
        }
    });

    emailInput.addEventListener('input', function() {
        if (emailError.textContent !== '') {
            const email = emailInput.value.trim();
            if (email !== '' && validateEmail(email)) {
                clearError(emailError);
            }
        }
    });

    passwordInput.addEventListener('blur', function() {
        const password = passwordInput.value.trim();
        
        if (password === '') {
            showError(passwordError, 'Password is required');
        } else {
            clearError(passwordError);
        }
    });

    passwordInput.addEventListener('input', function() {
        if (passwordError.textContent !== '') {
            const password = passwordInput.value.trim();
            if (password !== '') {
                clearError(passwordError);
            }
        }
    });

    btnLogin.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        if (email === '') {
            showError(emailError, 'Email is required');
            isValid = false;
        } else if (!validateEmail(email)) {
            showError(emailError, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailError);
        }

        if (password === '') {
            showError(passwordError, 'Password is required');
            isValid = false;
        } else {
            clearError(passwordError);
        }

        if (isValid) {
            alert('Login successful! (This is a demo - no backend connected)');
        }
    });
});