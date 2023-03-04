var filter = document.getElementById("filter");
var submit = document.getElementById("sub_mit");
var items  = document.getElementById("items");

//add an event listner
filter.addEventListener("keyup",filterItems);
submit.addEventListener("click",submitTags);
items.addEventListener("click", removeItem);
//event listner functions

//event for search
function filterItems(e){
    ///take text and convert text 
    var text = e.target.value.toLowerCase();
    //get all lists
    var items = document.getElementsByTagName("li");
    //convert it to array and access for each loop
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //here it checks the comparision 
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
};

//event for add tag
function submitTags(e){
    e.preventDefault();
    //receive text value of both the tags
    var text1 = document.getElementById("item").value;
    var text2 = document.getElementById("item_comment").value;

    //creating li element
    var lis = document.createElement("li");
    lis.className = "list-group-item";
    lis.append(text1);
    lis.append(document.createTextNode("   "))
    lis.append(text2);
            //now appending these buttons also to it
            var bttn1 = document.createElement("button");
            bttn1.className = "btn btn-light btn-sm float-right edit";
            bttn1.append(document.createTextNode("Edit"));
            
            var bttn2 = document.createElement("button");
            bttn2.className = "btn btn-danger btn-sm float-right delete";
            bttn2.append(document.createTextNode("X"));
    lis.append(bttn1);
    lis.append(bttn2);

    //now appending this lis as items to view by the user
    var all_lists = document.getElementById("items");
    all_lists.appendChild(lis); 
}

//removing items after clicking button
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure.?")){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
};