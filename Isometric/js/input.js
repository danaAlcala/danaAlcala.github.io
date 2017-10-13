function setKeyHoldState(thisKey, setTo) {
    switch (thisKey){
        case KEY_LEFT_ARROW: holdLeft = setTo;
            break;
        case KEY_RIGHT_ARROW: holdRight = setTo;
            break;
        case KEY_UP_ARROW: holdUp = setTo;
            break;
        case KEY_DOWN_ARROW: holdDown = setTo;
            break;
        case KEY_L: holdL = setTo;
            break;
        case KEY_W: holdW = setTo;
            break;
        case KEY_S: holdS = setTo;
            break;
        case KEY_A: holdA = setTo;
            break;
        case KEY_D: holdD = setTo;
            break;
        case KEY_Q: holdQ = setTo;
            break;
        case KEY_E: holdE = setTo;
            break;
        case KEY_Z: holdZ = setTo;
            break;
        case KEY_X: holdX = setTo;
            break;
        case KEY_0: hold0 = setTo;
            break;
        case KEY_1: hold1 = setTo;
            break;
        case KEY_2: hold2 = setTo;
            break;
        default: break;
    }
}
function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}
function keyPressed(evt) {
    setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); // without this, arrow keys scroll the browser!
}
function keyReleased(evt) {
    setKeyHoldState(evt.keyCode, false);
}

function checkForInput() {
    //Placement indicator movement
	if ((holdUp || holdW) && unHold == false) {
		if (!levelEditorActive){
            if (tileScale > 1) {
                tileScale -= 5;
                console.log("tileScale:" + tileScale);
            } 	
        }
        else{
            moveLevelEditorTileUp();	
        }
        unHold = true;
    }
	if ((holdDown || holdS) && unHold == false) {
        if (!levelEditorActive){
            if (tileScale < 150){
                tileScale += 5;
                console.log("tileScale:" + tileScale);
            }
        }
        else{
            moveLevelEditorTileDown();
        }
		unHold = true;		
    }
    if ((holdLeft || holdA) && unHold == false) {
        if (!levelEditorActive){
            tileMapX -= tileSize;
        }
        else{
            moveLevelEditorTileLeft()
        }
        unHold = true;
    }
    if ((holdRight || holdD) && unHold == false) {
        if (!levelEditorActive){
            tileMapX += tileSize;
        }
        else{
            moveLevelEditorTileRight()
        }
        unHold = true;
    }
    if (holdQ && !unHold){
        if (levelEditorActive){
            moveLevelEditorTileUpLeft();
        }
        unHold = true;
    }
    if (holdE && !unHold){
        if (levelEditorActive){
            moveLevelEditorTileUpRight();
        }
        unHold = true;
    }
    if (holdZ && !unHold){
        if (levelEditorActive){
            moveLevelEditorTileDownLeft();
        }
        unHold = true;
    }
    if (holdX && !unHold){
        if (levelEditorActive){
            moveLevelEditorTileDownRight();
        }
        unHold = true;
    }
    // Tile editing
    if (hold0 && !unHold){ //clear tile
        console.log('Pressed 0');
        if (levelEditorActive){
            changeTile(0);
        }
        unHold = true;
    }
    if (hold1 && !unHold){ //change tile to wall
        console.log('Pressed 1');
        hold1 = false;
        if (levelEditorActive){
            var height = promptForHeight();
            changeTile(1, height);
        }
        unHold = true;
    }
    if (hold2 && !unHold){ //change tile to grass
        console.log('Pressed 2');
        hold2 = false;
        if (levelEditorActive){
            var height = promptForHeight();
            changeTile(2, height);
        }
        unHold = true;
    }
    // Toggle level editor
    if (holdL && unHold == false) {
        toggleLevelEditor();
		unHold = true;		
    }
	if (!holdUp && !holdDown && !holdL && !holdW && !holdS && !holdLeft && !holdA && !holdRight && !holdD && !holdQ && !holdE && !holdZ && !holdX && !hold0 && !hold1 && !hold2) {
		unHold = false;
	}		
}