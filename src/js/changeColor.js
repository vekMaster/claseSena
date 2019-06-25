function changeBg(color) {
    if(document.body.style.backgroundColor !== color)
        document.body.style.backgroundColor = color;
    else 
    document.body.style.backgroundColor = "white";
}

module.exports = changeBg;