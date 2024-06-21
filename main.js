Mx = 0
My = 0

function preload(){
    mustache = loadImage("https://i.postimg.cc/VvJw5F4t/images-removebg-preview.png")
}
function draw(){
    image(Video,0,0,500,500);
    image(mustache,Mx,My,200,150);
}

function setup(){
    Canvas = createCanvas(500,500);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.hide();

    poseNet = ml5.poseNet(Video,mod);
    poseNet.on('pose',poses);
}

function mod(){
    console.log("model loaded succesfully")
}
function poses(results){
    if (results.length > 0) {
        console.log(results);
        Mx = results[0].pose.nose.x-165;
        My = results[0].pose.nose.y+50;
    } else {
        console.log("error");
    }
}
function snap(){
    save("da_name.jpg")
}
