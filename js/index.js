// history
document.referrer
// domain
window.location.origin
// check cookie js smartpop_show_reviewed
document.cookie.replace(/(?:(?:^|.*;\s*)smartpop_show_reviewed\s*\=\s*([^;]*).*$)|^.*$/, "$1")
// set cookie
let d = new Date();
d.setTime(d.getTime() + (1000*24*60*60*1000));
let expires = "expires="+ d.toUTCString();
document.cookie = "smartpop_show_reviewed" + "=" + true + ";" + expires + ";path=/smartpop";
