var names = document.getElementById("name");
var emails = document.getElementById("email");
var submit = document.getElementById("submit");
var items = document.getElementById("users_acc");

submit.addEventListener("click",(e)=>{
    e.preventDefault;
    if(names===""  || emails===""){
        alert("Fill all details..");
    }else{
        var obj = {
            "UserName" : names.value,
            "UserEmail" : emails.value
        }

        obj_serialized = JSON.stringify(obj);
        localStorage.setItem(emails.value , obj_serialized);
        print_to_web(obj_serialized);
    }
})

//delete listner
items.addEventListener("click",(e)=>{
    if(e.target.classList.contains("destroy")){
        if(confirm("Are you sure.?")){
            //deleting from list
            var li = e.target.parentElement;
            var texttt = li.textContent;
            var x = texttt.split(" ");
            var key = x[1];
            localStorage.removeItem(key);
            items.removeChild(li);
            
        }
    }
})

//edit listner
items.addEventListener("click",(e)=>{
    if(e.target.classList.contains("edit")){
        if(confirm("Are you sure you want to edit value")){
            var texttts = e.target.parentElement.textContent;
            var y = texttts.split(" ");
            names.value = y[0];
            emails.value = y[1];
            localStorage.removeItem(y[1]);
            items.removeChild(e.target.parentElement)            
        }
    }
});


function print_to_web(obj_serialized){
    //deserialize the obj first 
    var obj_deserialize = JSON.parse(obj_serialized);
    var li = document.createElement("li");
    li.style.fontSize = "25px";
    li.append(`${obj_deserialize.UserName} ${obj_deserialize.UserEmail}`);
        //creating delete button
        delete_li = document.createElement("button");
        delete_li.className = "destroy";
        delete_li.id = "delete_li";
        delete_li.append(document.createTextNode("Delete"));  
    li.append(" ")
    li.append(delete_li);
    li.append(" ");
        //creating edit button
        edit_btn=document.createElement("button");
        edit_btn.id="edit";
        edit_btn.className="edit";
        edit_btn.append(document.createTextNode("Edit Value"));
    li.append(edit_btn)
    document.querySelector(".users_accounts").appendChild(li);
}





