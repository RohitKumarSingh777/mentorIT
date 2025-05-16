// Auth state management
class AuthManager {
    constructor() {
        this.user = null;
        this.init();
    }
    
    init() {
        // Check if user is logged in from localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            this.user = JSON.parse(storedUser);
            this.updateUI();
        }
    }
    
    login(email, password, role) {
        // In a real app, this would be an API call
        // Simulating API call for demo
        
        // Mock user data
        const userData = {
            id: `user-${Date.now()}`,
            name: email.split('@')[0],
            email,
            role,
            profileComplete: false
        };
        
        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
        this.updateUI();
        return userData;
    }
    
    signup(name, email, password, role) {
        // In a real app, this would be an API call
        // Simulating API call for demo
        
        // Mock user data
        const userData = {
            id: `user-${Date.now()}`,
            name,
            email,
            role,
            profileComplete: false
        };
        
        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
        this.updateUI();
        return userData;
    }
    
    logout() {
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('mentorProfile');
        this.updateUI();
        
        // Redirect to home page if on a protected page
        const protectedPages = ['dashboard.html', 'mentor-dashboard.html', 'mentor-profile-setup.html'];
        const currentPage = window.location.pathname.split('/').pop();
        
        if (protectedPages.includes(currentPage)) {
            window.location.href = 'index.html';
        }
    }
    
    updateUser(userData) {
        this.user = userData;
        localStorage.setItem('user', JSON.stringify(userData));
        this.updateUI();
    }
    
    updateUI() {
        // Update navbar based on auth state
        const navbarRight = document.getElementById('navbar-right');
        const mobileMenuContent = document.getElementById('mobile-menu-content');
        
        if (!navbarRight || !mobileMenuContent) return;
        
        // Function to toggle the mobile menu
        const toggleMobileMenu = () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('open');
            }
        };

        if (this.user) {
            // Logged in state
            navbarRight.innerHTML = `
                ${this.user.role === 'mentor' ? '<a href="mentor-dashboard.html" class="btn btn-ghost"><i class="fas fa-bell"></i> Notifications</a>' : ''}
                <a href="${this.user.role === 'mentor' ? 'mentor-dashboard.html' : 'dashboard.html'}" class="btn btn-ghost">Dashboard</a>
                <button id="logout-btn" class="btn btn-ghost">Log out</button>
                <button id="mobile-menu-btn" class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            `;
            
            mobileMenuContent.innerHTML = `
                <a href="#">Mentorship</a>
                <a href="#">Expert help</a>
                <a href="#">Freelancing</a>
                <a href="#">More</a>
                <div class="mobile-menu-divider"></div>
                <a href="${this.user.role === 'mentor' ? 'mentor-dashboard.html' : 'dashboard.html'}">Dashboard</a>
                <a href="#" id="mobile-logout-btn">Log out</a>
            `;
            
            // Add event listeners
            document.getElementById('logout-btn')?.addEventListener('click', () => this.logout());
            document.getElementById('mobile-logout-btn')?.addEventListener('click', () => this.logout());
            document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileMenu);
        } else {
            // Logged out state
            navbarRight.innerHTML = `
                <a href="become-mentor.html" class="btn btn-ghost">Become a mentor</a>
                <a href="login.html" class="btn btn-ghost">Log in</a>
                <a href="signup.html" class="btn btn-primary">Sign up</a>
                <button id="mobile-menu-btn" class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            `;
            
            mobileMenuContent.innerHTML = `
                <a href="#">Mentorship</a>
                <a href="#">Expert help</a>
                <a href="#">Freelancing</a>
                <a href="#">More</a>
                <div class="mobile-menu-divider"></div>
                <a href="become-mentor.html">Become a mentor</a>
                <a href="login.html">Log in</a>
                <a href="signup.html" class="mobile-signup-btn">Sign up</a>
            `;
            
            // Add event listener for mobile menu
            document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleMobileMenu);
        }
    }
    
    checkAuth() {
        if (!this.user) {
            // Not logged in, but don't redirect from public pages
            const publicPages = ['index.html', 'login.html', 'signup.html', 'become-mentor.html', 'find-mentor.html', 'mentor-profile.html', ''];
            const currentPage = window.location.pathname.split('/').pop();
            
            if (!publicPages.includes(currentPage)) {
                window.location.href = 'login.html';
                return null;
            }
        }
        
        return this.user;
    }
    
    isLoggedIn() {
        return !!this.user;
    }
    
    getUser() {
        return this.user;
    }
}

// Initialize auth manager
const authManager = new AuthManager();

// Toast notification
function showToast(message, type = 'success') {
    // Create toast container if it doesn't exist
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        </div>
        <div class="toast-content">
            ${message}
        </div>
    `;
    
    // Add toast to container
    toastContainer.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}