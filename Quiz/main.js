let questionCards = [{
    qus: "what1?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "1",
    score: "20"
}, {
    qus: "what2?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "2",
    score: "10"
}, {
    qus: "what3?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "3",
    score: "50"
}, {
    qus: "what4?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "3",
    score: "50"
}, {
    qus: "what5?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "3",
    score: "50"
}, {
    qus: "what6?",
    a1: "yes",
    a2: "no",
    a3: "not known",
    ans: "3",
    score: "50"
}];
let counter = 0;
let score = 0;
let correct = 0;
let wrong = 0;
document.querySelector("#next").addEventListener('click', nextQue);
// document.getElementsByClassName(body).addEventListener('load', fillBox);

function fillBox() {
    document.querySelector("#question").innerHTML = questionCards[counter].qus;
    document.querySelector("#lA1").innerHTML = questionCards[counter].a1;
    document.querySelector("#lA2").innerHTML = questionCards[counter].a2;
    document.querySelector("#lA3").innerHTML = questionCards[counter].a3;

}


document.querySelector("#next").addEventListener('click', nextQue);

function nextQue() {

    setScore();
    counter++;
    if (counter < questionCards.length) {
        document.querySelector("#question").innerHTML = questionCards[counter].qus;
        document.querySelector("#lA1").innerHTML = questionCards[counter].a1;
        document.querySelector("#lA2").innerHTML = questionCards[counter].a2;
        document.querySelector("#lA3").innerHTML = questionCards[counter].a3;
        document.querySelector("#a1").checked = false;
        document.querySelector("#a2").checked = false;
        document.querySelector("#a3").checked = false;

    } else {
        document.getElementById('next').innerHTML = "Finish"
        document.querySelector(".score").style.display = "block";
        let str = `your scores is ${score}
        --- your correct answer ${correct}
        --- your wrong answer ${wrong}`;
        document.querySelector(".score").innerHTML = str;

    }

}

function setScore() {
    const rbs = document.querySelectorAll('input[name="answer"]');
    for (let itm of rbs)
        if (itm.checked && itm.value == questionCards[counter].ans) {
            score += parseInt(questionCards[counter].score);
            return correct++;
        }
    return wrong++;
}