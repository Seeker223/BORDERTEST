
// Select the form element
const form = document.querySelector('.form');

// Add an event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior

  // Get the username and password input values
  const username = document.querySelector('.input-name').value;
  const password = document.querySelector('.password').value;

  // Authenticate the user (replace with your authentication logic)
  if (username === 'admin' && password === 'password') {
    // Login successful, redirect to dashboard (replace with your dashboard URL)
    window.location.href = 'dashboard.html';
  } else {
    // Login failed, display error message
    alert('Invalid username or password');
  }
});
