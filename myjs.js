
// pozadi
const canvas = document.querySelector('canvas')
const ctx= canvas.getContext("2d");

 // player 



const snakeSize=20;
let snakePosX=50;
let snakePosY=canvas.height/ 2- snakeSize/2;

ctx.fillStyle='white';
ctx.fillRect(0,0,canvas.width,canvas.height); // size of ctverec 

 ctx.fillStyle="black";
 ctx.fillRect(snakePosX,snakePosY,snakeSize,snakeSize);






ctx.stroke();

//loop

function gameLoop(){

ctx.fillStyle='white';
ctx.fillRect(0,0,canvas.width,canvas.height); // size of ctverec 


ctx.fillStyle="black";
ctx.fillRect(snakePosX,snakePosY,snakeSize,snakeSize);

snakePosX=snakePosX+4;



requestAnimationFrame(gameLoop);
}

gameLoop();