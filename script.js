let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score");

const genCompChoice= () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random(options)*3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText="Game was draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner=(userWin,userChoice,comChoice) =>{
    if(userWin){
        userScore++;
        UserScorePara.innerText = userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comScorePara.innerHTML=compScore;
        msg.innerText=`You lose, ${comChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame=(userChoice)=>{
    console.log("user Choice = ",userChoice);
    //generate computer choice --> modular function
    const comChoice = genCompChoice();
    console.log("comp choice = ",comChoice);
    if(userChoice === comChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
                //if comp choice scissor , paper
                userWin= comChoice  === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //if comp choice rock , scissor
            userWin= comChoice  === "scissor" ? false : true;
        }
        else{
            //if comp choice rock , paper
            userWin= comChoice  === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});