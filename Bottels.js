img = ""
status = ""
objects=[];
function preload() {
    img = loadImage('Bottels.jfif');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(300,120);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects"
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(status !="")
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="Status : Object Detected";
fill("#ff0000");
percent = floor(objects[i].confidence * 100);
text(objects[i].label+" "+percent+"%",objects[i].x+15, objects[i].y+16)
noFill();
stroke("#ff0000");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects=results
}   
