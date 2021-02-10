var button = document.getElementById("btn");
var input = document.getElementById("input1");
var ul = document.querySelector("ul");
var listItems = document.querySelector("li");

function inputLength(){
    return input.value.length;
}

function listLength(){
	return listItems.length;
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value= "";

   //remove button
    var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick=removeParent;
}

function addListOnClick(){
    if(inputLength() > 0){
        createList();
    }
}

button.addEventListener("click", addListOnClick);

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}

function removeParent(event){
	event.target.parentNode.remove();
}