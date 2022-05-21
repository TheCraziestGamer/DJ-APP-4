song = "";
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;
function preload() {
    song = loadSound("music2.mp3");
    song2 = loadSound("music.mp3");
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoint[10].score;
        scoreLeftWrist = results[0].pose.keypoint[9].score;
        console.log("scoreRightWrist =" + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;

        console.log("leftWristX = " + leftWristX + "leftWristY" + leftWristY);
        console.log("rightWristX = " + rightWristX + "rightWristY" + rightWristY);

    }


}

function modelLoaded() {
    console.log("PoseNet has been intiallised");

}
function draw() {
    image(video, 0, 0, 500, 500);

}













if (scoreRightWrist > 0.2) {
    circle(rightWristX, rightWristY, 20);
    song2.stop();
    if (song1_status == false) {
        song1.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
    }
}
if (scoreRightWrist > 0.2) {
    circle(rightWristX, rightWristY, 20);
    song2.stop();
    if (song1_status == false) {
        song1.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
    }
}
if (scoreLeftWrist > 0.2) {
    circle(leftWristX, leftWristY, 20);
    song1.stop(); if (song2_status == false) {
        song2.play();
        document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
    }
} 