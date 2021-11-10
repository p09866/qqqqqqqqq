var nosex = 0;
var nosey = 0;
var leftwristx = 0;
var rightwristx = 0;
var difference = 0;

function setup(){
    canvas = createCanvas(550,550);
   canvas.position(560,150);
   video=createCapture(VIDEO);
   video.size(550,550);
   var posenet=ml5.poseNet(video,modelloaded);
   posenet.on('pose',gotposes);
}

function draw(){
    background("grey");
    textSize(difference);
    fill("red");
    stroke("black");
    text("Put a text",nosex,nosey)
}

function modelloaded(){
    console.log("PoseNet has been loaded");
}

function gotposes(results,error){
if(results.length>0){
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("The nose x is - "+nosex+" the y is - "+nosey);

    leftwristx = results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = leftwristx - rightwristx;
}
}