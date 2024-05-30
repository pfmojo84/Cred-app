import decode from 'jwt-decode';

class Auth {
    getToken() {
        return localStorage.getItem('id_token')
    }

    getProfile() {
        return decode(this.getToken())
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/')
    }

    logout() {
        localStorage.removeItem('id_token')
        window.location.reload();
    }

    isTokenExpired(token) {
        const decoded = decode(token);

        // returns true if expiration time is less than the current time
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    loggedIn() {
        const token = this.getToken();

        // if isTokenExpired returns true, token and false are returned
        // otherwise roken and true are returned
        return token && !this.isTokenExpired(token) ? true : false;
    }

    
}