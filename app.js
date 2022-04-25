function addEmoj(){
    //var e = document.getElementById("emojies");
    //var value = e.options[e.selectedIndex].value;
    //document.getElementById("formText")=document.getElementById("formText")+value;
    document.getElementById("formTextP").innerHTML="&#128513;";
    
}

document.getElementById("emojies").addEventListener("click",addEmoj)
