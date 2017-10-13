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
function moveLevelEditorTileUp(){
    if (levelEditorTileY > 0 && levelEditorTileX > 0){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDown(){
    if (levelEditorTileY < 13 && levelEditorTileX < 13){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileLeft(){
    if (levelEditorTileY > 0 && levelEditorTileX < 13){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileRight(){
    if (levelEditorTileY < 13 && levelEditorTileX > 0){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileUpLeft(){
    if (levelEditorTileY > 0){
        var newY = levelEditorTileY - 1;
        var newX = levelEditorTileX;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileUpRight(){
    if (levelEditorTileX > 0){
        var newY = levelEditorTileY;
        var newX = levelEditorTileX - 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDownLeft(){
    if (levelEditorTileX < 13){
        var newY = levelEditorTileY;
        var newX = levelEditorTileX + 1;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
}
function moveLevelEditorTileDownRight(){
    if (levelEditorTileY < 13){
        var newY = levelEditorTileY + 1;
        var newX = levelEditorTileX;
        levelEditorMap[levelEditorTileY][levelEditorTileX] = 0;
        levelEditorMap[newY][newX] = 1;
        levelEditorTileY = newY;
        levelEditorTileX = newX;
    }
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