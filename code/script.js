// Handle form submission for manual login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    if (username === 'admin' && password === 'password') {
        // Redirect to the dashboard page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});

// Handle Google Sign-In response
function handleCredentialResponse(response) {
    // Decode the JWT token to get user info
    const responsePayload = JSON.parse(atob(response.credential.split('.')[1]));

    console.log('Google Sign-In Response:', responsePayload);

    // Redirect to the dashboard page after successful login
    window.location.href = 'index.html';
}