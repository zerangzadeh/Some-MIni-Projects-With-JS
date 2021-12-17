let inputTasks = document.getElementById("userInput");
let addBtn = document.getElementById("enter");
let taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addItemToListByclick);
inputTasks.addEventListener("keypress", addItemToListByKeyPress);


function addItemToListByclick() {
    if (inputTasks.value.length > 0) {
        addElementsToList();
        inputTasks.value = "";
    }
}

function addItemToListByKeyPress(event) {
    if ((inputTasks.value.length > 0) && (event.which == 13)) {
        addElementsToList();
        inputTasks.value = "";
    }
}

function addElementsToList() {
    let li = document.createElement("li");
    let text = document.createTextNode(inputTasks.value);
    li.appendChild(text);
    taskList.appendChild(li);
    li.addEventListener("click", crossOut);

    function crossOut() {
        li.classList.toggle("done");
        let
    }
    let btnDel = document.createElement("button");
    btnDel.appendChild(document.createTextNode("X"));
    li.appendChild(btnDel);
    btnDel.addEventListener("click", deleteItem);

    function deleteItem() {
        // li.classList.add("delete");
        taskList.removeChild(li);
    }

}