leftWristX = 0;
RightWristX = 0;
difference = 0;

function setup(){
video = createCapture(VIDEO);
video.size(400,400);
canvas = createCanvas(400,400);
canvas.position(560,150);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function preload(){

}

function draw(){
    background("#badbd9");
    textSize(difference);
    fill("purple");
    text('Numaira',20,100)
    document.getElementById("font_size").innerHTML = "The font size will be : " + difference + "px"

}
function modelLoaded(){
    console.log("Model is initialized");
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       RightWristX = results[0].pose.rightWrist.x;
       difference = floor(leftWristX - RightWristX);

    }
}