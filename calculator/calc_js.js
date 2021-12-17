var btn = document.getElementsByClassName("btn");
var dsp = document.getElementById("display");
var clcString = "";
for (var x in btn) {
    if (btn[x].classList.contains('clear')) {
        btn[x].onclick = function() { clear(); };
    } else if (btn[x].classList.contains('equal')) {
        btn[x].onclick = function() { calc(); };
    } else
        btn[x].onclick = function() { strFunc(this); };

}

function calc() {
    dsp.innerHTML = "";
    dsp.innerHTML = eval(clcString);
    clcString = dsp.innerHTML;
}

function clear() {
    dsp.innerHTML = "";
    clcString = "";
}

function strFunc(itm) {
    clcString += itm.innerHTML;
    dsp.innerHTML = clcString;
}

// function strFunc(btnClicked) {

//     // var currentString = input.innerHTML;

//     // 

//     // btn.length;
//     alert(btnClicked.nodeValue);
// }