/**
 * Created by Dan on 4/23/2016.
 */
function addP() {

    //var element = document.createElement("p");
    var node = 
    //var main = document.getElementById("main");
    //main.appendChild(element);
    $("#main").append($("p").html("Hello World"));

    //$("#p1").append("Everyone");
    //var text = document.createTextNode("Hello World");
    //element.appendChild(text);
    //element.style.color = "blue";
}

function removeP() {
    var element = document.getElementsByTagName("p")[0];
    var parent = element.parentNode;
    parent.removeChild(element);
}
/*
function validateNumber() {
    var number = document.getElementById("buyPrice");
    if (number.value < 0) {
        addP();
        number.focus();
        number.style.border = "solid 2px red";
        return false;
    }
}*?