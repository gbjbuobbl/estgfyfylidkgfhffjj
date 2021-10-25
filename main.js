function setup() {
    video = createCapture(VIDEO)
    video.size(550,550);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("posenet is initialized!");
}
