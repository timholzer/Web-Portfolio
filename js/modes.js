document.getElementById("normalmode").addEventListener("click", function(){
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = "css/homestyle.css";
    //change to
    //container.setAttribute("class", "container light")
});
document.getElementById("darkmode").addEventListener("click", function(){
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = "css/darkmode.css";
});
document.getElementById("darkermode").addEventListener("click", function(){
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = "css/darkermode.css";
});
document.getElementById("darkestmode").addEventListener("click", function(){
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = "css/darkestmode.css";
});
