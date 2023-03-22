 //calls random numbers
//*10 gives numbers between 0 and 10
//Math.ceil makes it whole number
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

//We want to manipulate the header
//We will bring it to the JS with get element
const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById('input');
const formE1 = document.getElementById('form');

let score = 0;
questionE1.innerText = `What is ${num1} times ${num2}?`;
// console.log(num1);
//to get the answer
const solution = num1 * num2;
formE1.addEventListener('submit', ()=>{

    const userSolution = +inputE1.value;
    // console.log(userSolution, typeof userSolution);
    if (userSolution === solution){
        score++;
        console.log(score);
    } else {
        score--;
        console.log(score);
    }
})

function UpdateLocalstorage(){
    localstorage.setItem("score", JSON.stringify(score))
}
