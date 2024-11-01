const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addBtn = document.querySelector("#addbtn")

addBtn.addEventListener('click', addTask)
function addTask() {
    
    if(inputBox.value === ''){
        alert("Enter in the input field.")
        inputBox.focus()
    }
    else
    {
    let li = document.createElement('li')
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();