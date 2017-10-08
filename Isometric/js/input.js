var unhold = false;
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
        default: break;
    }
    /*if (thisKey == KEY_LEFT_ARROW) {
        holdLeft = setTo;
    }
    if (thisKey == KEY_RIGHT_ARROW) {
        holdRight = setTo;
    }
    if (thisKey == KEY_UP_ARROW) {
        holdUp = setTo;
    }
    if (thisKey == KEY_DOWN_ARROW) {
        holdDown = setTo;
    }
    if (thisKey == KEY_L) {
        holdL = setTo;
    }
    if (thisKey == KEY_W){
        holdW = setTo;
    }*/
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
    unhold = false;
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
	if (holdDown && unHold == false) {
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
    if (holdL && unHold == false) {
        toggleLevelEditor();
		unHold = true;		
	}
	if (holdUp == false && holdDown == false && holdL == false && holdW == false) {
		unHold = false;
	}		
}