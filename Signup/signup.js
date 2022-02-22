document.querySelector("#form").addEventListener("submit",signup);

var reguserarr = JSON.parse(localStorage.getItem("storedreguser"))||[]

function signup(event){
    event.preventDefault();
    var fullname = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var company = document.querySelector("#company").value;
    var website = document.querySelector("#website").value;
    var password = document.querySelector("#password").value;

    var reguserobj ={
        fullname :fullname,
        email:email,
        company:company,
        website:website,
        password:password,
    }

    reguserarr.push(reguserobj)
    console.log(reguserarr)
    var flag = false
    for(var i=0;i<reguserarr.length;i++)
    {
        if(reguserarr[i].fullname=="" || reguserarr[i].email==""||reguserarr[i].company==""||reguserarr[i].website=="" )
        {
            flag = true;
        }
        else{
            flag = false;
        }
    }
    if(flag==true)
    {
        alert("Missing Credential");
    }
    else if(flag==false)
    {
        alert("Signup Successfull")
    }

    localStorage.setItem("storedreguser",JSON.stringify(reguserarr))
}