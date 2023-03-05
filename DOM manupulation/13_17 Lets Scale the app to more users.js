var names = document.getElementById("name");
var emails = document.getElementById("email");
var submit = document.getElementById("submit");

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


function print_to_web(obj_serialized){
    //deserialize the obj first 
    var obj_deserialize = JSON.parse(obj_serialized);
    var li = document.createElement("li");
    li.style.fontSize = "25px";
    li.append(`${obj_deserialize.UserName} ${obj_deserialize.UserEmail}`);
    document.querySelector(".users_accounts").appendChild(li);
}
