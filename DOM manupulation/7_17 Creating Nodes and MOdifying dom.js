//////////////////////////// Traversing the dom//

// var itemList = document.querySelector("#items");
// //parent node
// //here div is our parent node
// console.log(itemList);
// // itemList.parentNode.style.backgroundColor = "Red";
// console.log(itemList.parentNode.parentNode.parentNode);


// ///////////////parent element are also same thing 
// console.log(itemList.parentElement);


// ///////////////////////////child nodes
// ///////it returns in arrays
// //it also takes spaces in arrays so we use childern
// console.log(itemList.childNodes);
// console.log(itemList.children);
// ///////////first child/////
// //it also takes first element as spaces in so we use firstelemntchild 
// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild);
// ///////////last child/////
// //it also takes last element as spaces in so we use firstelemntchild 
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild);


// //////////////////siblings

// //nextSibling -- it returns the next sibling of the element
// //it also takes spaces so we use nextElemntSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// //previousSibling -- it returns the previous sibling of the element
// //it also takes spaces so we use previousElemntSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);












//////////////////////create a Element
//create a div
var newDiv = document.createElement("div");
console.log(newDiv);    
newDiv.className = "New_Div";
newDiv.id = "new_id";
//to set new attribute or property 
newDiv.setAttribute("title","Hello World");


//create a text node or text inside div
var newDivText = document.createTextNode("HEllo Word");
newDiv.style.fontSize = "25px"
//appending it to old div
newDiv.appendChild(newDivText);

var contents = document.querySelectorAll(".container");
var x = contents[0]

var h1 = document.querySelector("#header-title")

//inserting in html command
x.insertBefore(newDiv,h1)





//sharpener assignement
var newLi = document.createElement("li");
console.log(newLi);
newLi.appendChild(newDivText);

var conntent2 = document.querySelector("#items");
console.log(conntent2);

var l1 = document.querySelectorAll(".list-group-item")
console.log(l1[0])

newLi.className = "list-group-item"
conntent2.insertBefore(newLi,l1[0]);
