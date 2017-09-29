function initializeCanvas() {
    // console.log('Called initializeCanvas()');  // DEBUG

    canvas = document.getElementById('gameCanvas'); // This grabs the canvas from the HTML for use in the script.
    canvasContext = canvas.getContext('2d'); // "The getContext() method returns an object that provides methods and properties for drawing on the canvas." from w3schools.com
    canvasBGColor = 'black';
    
    // console.log('initializeCanvas() complete');  // DEBUG
}
function initializeCanvasWidth(){
    canvasWidth = canvas.width;
}
function initializeFPS() {
    // console.log('Called initializeFPS()');  // DEBUG

    framesPerSecond = 30;

    // console.log('initializeFPS() complete');  // DEBUG
}
/*function initializeImages() {
    imageName.src = "./images/imageName.png";

    imageWidth = canvas.width * 0.10;
    imageHeight = canvas.height * 0.186666666666;
    imageScaleModifier = 1;
}*/
function initializeTileMap(){
    tileMap = [
        /*TOP of diamond*/['wall',0,0,0,0,0,0,0,0,0,0,'wall'],/*LEFT of diamond*/
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,'wall', 'wall', 'wall', 'wall', 'wall', 'wall',0,0,0],
        [0,0,0,'wall', 'grass', 'grass', 'grass', 'grass', 'wall',0,0,0],
        [0,0,0,'wall', 'grass', 'grass', 'grass', 'grass', 'wall',0,0,0],
        [0,0,0,'wall', 'grass', 'grass', 'grass', 'grass', 'wall',0,0,0],
        [0,0,0,'wall', 'grass', 'grass', 'grass', 'grass', 'wall',0,0,0],
        [0,0,0,'wall', 'wall', 'wall', 'wall', 'wall', 'wall',0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        /*RIGHT of diamond*/['wall',0,0,0,0,0,0,0,0,0,0,'wall']/*BOTTOM of diamond*/
    ];
}
function initializeTileMapWidth(){
    for (var i = 0; i < tileMap[0].length; i ++){
        tileMapWidth ++;
    }
}
function initializeTileMapHeight(){
    for (var i = 0; i < tileMap.length; i ++){
        tileMapHeight ++;
    }
}
function initializeTileMapSize(){
    initializeTileMapWidth();
    initializeTileMapHeight();
}
function initializeTileMapX(){
    tileMapX = canvas.width / 2 - tileSize;
}
function initializeTileMapY(){
    tileMapY = canvas.height / 4 - tileSize / 2;
}
function initializeTileMapLocation(){
    initializeTileMapX();
    initializeTileMapY();
}
function initializeFont(){
    setFont(fontSize,fontStyle);
}
function initializePlayer(){
    player = new Player();
    player.location = new Point(0,0);
    player.locationTrail = player.location;
}
function initializeEverything() {
    initializeCanvas();
    initializeCanvasWidth();
    initializeFPS();
    initInput();
    initializeTileMap();
    initializeTileMapSize();
    initializeTileMapLocation();
    initializeFont();
    initializePlayer();
}