var reguser = JSON.parse(localStorage.getItem("storedreguser"))
console.log(reguser);
document.querySelector("#form").addEventListener("submit",login)
function login(event){
    event.preventDefault();
    var email = document.querySelector("#email").value
    var pass = document.querySelector("#pass").value;
    var flag = false;
    for(var i=0;i<reguser.length;i++)
    {
        if(email==reguser[i].email && pass==reguser[i].password)
        {
            flag = true;
        }
        else{
            flag = false;
        }
    }
    if(flag == true)
        {
            alert("Login Succesful");
        }
        else if(flag==false)
        {
        alert("Invalid Credentials")
        }

}