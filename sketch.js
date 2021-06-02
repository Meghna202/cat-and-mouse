var bg, bgimg, tom, jerry, sleepingCat, walkingCat, sittingCat, giftMouse, teasingMouse, standingMouse;
 
function preload() {
    bgimg=loadAnimation("garden.png");
    sleepingCat=loadAnimation("cat1.png");
    giftMouse=loadAnimation("mouse1.png")

    teasingMouse=loadAnimation("mouse2.png", "mouse3.png")
    standingMouse=loadAnimation("mouse4.png")

    walkingCat=loadAnimation("cat2.png", "cat3.png");
    sittingCat=loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    bg=createSprite(500, 400, 1000, 800);
    bg.addAnimation("b", bgimg);

    tom=createSprite(850, 650, 10, 10);
    tom.addAnimation("sleep", sleepingCat);
    tom.addAnimation("walk", walkingCat);
    tom.addAnimation("sit", sittingCat);  
    tom.changeAnimation("sleep", sleepingCat);  
    tom.scale=0.2

    jerry=createSprite(150, 660, 10, 10);
    jerry.addAnimation("gift", giftMouse);
    jerry.addAnimation("tease", teasingMouse);
    jerry.addAnimation("stand", standingMouse);
    jerry.changeAnimation("gift", giftMouse);
    jerry.scale=0.15
}

function draw() {

    background(225);  
    drawSprites(); 

    if(Math.abs(tom.x-jerry.x) < 220) {        
        keyPressed();
    } 

    if(keyDown(LEFT_ARROW)) { 
        if (tom.x > jerry.x+110) {
            tom.x=tom.x-3;
            tom.changeAnimation("walk", walkingCat);
            jerry.changeAnimation("tease", teasingMouse);
        } 
    } 
    
}


function keyPressed() {
    tom.changeAnimation("sit", sittingCat);
    jerry.changeAnimation("stand", standingMouse);

}
