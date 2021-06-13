function preload(){
}
function setup(){
    var canvas=createCanvas(600, 500)
     canvas.position(110,350)
     video=createCapture(VIDEO)
     video.hide()
     tint_color=""

}
function draw(){
    image(video,0,0,600,400)
    tint(tint_color);
}
function take_snapshot(){
 save('srishti.png')
}
function filter1(){
    tint_color=document.getElementById("color_name").value
}