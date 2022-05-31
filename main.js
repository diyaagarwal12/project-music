song1="";
song2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song1=loadSound("https://drive.google.com/file/d/1xWjKuoBrvHkjKpA0iPVFrQfAxGbWbLTV/view?usp=sharing");
    song2=loadSound("https://drive.google.com/file/d/1sLg2xUJJT2HQB-K3LSvMJLnoipih2dU2/view?usp=sharing");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is Initialized');
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
    song1.set(1);
    song1.rate(1);

    song2.play();
    song2.set(1);
    song2.rate(1);
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+ leftWristX+"leftWristY="+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+ rightWristX+"rightWristY="+rightWristY);
    }
}