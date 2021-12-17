let btnNewTask = document.querySelector("#btnNewTask");
btnNewTask.addEventListener("click", checkInput);
let btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", function() {
    taskList.innerHTML = "";
    localStorage.clear();
});
let taskList = document.querySelector("#taskList");
let taskFilter = document.querySelector("#taskFilter");
taskFilter.addEventListener("input", filterTask);

document.addEventListener("DOMContentLoaded", restoreTaskList);

function filterTask() {
    let items = document.querySelectorAll("li");
    for (let i of items) {
        if (!i.innerText.toLowerCase().includes(taskFilter.value.toLowerCase()))
            i.style.display = "none";
        else i.style.display = "block";

    }



}


function checkInput() {
    let newTask = document.querySelector("#newTask");
    if (newTask.value == "")
        alert('شرح کار مورد نظر را وارد نمایید.');
    else addNewTaskFunc(newTask.value);
    addLocalStorage(newTask.value);
    newTask.value = "";
}

function addNewTaskFunc(task) {

    let newItem = document.createElement("li");
    let newItemValue = document.createTextNode(task);
    newItem.appendChild(newItemValue);
    newItem.classList.add("list-group-item");
    taskList.appendChild(newItem);
    let iconDel = document.createElement("i");
    iconDel.className = 'fas fa-times text-danger btnDel mr-auto float-start';
    iconDel.addEventListener('click', function() {
        if (confirm('آیا از حذف آیتم مطمین هستید؟'))
            taskList.removeChild(newItem);
        removeLocalStorage(newItem);

    });
    newItem.appendChild(iconDel);





}
//

function addLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function removeLocalStorage(taskItem) {
    // alert(taskItem.textContent);
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let x of tasks) {
        if (taskItem.textContent === x) {
            let i = tasks.indexOf(x);
            // alert(i);
            tasks.splice(i, 1);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function restoreTaskList() {
    // alert("hi"); 
    let tasks;
    if (localStorage.getItem('tasks') === null)
        tasks = [];
    else tasks = JSON.parse(localStorage.getItem('tasks'));
    // alert(tasks.length);
    tasks.forEach(function(task) {
        addNewTaskFunc(task);
    });
    // for (let x of tasks)
    //     addNewTaskFunc(x);


}

//

// function clearTaskFunc() {
//     // let liItems = document.getElementsByTagName('li'),
//     //     i = 0;
//     // while (taskList.hasChildNodes()) {
//     //     taskList.removeChild(liItems[i]);
//     //     i++;

//     // }
//     // 
// }