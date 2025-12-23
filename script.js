// JavaScript for World Hope Worship Center Website

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Form submission handlers
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        // Reset form
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

function signup(event) {
    event.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        alert('Thank you for signing up, ' + name + '!');
        event.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
    return false;
}

function signin(event) {
    event.preventDefault();
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    if (email && password) {
        alert('Welcome back!');
        event.target.reset();
    } else {
        alert('Please enter your email and password.');
    }
    return false;
}