var m = 0;
document.querySelector('.dropdown').addEventListener("click",function(e){
let i = 0
let a = document.querySelector(".dropdown-content");
let b = document.querySelectorAll("a");
if(m == 0){
    a.style.animation = "menu 0.5s forwards";
    for(i;i<b.length;i++){
        delay = 10000;
        b[i].style.display = "block";
    }
}
else{
    a.style.animation = "menu2 0.5s forwards";
    for(i;i<b.length;i++){
        b[i].style.display = "none";
    }

}
if(m == 0){
    m++;
    }
    else{
        m = 0;
    }
});