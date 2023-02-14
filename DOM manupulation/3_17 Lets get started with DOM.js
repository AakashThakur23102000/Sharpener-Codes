// // console.dir(document)

// //gives domain number or local id  and url gives url
// console.log(document.domain);
// console.log(document.URL);

// //gives title 
// console.log(document.title);
// //set new title
// document.title = 123;

// //used to check html doctype
// console.log(document.doctype);

// //used to get head and body and all files in dom with index number
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "Text is channged.."


// //to get all forms on the page 
// console.log(document.forms);
// //to get all the links on website 
// console.log(document.links);
// //to get all the images
// console.log(document.images);


// ////////////selectors
// //getelementbyid
// var header_title = document.getElementById("header-title");
// console.log(header_title);

// //text content shows the data wighout styles
// console.log(header_title.textContent);

// //inner text shows the data after css chsnges 
// console.log(header_title.innerText);

// //inner html is used to add html tags 
// header_title.innerHTML = "<h3>H3</h3>"



//////////////style
// var header_title = document.getElementById("header-title");
// header_title.style.border = "solid 3px black";




//////////get elements by class name
// var list_group = document.getElementsByClassName("list-group-item");
// console.log(list_group[1]);
// //for loop to access all items by for loop
// for(var i = 0; i<list_group.length;i++){
//     list_group[i].style.backgroundColor = "Red";
// }


////get elements by tag name
// var tag_name_call = document.getElementsByTagName("li");
// console.log(tag_name_call);
// for(var i = 0; i<tag_name_call.length;i++){
//     tag_name_call[i].style.backgroundColor = "blue";
// }


// /////query selector only used for one item 
// var header = document.querySelector("#main-header");
// console.log(header);
// header.style.borderBottom = "solid 4px black"

// //changing particular input by its type
// var input = document.querySelector("input[type='submit']");
// console.log(input);
// input.value = "NEW SUBMIT";

// //chnaging list items color of last elemet or last child
// var item = document.querySelector(".list-group-item:last-child");
// console.log(item);
// item.style.color = "blue";
// //chnaging list items color of particular elemet
// var item_second = document.querySelector(".list-group-item:nth-child(2)");
// console.log(item_second);
// item_second.style.color = "pink";






///////query selector alll 
