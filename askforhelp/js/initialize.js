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
function initializeTileSize(){
    updateTileSize();
}
function initializeUnitOfAltitude(){
    updateUnitOfAltitude();
}
function initializeWallHeight(){
    updateWallHeight();
}
function initializeGrassHeight(){
    updateGrassHeight();
}
function initializeTileMap(){
    tileMap = [
        /*TOP of diamond*/[0,0,0,0,0,0,0,0,0,0,0,0,0,0],/*LEFT of diamond*/
        [0,'wall','wall','wall','wall','wall','wall','wall','wall','wall','wall','wall','wall',0],
        [0,'wall',0,0,0,0,0,0,0,0,0,0,'wall',0],
        [0,'wall',0,0,0,0,0,0,0,0,0,0,'wall',0],
        [0,'wall',0,0,0, 0, 0,0, 0,0,0,0,'wall',0],
        [0,'wall',0,0,0, 'grass', 'grass', 'grass', 'grass', 0,0,0,'wall',0],
        [0,'wall',0,0,0, 'grass', 'grass', 'grass', 'grass', 0,0,0,'wall',0],
        [0,'wall',0,0,0, 'grass', 'grass', 'grass', 'grass', 0,0,0,'wall',0],
        [0,'wall',0,0,0, 'grass', 'grass', 'grass', 'grass', 0,0,0,'wall',0],
        [0,'wall',0,0,0, 0,0,0,0, 0,0,0,'wall',0],
        [0,'wall',0,0,0,0,0,0,0,0,0,0,'wall',0],
        [0,'wall',0,0,0,0,0,0,0,0,0,0,'wall',0],
        [0,'wall','wall','wall','wall','wall','wall','wall','wall','wall','wall','wall','wall',0],
        /*RIGHT of diamond*/[0,0,0,0,0,0,0,0,0,0,0,0,0,0]/*BOTTOM of diamond*/
    ];
}
function initializeAltitudeMap(){
    altitudeMap = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,8,6,4,2,0,0,0,0,0],
        [0,0,0,0,0,8,6,4,4,0,0,0,0,0],
        [0,0,0,0,0,8,6,6,6,0,0,0,0,0],
        [0,0,0,0,0,8,8,8,8,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
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
    player.location = new Point();
    player.location.x = 1;
    player.location.y = 1;
    player.locationTrail = new Point();
    player.locationTrail.x = player.location.x;
    player.locationTrail.y = player.location.y;
}
function initializeEverything() {
    initializeCanvas();
    initializeCanvasWidth();
    initializeFPS();
    initInput();
    initializeTileSize();
    initializeUnitOfAltitude();
    initializeGrassHeight();
    initializeWallHeight();
    initializeTileMap();
    initializeAltitudeMap();
    initializeTileMapSize();
    initializeTileMapLocation();
    initializeFont();
    initializePlayer();
}