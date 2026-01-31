let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "blue", "green"]

let started = false;
let level = 0;

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 500)
}

let h2 = document.querySelector("h2");
function levelUp(){
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor);
    console.log("gameSeq: ", gameSeq)

    btnFlash(randBtn)
}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]) {    // if color matches
      if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
      }
    } else {    // if color not matches
      h2.innerText = `Game Over! Press any key to start \n Your score was ${level}`
      document.querySelector("body").style.backgroundColor = "red";

      setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "#676363"
      }, 150);
      reset()
    }
}

function btnPress(){
    //console.dir(this);
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor)
    console.log("userSeq: ", userSeq)
    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    console.log("Game reset!")
    started = false
    gameSeq = []
    userSeq = []
    level = 0
}