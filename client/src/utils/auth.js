import { jwtDecode } from 'jwt-decode';

class Auth {
    getToken() {
        return localStorage.getItem('id_token');
    }

    getProfile() {
        return jwtDecode(this.getToken());
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    logout() {
        const token = localStorage.getItem('id_token');
        localStorage.removeItem('id_token');
        window.location.reload();

    }

    isTokenExpired(token) {
        const decoded = jwtDecode(token);

        // returns true if expiration time is less than the current time
        if (decoded.exp < Date.now() / 1000) {
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }

    // gets the token from local storage and returns true if userType is Worker and False if it is Employer
    // this is used to display the correct pages based on which user is logged in
    userType() {
        const token = this.getToken();
        const decoded = jwtDecode(token);
        const userType = decoded.data.userType
        if (userType === 'Worker'){
            return true;
        } else {
            return false;
        }
    }
}

export default new Auth();