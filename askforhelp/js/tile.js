var tileSize;
var tileScale = 25;
var wallHeight;
var grassHeight;
var tileMap = [];
var tileWidth = tileSize * 2;
var tileMapWidth = 0;
var tileMapHeight = 0;
var tileMapX = 0;
var tileMapY = 0;
var startOnOuterTilesOK = false;
var unitOfAltitude;
var altitudeMap = [];

function updateTileSize(){
    if (tileScale < 5){
        tileScale = 5;
    }
    else if (tileScale > 150){
        tileScale = 150;
    }
    tileSize = canvas.width / tileScale;
}
function updateUnitOfAltitude(){
    unitOfAltitude = tileSize / 6;
}
function updateGrassHeight(){
    grassHeight = unitOfAltitude * 2;
}
function changeGrassHeight(altitude){
    grassHeight = unitOfAltitude * altitude;
}
function updateWallHeight(){
    wallHeight = unitOfAltitude * 2;
}
function changeWallHeight(altitude){
    wallHeight = unitOfAltitude * altitude;
}
function countOuterTiles(){ //assumes that the playfield is enclosed in an unbroken, one-unit-thick wall
    var tileCount = 0;
    for (var row = 0; row < tileMap.length; row ++){
        tileCount ++;
        for (var column = 0; column < tileMap[row].length; column ++){
            if (tileMap[row][column] == 'wall'){
                return tileCount; //this count will include the outer wall, counting from out-to-in
            }
        }
    }
}