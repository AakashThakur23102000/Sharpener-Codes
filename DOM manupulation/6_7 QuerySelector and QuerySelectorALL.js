//query selector 

var item_2 = document.querySelector(".list-group-item:nth-child(2)");
console.log(item_2);
item_2.style.backgroundColor = "Green";

var item_3 = document.querySelector(".list-group-item:nth-child(3)");
console.log(item_3);
item_3.remove();


//query selector all
var items_2nd = document.querySelectorAll(".list-group-item");
console.log(items_2nd[1]);
items_2nd[1].style.color = "LightGreen";

var all_items = document.querySelectorAll(".list-group-item:nth-child(odd)");
console.log(all_items);
for(var i = 0; i<all_items.length;i++){
    all_items[i].style.backgroundColor = "Green";
}