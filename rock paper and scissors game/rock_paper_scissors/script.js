let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
const userScoreMsg = document.querySelector("#user");
const compScoreMsg = document.querySelector("#comp");

//GAME code ------------------------------------------------------------
const showWinner = (userWin,userId,compId) => {
    if (userWin) {
        userScore ++ ;
        userScoreMsg.innerText = userScore;
        msg.innerText = `You won !! Your ${userId} beats ${compId}`;
        msg.style.backgroundColor = "green";
    }
    else{
        msg.innerText = `You LOST :( ${compId} beats your ${userId}`;
        msg.style.backgroundColor = "red";
        compScore++ ;
        compScoreMsg.innerText = compScore;

    }
}

// logic for the game -----------------------------------------------------------
const game = (userId) => {
    // generate comp choice
    const compId = computerChoice();
    //game
    if(userId === compId){
        msg.innerText = "this was a Draw";
        msg.style.backgroundColor = "yellow";
    }
    else {
        let userWin = true;
        if(userId === "rock"){
            userWin = compId === "paper" ? false : true;
        } else if (userId === "paper"){
            userWin = compId === "rock" ? true : false;
        }
        else {
            userWin = compId === "scissors" ? false :true;
        }
        showWinner (userWin, userId, compId);
    }
};

// User choicing code-----------------------------------------------------------
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userId = choice.getAttribute("id");
        game(userId);
    })
});


//Comp choicing code 
const computerChoice = () => {
    const CompOtions = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random()* 3);
    return CompOtions [randomChoice];
}
