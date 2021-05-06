//Create variables here
var saddoggo,happydoggo,food
var db, sdb
var milk

function preload()
{
	//load images here
  saddoggo=loadImage("images/sad.png")
  happydoggo=loadImage("images/happydoggo.png")
  milk=loadImage("images/Milk.png")
}

function setup() {

	createCanvas(800, 700);
  dog=createSprite(600,350)
  dog.addImage("pet",saddoggo)
  dog.scale=0.3
  bu1=createButton("add Food")
  bu2=createButton("add Stock")
  bu1.position(200,200)
  bu2.position(200,300)
  bu1.mousePressed(givefood)
  bu2.mousePressed(stockadd)
  db=firebase.database()
  db.ref("food").on("value",function(data){
sdb=data.val()

  })
}


function draw() {  
  background('coral')
  y=50
  for(var i=0; i<sdb; i++){
     if(i%10===0){
       x=80

       y=y+50
     }
     image(milk,x,y,50,50)
     x=x+30

  } 
  drawSprites();
  //add styles here

}

function givefood(){
sdb=sdb-1
db.ref("/").update({
food:sdb
})

}

function stockadd(){
sdb=sdb+1
db.ref("/").update({
food:sdb
})

}




