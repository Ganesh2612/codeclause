const inputBox=document.getElementById("type-text");
const listContainer=document.getElementById("elements");
function addTask(){
    if(inputBox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
    //removeData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("marked");
        saveData();
        //removeData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
        //removeData();
    }
}, false);
/*function removeData(){
    localStorage.removeItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.removeItem("data");
}
showTask();*/


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();