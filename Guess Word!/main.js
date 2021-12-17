let str = "";
let gcounter = 0;
let inPlay = false;

function startGame() {
    if (!inPlay) {
        inPlay = true;
        let j = 0;
        let words = ["بینا", "بات", "توپ", "سوپ", "رنج"];
        j = Math.floor(Math.random() * words.length);

        str = words[j];
        // str = words[j].split();
        // for (i = 0; i < words[j].length; i++)
        // let k=Math.floor(Math.random()*words[j].length)
        var shuffled = str.split('').sort(function() { return 0.5 - Math.random() });
        document.querySelector(".c_word").innerHTML = shuffled;
        document.querySelector("#i_content").classList.toggle("hidden");
    }

}

function playGame() {
    // debugger;
    let st = document.getElementById("i_guess").value;
    if (st === str) {
        document.getElementById("i_message").innerHTML = "correct" + "<br>" + "you guess " + gcounter + " times";
        inPlay = false;
        document.querySelector("#i_content").classList.toggle("hidden");
    } else {
        document.getElementById("i_message").innerHTML = "wrong";
        gcounter++;

    }
}