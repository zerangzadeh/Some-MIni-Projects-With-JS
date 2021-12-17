function sendFunc() {
    let currentMsg = document.getElementById("msgTxt").value;
    console.log(currentMsg);
    let chatPerivious = document.querySelector('#chBox');
    let itemList = document.createElement('li');
    itemList.style.backgroundColor = "white";
    itemList.style.marginTop = "10px";
    let newItemMsg = document.createTextNode(currentMsg);
    newItemMsg = `>> ${newItemMsg.nodeValue}`;
    itemList.append(newItemMsg);
    chatPerivious.append(itemList);
    document.getElementById("msgTxt").value = "";
    console.log(chatPerivious);
}