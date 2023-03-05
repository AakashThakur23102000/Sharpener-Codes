var namee = document.getElementById("name");
var email = document.getElementById("email");
var submit = document.getElementById("submit");
var i = 0;
//event listner
submit.addEventListener("click",(e)=>{
    e.preventDefault;
    if(namee.value==="" || email.value===""){
        alert("Enter all feilds again")
    }else{
        localStorage.setItem(`User_Name${i}`,`${namee.value}`);
        localStorage.setItem(`USer_Email${i}`,`${email.value}`);
        i=i+1;
        namee.value="";
        email.value="";
    }
});