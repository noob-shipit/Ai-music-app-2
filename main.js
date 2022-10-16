Baby_shark_song="";
Lion_king_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Baby_shark_song = loadSound("23240507_baby-shark_by_play-me_preview.mp3");
    Lion_king_theme_song = loadSound("The Lion King - Circle of Life.mp3");
}

function draw(){
    image(video,0,0,600,530);
}