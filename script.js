var myinput = document.getElementById("myinput");


myinput.addEventListener('input',SaveTextArea)

function SaveTextArea(){
    let val = myinput.value;
  
    localStorage.setItem("data",val);
    
    
}

window.addEventListener("load",storeVal)

function storeVal(){
    let needval = localStorage.getItem("data");
    myinput.innerText = needval;
}