/**
 * Sets a cookie that expires after exTime minutes
 * @param {String} cookieName 
 * @param {String} cookieValue 
 * @param {Number} expTime 
 */

const setCookie = (cookieName, cookieValue, expTime) => {
    const currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (expTime*60*1000));
    let expires = "expires=" + currentDate.toUTCString();
    document.cookie = `${cookieName} = ${cookieValue}; ${expires}; path=/`;
}

export default setCookie;