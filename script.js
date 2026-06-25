var istatus = document.querySelector("h5");


var addFriend = document.querySelector("#add")
var flag = 0;

addFriend.addEventListener("click", function(){
    if(flag==0){
    istatus.innerHTML ="Added to Friend list !"
    istatus.style.color ="green"
    console.log("Click on add")
    addFriend.textContent ="Remove";
    flag =1;
    }

    else{
        istatus.innerHTML ="Remove from List";
        addFriend.textContent ="Add Friend";
        istatus.style.color ="red";
        console.log("Remove Friend!")
        flag =0;
    }
    
} )

