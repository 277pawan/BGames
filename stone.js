let userScore=0;
let computerScore=0;
const userscore_span=document.getElementById("user-score");
const computerscore_span=document.getElementById("computer-score");
const scoreboard_div=document.querySelector(".Box1");
const result_p=document.querySelector(".result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");




function converter(letter)
{
if(letter==="r")return "Rock";
if(letter==="p")return "Paper";
if(letter==="s")return "Scissor";
}




function win(userChoice,computerChoice)
{
userScore++;
userscore_span.innerHTML=userScore;
computerscore_span.innerHTML= computerScore;
result_p.innerHTML=converter(userChoice) +" beats "+ converter(computerChoice) +" <mark>You Win🏆🏆</mark>";

}

function lose(userChoice,computerChoice)
{
computerScore++;
computerscore_span.innerHTML= computerScore;
userscore_span.innerHTML=userScore;
result_p.innerHTML=converter(userChoice) +" gets beeted by "+ converter(computerChoice) +" You Lose🐵🐵";
}
function draw(userChoice,computerChoice)
{
result_p.innerHTML=converter(userChoice) +" and "+ converter(computerChoice) +" Drawwww";

}
function getcomputerChoice()
{
const choose=['r',  'p',  's'];
const randomnumber=Math.floor(Math.random()*3);
return choose[randomnumber];
}

function game(userChoice)
{
const computerChoice=getcomputerChoice();
switch(userChoice+computerChoice)
{
case "pr":
case "rs":
case "sp":
win(userChoice,computerChoice);
break;
case "rp":
case "ps":
case "sr":
lose(userChoice,computerChoice);
break;
case "rr":
case "pp":
case "ss":
draw(userChoice,computerChoice);
break;

}
}

function main()
{
rock_div.addEventListener('click',function()
{
game("r");
})
paper_div.addEventListener('click',function()
{
game("p");
})
scissor_div.addEventListener('click',function()
{
game("s");
})
}
main();
