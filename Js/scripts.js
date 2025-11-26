document.addEventListener('DOMContentLoaded'), () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const createItemForm = document.getElementById('createItemForm');}

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = event.target.username.value;
            const email = event.target.email.value;
            const password = event.target.password.value;
            const passwordConfirm = event.target.passwordConfirm.value;

            if (password !== passwordConfirm) {
                alert('Passwords do not match.');
                return;
            }

            // Simulate API call
            console.log('User registered:', { username, email, password });
            alert('Registration successful!');
            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = event.target.username.value;
            const password = event.target.password.value;

            // Simulate API call
            console.log('User logged in:', { username, password });
            alert('Login successful!');
            window.location.href = 'index.html';
        });
    }

    if (createItemForm) {
        createItemForm.addEventListener('submit'), (event) => {
            event.preventDefault();}}
alert("coneected")