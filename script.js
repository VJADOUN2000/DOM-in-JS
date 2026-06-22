var istatus = document.querySelector("h5");


var addFriend = document.querySelector("#add")

var remove = document.querySelector("#remove")

addFriend.addEventListener("click", function(){
    istatus.innerHTML ="Added to Friend list !"
    istatus.style.color ="green"
} )

remove.addEventListener("click", function(){
    istatus.innerHTML ="Remove from Friend list !"
    istatus.style.color = "red";
})