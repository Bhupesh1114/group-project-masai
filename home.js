var a;
document.getElementById("write").style.display = "none";
function show_hide(){
       if(a==1){
           document.getElementById("write").style.display = "none";
           return a=0;
       }

       else{
           document.getElementById("write").style.display = "flex";
           return a=1;
       }
    }