let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;
 const win_arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
 ];

const resetgame = () => {
    turnO = true;
    eanabledboxes();
    msgcontainer.classList.add("hide");
};


 boxes.forEach((box) => {   
    box.addEventListener( "click", () => {
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true
        checkwinner();
    })
 });

const disabledboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const eanabledboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    }
};

 const showwinner = (winner)=>{
    msg.innerText= `winner ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
 };
  const checkwinner=(()=>{
 for(let pattern of win_arr){
    let pos1val= boxes[pattern[0]].innerText;
    let pos2val= boxes[pattern[1]].innerText;
    let pos3val= boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val != "")
    {
        if(pos1val == pos2val && pos2val == pos3val){
            showwinner(pos1val);
        }
    }
 }
  });

  newgamebtn.addEventListener("click", resetgame);
  resetbtn.addEventListener("click", resetgame);