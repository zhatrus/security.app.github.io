const supabaseUrl = 'https://ssdjfcdgxlxcoidpndix.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZGpmY2RneGx4Y29pZHBuZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMTE1NDYsImV4cCI6MjA3MjU4NzU0Nn0.WHruUEls1-V418FducFudKI38HiPGbuNUyFAj_W-z2o';
const baseUrl = 'https://zhatrus.github.io/security.app.github.io';

// Ініціалізація клієнта Supabase
const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

// Функція для оновлення UI в залежності від стану авторизації
function updateUI(session) {
    const elements = {
        auth: document.getElementById('auth-container'),
        content: document.getElementById('main-content'),
        footer: document.getElementById('main-footer')
    };

    if (!elements.auth || !elements.content || !elements.footer) {
        console.log('Очікування елементів DOM...');
        requestAnimationFrame(() => updateUI(session));
        return;
    }

    if (!session) {
        elements.auth.style.display = 'flex';
        elements.content.style.display = 'none';
        elements.footer.style.display = 'none';
        document.body.style.overflow = 'hidden';
    } else {
        elements.auth.style.display = 'none';
        elements.content.style.display = 'block';
        elements.footer.style.display = 'block';
        document.body.style.overflow = 'auto';
    }
}

// Обробка зміни стану авторизації
supabase.auth.onAuthStateChange((event, session) => {
    updateUI(session);
});

// Обробка колбеку авторизації та початкового стану
async function initAuth() {
    try {
        // Перевірка наявності колбеку авторизації
        const hash = window.location.hash;
        if (hash && hash.includes('access_token')) {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            
            // Очищення хешу з URL
            window.history.replaceState(null, '', window.location.pathname);
            updateUI(session);
            return;
        }

        // Перевірка початкової сесії
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        updateUI(session);
    } catch (error) {
        console.error('Помилка ініціалізації авторизації:', error);
    }
}

// Ініціалізація авторизації при завантаженні сторінки
document.addEventListener('DOMContentLoaded', initAuth);

// Функція виходу
async function signOut() {
    try {
        await supabase.auth.signOut();
        window.location.href = `${baseUrl}/auth/login.html`;
    } catch (error) {
        console.error('Помилка виходу:', error);
    }
}

// Експортуємо функції
window.auth = {
    initialize,
    signOut,
    checkAuth
};