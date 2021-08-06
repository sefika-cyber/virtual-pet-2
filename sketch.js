//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock
var dogImg

function preload()
{
	//load images here
dogImg = loadImage("dogImg.png");
 happyDog= loadImage("dogImg1.png");
}

function setup() {
	createCanvas(800, 800);
  
dog=createSprite(400,400,20,20);
dog.addImage(dogImg);

database=firebase.database();

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,136,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  fill(255,255,254);
   stroke("black"); 
   text("Food remaining : "+foodS,170,200); 
   textSize(13);
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

function writeStock(x){
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }

 database.ref('/').update({
   Food:x
 })
}

function readStock(data){
  foodS=data.val()
}