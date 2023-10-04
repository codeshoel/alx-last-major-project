/**
 * Returns a cookie
 * @param {String} cookieName 
 */

const getCookie = (cookieName) => {
    // Get the value of the cookie named cookieName
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split("=");
    if (cookie[0] === cookieName) {
        let value = cookie[1];
        return value;
    }
    }
}

export default getCookie;