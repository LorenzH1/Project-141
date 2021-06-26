rightWristX = "";
rightWristY = "";
scorerightWrist = "";

function preload(){

}

function setup(){
    var canvas = createCanvas(700, 600);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(700, 600);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('modelLoaded');
}

function gotPoses(results){
	if(results.length > 0){
        console.log(results);
        scoreRightWrist =  results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = " + scoreRightWrist );
    
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        }
}

function draw(){
    image(video, 0, 0, 700, 600);

    if(scoreRightWrist > 0.2){
        fill("#FF0000");
        stroke("#FF0000");
        circle(rightWristX,rightWristY,20);
        
    }
}