function icon_event(number) {
    var circle = document.getElementById("mac-bottom-bar-circle");
    var title = document.getElementById("title");

    switch(number) {
        case 1:
            circle.style.left = "34px";
            title.innerText = "Finder";
            break;
        case 2: 
            circle.style.left = "110px";
            title.innerText = "Safari";
            break;
        case 3: 
            circle.style.left = "185px";
            title.innerText = "Message";
            break;
        case 4: 
            circle.style.left = "260px";
            title.innerText = "Mail";
            break;
        case 5: 
            circle.style.left = "335px";
            title.innerText = "Map";
            break;
        case 6: 
            circle.style.left = "410px";
            title.innerText = "Photo";
            break;
        case 7: 
            circle.style.left = "485px";
            title.innerText = "Terminal";
            break;
        case 8: 
            circle.style.left = "560px";
            title.innerText = "Memo";
            break;
        case 9: 
            circle.style.left = "635px";
            title.innerText = "Music";
            break;
        case 10: 
            circle.style.left = "710px";
            title.innerText = "Final Cut Pro";
            break;
        case 11: 
            circle.style.left = "825px";
            title.innerText = "Appstore";
            break;
        case 12: 
            circle.style.left = "902px";
            title.innerText = "Setting";
            break;
    }
}