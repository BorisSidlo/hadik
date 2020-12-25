
//listeners

document.addEventListener("keydown", keyPush);
// pozadi
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d");

// player 



const snakeSize = 70;
let snakeSpeed = 5;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;


let velocityX=0;
let velocityY=0;


//loop

function gameLoop() {

    drawStuff();
    moveStuff();





    requestAnimationFrame(gameLoop);
}

gameLoop();


function moveStuff() {
    snakePosX += snakeSpeed * velocityX;
    snakePosY += snakeSpeed*velocityY;




    console.log("more")
    
    
    
    if (snakePosX > canvas.width) {
        snakePosX = 0;
    }

    if(snakePosX<-snakeSize){
    snakePosX=canvas.width;

    }

    if(snakePosY<-snakeSize){
        snakePosY=canvas.height;
    }
    if(snakePosY>canvas.height){
        snakePosY=0;
    }
    
}


function drawStuff() {
    rectangle("white", 0, 0, canvas.width, canvas.height);
    rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);
}

//draw rectangle

function rectangle(color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

}

function keyPush(event) {
    switch (event.key) {
        case "ArrowLeft":
           velocityX=-1;
           velocityY=0;
            break;


        case "ArrowUp":
            velocityX=0;
            velocityY=-1;
            break;


        case "ArrowRight":
            velocityX=1;
            velocityY=0;
            break;


        case "ArrowDown":
            velocityX=0;
            velocityY=1;
            break;



    }



}
