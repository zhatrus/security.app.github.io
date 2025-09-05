const supabaseUrl = 'https://ssdjfcdgxlxcoidpndix.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZGpmY2RneGx4Y29pZHBuZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMTE1NDYsImV4cCI6MjA3MjU4NzU0Nn0.WHruUEls1-V418FducFudKI38HiPGbuNUyFAj_W-z2o';
const baseUrl = 'https://zhatrus.github.io/security.app.github.io';

// Створюємо клієнт Supabase
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// Перевірка авторизації
async function checkAuth() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
        window.location.href = `${baseUrl}/auth/login.html`;
        return false;
    }
    return true;
}

// Функція для оновлення UI
function updateUI(session) {
    const mainContent = document.getElementById('main-content');
    const mainFooter = document.getElementById('main-footer');

    if (!session) {
        window.location.href = `${baseUrl}/auth/login.html`;
    } else {
        mainContent.style.display = 'block';
        mainFooter.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
}

// Обробка URL після авторизації
async function handleAuthCallback() {
    if (window.location.hash && window.location.hash.includes('access_token')) {
        try {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            
            // Видаляємо хеш з URL
            window.history.replaceState(null, '', window.location.pathname);
            
            // Оновлюємо UI
            updateUI(session);
            return true;
        } catch (error) {
            console.error('Auth callback error:', error);
            window.location.href = `${baseUrl}/auth/login.html`;
        }
    }
    return false;
}

// Ініціалізація авторизації
async function initialize() {
    try {
        // Перевіряємо чи є редірект після авторизації
        const isCallback = await handleAuthCallback();
        if (!isCallback) {
            // Перевіряємо поточну сесію
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            
            if (!session) {
                window.location.href = `${baseUrl}/auth/login.html`;
                return;
            }
            
            updateUI(session);
        }

        // Підписуємось на зміни стану авторизації
        supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed:', event);
            if (event === 'SIGNED_OUT') {
                window.location.href = `${baseUrl}/auth/login.html`;
            } else {
                updateUI(session);
            }
        });

    } catch (error) {
        console.error('Auth initialization error:', error);
        window.location.href = `${baseUrl}/auth/login.html`;
    }
}

// Функція виходу
async function signOut() {
    try {
        await supabase.auth.signOut();
        window.location.href = `${baseUrl}/auth/login.html`;
    } catch (error) {
        console.error('Sign out error:', error);
    }
}

// Експортуємо функції
window.auth = {
    initialize,
    signOut,
    checkAuth
};