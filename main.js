
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
}
function modelLoaded(){
    console.log("Model is initialized");
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
    }
}