var a;
var arr = JSON.parse(localStorage.getItem("store"))||[];
var give = document.getElementById("write");
console.log(give);
give.style.display = "flex";
function show_hide(){
       
    var dataObj = {task:give.value};
    console.log(dataObj);
    arr.push(dataObj);
    console.log(arr);
    localStorage.setItem("store",JSON.stringify(arr));
    // console.log(localStorage.setItem("store",JSON.stringify(arr)));

    document.getElementById("show").innerHTML = give.value;
    give.value = "";
    if(a==1){
        give.style.display = "flex";
        return a=0;
    }

    else{
        give.style.display = "none";
        return a=1;
    }
    
    }


    
