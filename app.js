

const userScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");
const scoreBoardDiv = document.querySelector(".score-board");
const resultDiv = document.querySelector(".result > p"); 
const rockDiv = document.querySelector("#r");
const paperDiv = document.querySelector("#p");
const scissorsDiv = document.querySelector("#s");


let userScore = 0;
let computerScore = 0;


function main() {
    rockDiv.addEventListener("click", function () {
        game("r");
    });

    paperDiv.addEventListener("click", function () {
        game("p");
    });

    scissorsDiv.addEventListener("click", function () {
        game("s");
    });
}

main();


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}




function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rs":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultDiv.innerHTML = ` ${convertKeyWords(userChoice)} VS ${convertKeyWords(computerChoice)} 🔥 Bạn Thắng! `;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = ` máy đã chọn ${convertKeyWords(computerChoice)} 🤣 Bạn Thua! `;
}

function draw(userChoice, computerChoice) {
    resultDiv.innerHTML = "Hòa Rồi 🤗 ";
}


function convertKeyWords(letter) {
    if (letter === "r") return "Búa";
    if (letter === "p") return "Bao";
    return "Kéo"
}