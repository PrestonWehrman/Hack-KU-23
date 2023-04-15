var now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
var nt = now.toISOString().slice(0, 16);
console.log(nt);
document.getElementById("time").setAttribute("value", nt);