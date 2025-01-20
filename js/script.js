window.setInterval(() => {
    let dateText = document.getElementById("date");
    let d = new Date();
    if (d.getHours() > 12) {
        dateText.innerHTML = (d.getHours()-12);
    } else {
        dateText.innerHTML = d.getHours();
    }
    
    if (d.getMinutes() < 10) {
        dateText.innerHTML = dateText.innerHTML + ":0" + d.getMinutes();
    } else {
        dateText.innerHTML = dateText.innerHTML + ":" + d.getMinutes();
    }

    if (d.getSeconds() < 10) {
        dateText.innerHTML = dateText.innerHTML + ":0" + d.getSeconds();
    } else {
        dateText.innerHTML = dateText.innerHTML + ":" + d.getSeconds();
    }

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const monthText = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = weekday[d.getDay()];
    let month = monthText[d.getMonth()];

    dateText.innerHTML = dateText.innerHTML + " - " + day + ", " + month + " " + d.getDate() + ", " + d.getFullYear();
}, 1000);