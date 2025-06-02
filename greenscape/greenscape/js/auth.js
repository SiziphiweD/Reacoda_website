document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    try {
        const submitBtn = e.target.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<div class="loading"></div>';

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        if (remember) {
            localStorage.setItem('rememberMe', 'true');
        }

        // Redirect to welcome page
        window.location.href = 'welcome.html';
    } catch (error) {
        showError('Invalid email or password');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Login';
    }
}); 