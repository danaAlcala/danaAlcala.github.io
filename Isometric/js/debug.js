var debugX;
var debugY;
var debugTile;
function printLocation(){
    console.log("(" + debugX + "," + debugY + ") = " + debugTile);
    //console.log(debugY);
}

function debug(){
    for (var i = 0; i < tileMap.length; i ++){
        for (var j = 0; j < tileMap[i].length; j ++){
            if (tileMap[i] != undefined){
                debugX = i;
                debugY = j;
                debugTile = tileMap[i][j];
                //printLocation();
            }
            else{
                console.log("sheeeeeeit");
            }
        }
    }
}