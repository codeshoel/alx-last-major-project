/**
 * Destroys a cookie
 * @param {String} cookieName 
 */

const deleteCookie = (cookieName) => {
    // Delete the value of the cookie named cookieName
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export default deleteCookie;