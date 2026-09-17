let buttons = document.querySelectorAll(".box");
let retbox = document.querySelector("#returnbut");
let wintag = document.querySelector(".wintag");
let msg = document.querySelector(".msg");
let newbut = document.querySelector("#newgamebut");

let turnX = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// game clicking stuff
buttons.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("button was clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        } else{
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// winner tag show case
const winnertag = (winner) => {
    msg.innerText = `Congratulation ! the winner is ${winner}`;
    wintag.classList.remove("hide");
    disablebut () ;
}


// check the winner 
const checkWinner = () => {
    for (const pattern of winPattern) {
        let post1 = buttons[pattern[0]].innerText;
        let post2 = buttons[pattern[1]].innerText;
        let post3 = buttons[pattern[2]].innerText;


        if(post1 != "" && post2 != "" && post3 != ""){
            if(post1 === post2 && post2 === post3){
                console.log("winner", post1);
                winnertag(post1);
                }
             }
        }
};

// disabling the button after the player wins
const disablebut = () => {
    for (const but of buttons) {
        but.disabled = true;
    }
}
// Enabling the button after the player wins
const Enablebut = () => {
    for (const but of buttons) {
        but.disabled = false;
        but.innerText = "";
    }
}

//reset game button tag
    const resetbutton = () => {
        turnX = true;
        wintag.classList.add("hide");
        Enablebut();
    }

// back to new game tag
newbut.addEventListener("click", resetbutton);
retbox.addEventListener("click", resetbutton);
