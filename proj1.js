let date;
let time;
let mydate;
setInterval(() => {
    mydate = new Date();
    date = mydate.toLocaleDateString();
    time = mydate.getHours() + ':' + mydate.getMinutes() + ':' + mydate.getSeconds();
    document.getElementById('time').innerHTML = time + " on Date: " + date;
}, 1000);