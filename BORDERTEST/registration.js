
const form = document.querySelector('.registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const confirmPassword = document.querySelector('#confirm-password').value;

  // Validate the form inputs
  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all the fields');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Make an API call to register the user
  fetch('/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Registration successful');
      window.location.href = '/dashboard'; // Redirect to dashboard URL
    } else {
      alert('Registration failed');
    }
  })
  .catch(error => {
    console.error(error);
  });
});
