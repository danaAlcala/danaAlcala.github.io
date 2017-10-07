var unhold = false;
function setKeyHoldState(thisKey, setTo) {
    if (thisKey == KEY_LEFT_ARROW) {
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
	if (holdUp && unHold == false) {
		if (tileScale > 1) {
            tileScale -= 5;
            console.log("tileScale:" + tileScale);
		}		
		unHold = true;		
	}
	if (holdDown & unHold == false) {
        tileScale += 5;
        console.log("tileScale:" + tileScale);
		unHold = true;		
	}
	if (holdUp == false && holdDown == false) {
		unHold = false;
	}		
}