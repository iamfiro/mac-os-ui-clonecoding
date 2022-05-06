function time() {
    var today = new Date;
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1;  // 월
    let date = today.getDate();  // 날짜
    let day = today.getDay();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' '  + ampm;
    document.getElementById('mac-top-bar-menu-time').innerHTML = today.toLocaleTimeString();
}

var date = new Date;
let reverse = setInterval(time, 10)