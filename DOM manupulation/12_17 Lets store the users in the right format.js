var namee = document.getElementById("name");
var email = document.getElementById("email");
var submit = document.getElementById("submit");
    //empty object 
var emp_obj = {};

//event listner
submit.addEventListener("click",(e)=>{
    if(namee.value==="" || email.value===""){
        alert("Enter all feilds again")
    }else{
        //here we are going to store values in the object and then pass it to localstorage
        emp_obj["Username"] = namee.value;
        emp_obj["UserEmail"] = email.value;
        
        //here we convert our object to string
        let obj_serialized = JSON.stringify(emp_obj);
        localStorage.setItem("OBJ",obj_serialized);
        
        namee.value="";
        email.value="";
    }
}); 

///////to get back our orignal object that we serialized we have to deserialized it back to obj
// we do this by 
// JSON.parse(emp_obj);