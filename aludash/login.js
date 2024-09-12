// Function to handle user sign-in
function handleSignIn(event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;

    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store token and role in local storage
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('userRole', data.role);
            redirectBasedOnRole(data.role); // Redirect user based on their role
        } else {
            alert('Login failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to handle user sign-up
function handleSignUp(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const role = document.querySelector('input[name="role"]:checked').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password, role })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert('Registration successful, please log in.');
            showSignIn(); // Function to switch to sign-in form
        } else {
            alert('Registration failed: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function to redirect based on role (for demonstration purposes)
function redirectBasedOnRole(role) {
    if (role === 'admin') {
        window.location.href = '/admin-dashboard.html';
    } else {
        window.location.href = '/user-dashboard.html';
    }
}

// Function to show the sign-in form (for demonstration purposes)
function showSignIn() {
    document.getElementById('signUpForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
}
