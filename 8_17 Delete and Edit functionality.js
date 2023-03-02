var form = document.getElementById("addForm");
var items  = document.getElementById("items");

//form submit event
form.addEventListener("submit", addItem);

//delete event listner
items.addEventListener("click", removeItem);

//add item function 
function addItem (e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById("item").value;

    //crete new li 
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem))

    

    ///cretae delete button element 
    var del = document.createElement("button");
    //add classes to del 
    del.className = "btn btn-danger btn-sm float-right delete";
    del.appendChild(document.createTextNode("X"));
    
    var edit = document.createElement("button");
    edit.className = "btn btn-light btn-sm float-right edit"
    edit.appendChild(document.createTextNode("Edit"));

    li.appendChild(edit);
    li.appendChild(del);
    items.appendChild(li);

}

///function remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure.?")){
            var li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}