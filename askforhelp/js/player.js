var player;

function Player(){
    this.location;
    this.locationTrail;
}
function keepPlayerOffWalls(){
    if (tileMap[player.location.x][player.location.y] == 'wall'){
        if (player.locationTrail == player.location){ // If there hasn't been any previous movement...
            // Loop through tilemap until you get a non-wall tile
            for (var row = 0; row < tileMap.length; row ++){
                for (var column = 0; column <tileMap[row].length; column ++){
                    if (tileMap[row][column] != 'wall'){
                        player.location = (row,column);
                    }
                }
            }
        }
        else{
            player.location = player.locationTrail; // If there has been previous movement, keep player at initial location.
        }
    }
    console.log('Location: ' + player.location + '\nLastLocation: ' + player.locationTrail);
}