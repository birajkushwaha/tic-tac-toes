let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#newbtn")
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turn_O=true;

const winPattens=[
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn_O=true;
    enableBoxes();
msgContainer.classList.add("hide");
};




boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       
        if(turn_O){
            box.innerText="O";
        box.classList.add("o-style");
            turn_O=false;
        }else{
            box.innerText="X"
            box.classList.add("x-style")
            turn_O=true;
        }
        box.disabled=true;

checkWinner();

    });
});
const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

const showWinner=(winner)=>{
    msg.innerText=`congratulations Winner is : ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};


const checkWinner=()=>{
for(let patten of winPattens){
  
    let pos1Val= boxes[patten[0]].innerText;
    let pos2Val= boxes[patten[1]].innerText;
    let pos3Val= boxes[patten[2]].innerText;
     
    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner",pos1Val); 

        showWinner(pos1Val);


        }
     }
    }
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerText === "") isDraw = false;
    });

    if (isDraw) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
};



newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);