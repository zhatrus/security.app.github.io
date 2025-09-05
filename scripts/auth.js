// Конфігурація Supabase
const supabaseUrl = 'https://ssdjfcdgxlxcoidpndix.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZGpmY2RneGx4Y29pZHBuZGl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwMTE1NDYsImV4cCI6MjA3MjU4NzU0Nn0.WHruUEls1-V418FducFudKI38HiPGbuNUyFAj_W-z2o';
const baseUrl = 'https://zhatrus.github.io/security.app.github.io';

const supabase = window.supabase.createClient(supabaseUrl, supabaseAnonKey);

class Auth {
    async getSession() {
        try {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error) throw error;
            return session;
        } catch (error) {
            console.error('Session error:', error);
            return null;
        }
    }

    async handleAuthCallback() {
        if (window.location.hash && window.location.hash.includes('access_token')) {
            try {
                const session = await this.getSession();
                if (session) {
                    window.history.replaceState({}, document.title, window.location.pathname);
                    return session;
                }
            } catch (error) {
                console.error('Auth callback error:', error);
            }
        }
        return null;
    }

    async initialize() {
        try {
            const callbackSession = await this.handleAuthCallback();
            if (callbackSession) {
                return callbackSession;
            }
            return await this.getSession();
        } catch (error) {
            console.error('Auth initialization error:', error);
            return null;
        }
    }

    async signInWithGoogle() {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: `${baseUrl}/auth.html`,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent'
                    }
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Google auth error:', error);
            alert('Помилка авторизації через Google');
        }
    }

    async signInWithMicrosoft() {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'azure',
                options: {
                    redirectTo: `${baseUrl}/auth.html`,
                    queryParams: {
                        prompt: 'login'
                    }
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Microsoft auth error:', error);
            alert('Помилка авторизації через Microsoft');
        }
    }

    async signOut() {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
            window.location.href = 'auth.html';
        } catch (error) {
            console.error('Sign out error:', error);
            alert('Помилка при виході з системи');
        }
    }
}

window.auth = new Auth();