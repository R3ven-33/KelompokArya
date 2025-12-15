// Authentication JavaScript (for login and register pages)
document.addEventListener('DOMContentLoaded', function() {
    // Sample user and admin data
    const users = [
        { email: 'user@example.com', phone: '081234567890', password: 'password123', name: 'Ahmad Jaelani', type: 'user' },
        { email: 'admin@example.com', phone: '081234567891', password: 'admin123', name: 'Admin Utama', type: 'admin' }
    ];

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const rememberMe = document.getElementById('rememberMe').checked;

            // Basic validation
            if (!email || !password) {
                alert('Mohon lengkapi semua field');
                return;
            }

            // Find user in sample data
            const user = users.find(u => (u.email === email || u.phone === email) && u.password === password);

            if (user) {
                alert(`Login berhasil sebagai ${user.name}!`);

                // Store login status in localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userType', user.type);
                localStorage.setItem('userName', user.name);

                // Redirect based on user type
                if (user.type === 'admin') {
                    window.location.href = 'dashboard-admin.html';
                } else {
                    window.location.href = 'dashboard-user.html';
                }
            } else {
                alert('Email/HP atau kata sandi salah');
            }
        });
    }
    
    // Register form submission
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('regEmail').value;
            const phone = document.getElementById('regPhone').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const termsAgreement = document.getElementById('termsAgreement').checked;
            
            // Validation
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                alert('Mohon lengkapi semua field');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Kata sandi tidak cocok');
                return;
            }
            
            if (!termsAgreement) {
                alert('Mohon setujui syarat dan ketentuan');
                return;
            }
            
            if (password.length < 8) {
                alert('Kata sandi minimal 8 karakter');
                return;
            }
            
            // In a real application, this would send registration data to the server
            alert('Registrasi berhasil! Silakan login.');
            
            // Redirect to login page
            window.location.href = 'login.html';
        });
    }
    
    // Password visibility toggle (if needed)
    function addPasswordToggle() {
        const passwordFields = document.querySelectorAll('input[type="password"]');
        passwordFields.forEach(field => {
            const toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
            toggleBtn.style.position = 'absolute';
            toggleBtn.style.right = '10px';
            toggleBtn.style.top = '50%';
            toggleBtn.style.transform = 'translateY(-50%)';
            toggleBtn.style.border = 'none';
            toggleBtn.style.background = 'none';
            toggleBtn.style.cursor = 'pointer';
            
            const container = field.parentNode;
            container.style.position = 'relative';
            container.appendChild(toggleBtn);
            
            toggleBtn.addEventListener('click', function() {
                if (field.type === 'password') {
                    field.type = 'text';
                    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
                } else {
                    field.type = 'password';
                    toggleBtn.innerHTML = '<i class="fas fa-eye"></i>';
                }
            });
        });
    }
    
    // Add password toggle to existing password fields
    addPasswordToggle();
});