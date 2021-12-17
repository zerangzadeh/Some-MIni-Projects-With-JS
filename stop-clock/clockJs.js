var ten = 00,
    sec = 00;
min = 00;
mTimer = 0;
document.getElementById("str").onclick = function() {
    clearInterval(mTimer);
    mTimer = setInterval(startTime, 10);
}
document.getElementById("stp").onclick = function() {
    clearInterval(mTimer);
}
document.getElementById("rst").onclick = function() {
    clearInterval(mTimer);
    ten = "00";
    sec = "00";
    min = "00";
    document.getElementById("ten").innerHTML = ten;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("min").innerHTML = min;
}

function startTime() {
    ten++;
    if (ten < 9) {
        document.getElementById("ten").innerHTML = "0" + ten;
    }
    if (ten > 9)
        document.getElementById("ten").innerHTML = ten;
    if (ten > 99) {
        ten = 0;
        sec++;
        if (sec < 9) document.getElementById("sec").innerHTML = "0" + sec;

        if (sec > 9) document.getElementById("sec").innerHTML = sec;
        if (sec > 59) {
            sec = 0;
            min++;
            if (min < 9)
                document.getElementById("min").innerHTML = "0" + min;
            if (min > 9)
                document.getElementById("min").innerHTML = min;
        }




    }


}



// -------------------------------

function myTime() {
    var date = new Date();
    var h1 = date.getHours();
    var m1 = date.getMinutes();
    var s1 = date.getSeconds();
    if (h1 > 12) {
        document.getElementById("ap").innerHTML = "P.M";
        h1 = h1 - 12;
    }
    if (h1 == 12) {
        h1 = 0;
        document.getElementById("ap").innerHTML = "P.M";
    } else if (h1 > 12)
        document.getElementById("ap").innerHTML = "A.M";


    document.getElementById("hour1").innerHTML = h1;
    document.getElementById("min1").innerHTML = m1;
    document.getElementById("sec1").innerHTML = s1;
    setTimeout(myTime, 1000);
};


myTime();