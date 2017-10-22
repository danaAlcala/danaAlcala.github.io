var levelEditorActive = false;
var levelEditorTileX = 0;
var levelEditorTileY = 0;
var levelEditorMap = [];
var levelEditorOutlineThickness;
var heightPromptActive = false;

function toggleLevelEditor(){
    if (levelEditorActive){
        levelEditorActive = false;
        console.log('The level editor is now inactive.');
    }
    else{
        levelEditorActive = true;
        console.log('The level editor is now active.')
    }
}
function moveLevelEditorTile(direction){
    var newY = 0;
    var newX = 0;
    var MAX_Y_INDEX = tileMapHeight - 1;
    var MAX_X_INDEX = tileMapWidth - 1;
    switch (direction){
        case "up":
            if (levelEditorTileY > 0 && levelEditorTileX > 0){
                newY = levelEditorTileY - 1;
                newX = levelEditorTileX - 1;
            }
            break;
        case "down":
            if (levelEditorTileY < MAX_Y_INDEX && levelEditorTileX < MAX_X_INDEX){
                newY = levelEditorTileY + 1;
                newX = levelEditorTileX + 1;
            }
            break;
        case "left":
            if (levelEditorTileY > 0 && levelEditorTileX < MAX_X_INDEX){
                newY = levelEditorTileY - 1;
                newX = levelEditorTileX + 1;
            }
            break;
        case "right":
            if (levelEditorTileY < MAX_Y_INDEX && levelEditorTileX > 0){
                newY = levelEditorTileY + 1;
                newX = levelEditorTileX - 1;
            }
            break;
        case "upLeft":
            if (levelEditorTileY > 0){
                newY = levelEditorTileY - 1;
                newX = levelEditorTileX;
            }
            break;
        case "upRight":
            if (levelEditorTileX > 0){
                newY = levelEditorTileY;
                newX = levelEditorTileX - 1;
            }
            break;
        case "downLeft":
            if (levelEditorTileX < MAX_X_INDEX){
                newY = levelEditorTileY;
                newX = levelEditorTileX + 1;
            }
            break;
        case "downRight":
            if (levelEditorTileY < MAX_Y_INDEX){
                newY = levelEditorTileY + 1;
                newX = levelEditorTileX;
            }
            break;
        default: break;
    }
    levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
    levelEditorMap[newY][newX] = 1;
    levelEditorTileY = newY;
    levelEditorTileX = newX;
}

function promptForHeight(){
    var height;
    var intHeight;
    height = prompt('Please enter desired height:', '0');
    if (height != null){
        if (stringHasAlphabeticalCharacters(height) || stringHasSpecialCharacters(height)) { // if the string contains alphabetical or special characters
            alert('You entered ' + height + ".  Please only enter 0 or a positive integer in pure numerical form.");
            return promptForHeight();
        }
        else if (height == ""){
            alert('You didn\'t enter anything.  The height will default to 0.');
            return 0;
        }
        else{
            alert('You entered ' + height + ".");
            intHeight = Number(height);
            return intHeight;
        }
    }
    else{
        alert('You didn\'t enter anything.  The height will default to 0.');
        return 0;
    }
}
function changeTile(index, height){
    switch (index){
        case 0: tileMap[levelEditorTileY][levelEditorTileX] = 0;
            break;
        case 1: tileMap[levelEditorTileY][levelEditorTileX] = 'wall';
                altitudeMap[levelEditorTileY][levelEditorTileX] = height;
            break;
        case 2: tileMap[levelEditorTileY][levelEditorTileX] = 'grass';
                altitudeMap[levelEditorTileY][levelEditorTileX] = height;
            break;
        default: break;
    }
}