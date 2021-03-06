/*function drawImage(x, y, sheetX, sheetY) {			
	canvasContext.drawImage(imageName, sheetX * IMAGE_FROM_SHEET_WIDTH, sheetY * IMAGE_FROM_SHEET_HEIGHT, IMAGE_FROM_SHEET_WIDTH, IMAGE_FROM_SHEET_HEIGHT, x, y, imageWidth * imageScaleModifier, imageHeight * imageScaleModifier);
}*/
function drawCanvas() {
    canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.
}
function drawRect(color, x, y, width, height) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
}
function drawBlock(height, color, x, y, squareSize){
    var blockHeight;
    var halfSquareSize;
    blockHeight = height + unitOfAltitude;
    halfSquareSize = squareSize / 2;
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x, (y + halfSquareSize));
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + halfSquareSize);
    canvasContext.lineTo(x + 2 * squareSize, (y + halfSquareSize) + blockHeight);
    canvasContext.lineTo(x + squareSize, (y + squareSize) + blockHeight);
    canvasContext.lineTo(x, (y + halfSquareSize) + blockHeight);
    canvasContext.closePath();
    canvasContext.fill();
}
function drawHalfBlock(height, color, x, y, squareSize){
    var blockHeight;
    var halfSquareSize;
    blockHeight = height + unitOfAltitude;
    halfSquareSize = squareSize / 2;
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 2);
    canvasContext.lineTo(x + 2 * squareSize, (y + halfSquareSize) + (blockHeight));
    canvasContext.lineTo(x + squareSize, (y + squareSize) + (blockHeight));
    canvasContext.closePath();
    canvasContext.fill();
}

function drawIsoRhombusFilled(color, x, y, squareSize){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y + squareSize);
    canvasContext.closePath();
    canvasContext.fill();
}
function drawHalfTile(color, x, y, squareSize){
    canvasContext.fillStyle = color;
    canvasContext.beginPath();
    canvasContext.moveTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y + squareSize);
    canvasContext.closePath();
    canvasContext.fill();
}
function drawIsoRhombusWire(fillColor, strokeColor, x, y, squareSize){
    canvasContext.fillStyle = fillColor;
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y + squareSize);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
}
function drawLine(strokeColor, startX, startY, endX, endY){
    canvasContext.strokeStyle = strokeColor;
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
    canvasContext.lineTo(endX, endY);
    canvasContext.closePath();
    canvasContext.stroke();
}
function drawGrassTile(x,y){
    if (grassHeight > 0){
        drawBlock(grassHeight, grassOutlineColor, x, y - grassHeight, tileSize);
        drawHalfBlock(grassHeight, grassColorShade2, x, y - grassHeight, tileSize);
        drawIsoRhombusFilled(grassColor, x, y - grassHeight, tileSize);
    }
    else{
        drawIsoRhombusFilled(grassColor, x, y, tileSize);
    }
}
function drawWallTile(x,y){
    if (wallHeight > 0){
        drawBlock(wallHeight, wallOutlineColor, x, y - wallHeight, tileSize);
        drawHalfBlock(wallHeight, wallColorShade2, x, y - wallHeight, tileSize);
        drawIsoRhombusFilled(wallColor, x, y - wallHeight, tileSize);
    }
    else{
        drawIsoRhombusFilled(wallColor, x, y, tileSize);
    }
}
function drawEmptyTile(x,y){
    drawIsoRhombusWire('black','white',x,y,tileSize);
}
function drawMap(x,y){
    var isoX;
    var isoY;
    var tileType;
    canvasContext.save();
    canvasContext.translate(x,y);
    for (var row = 0; row < tileMap.length; row ++){
        for (var column = 0; column < tileMap[row].length; column ++){
            isoX = row * (tileSize - (tileSize / 32));
            isoY = column * (tileSize -(tileSize / 32));
            tileType = tileMap[row][column];
            var drawPt = twoDToIso({x: isoX, y: isoY});
            if (tileType == 'wall'){
                changeWallHeight(altitudeMap[row][column]);
                drawWallTile(drawPt.x,drawPt.y);
                updateWallHeight();
                //drawWallTile(drawPt.x,drawPt.y);
            }
            else if(tileType == 'grass'){
                changeGrassHeight(altitudeMap[row][column]);
                drawGrassTile(drawPt.x,drawPt.y);
                updateGrassHeight();
            }
            else {
                drawEmptyTile(drawPt.x,drawPt.y);
            }
        }
    }
    canvasContext.restore();
}
function drawLevelEditorOutline(x, y, squareSize){
    canvasContext.fillStyle = levelEditorOutlineColor;
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y);
    canvasContext.lineTo(x + 2 * squareSize, y + squareSize / 2);
    canvasContext.lineTo((x + 2 * squareSize) - levelEditorOutlineThickness, (y + squareSize / 2)) + levelEditorOutlineThickness;
    canvasContext.lineTo(x + squareSize, y + levelEditorOutlineThickness/2);
    canvasContext.lineTo(x + levelEditorOutlineThickness, y + squareSize / 2);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.beginPath();
    canvasContext.moveTo(x, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y + squareSize);
    canvasContext.lineTo(x + squareSize * 2, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize * 2 - levelEditorOutlineThickness, y + squareSize / 2);
    canvasContext.lineTo(x + squareSize, y + squareSize - levelEditorOutlineThickness/2);
    canvasContext.lineTo(x + levelEditorOutlineThickness, y + squareSize / 2);
    canvasContext.closePath();
    canvasContext.fill();
}
function drawLevelEditor(x,y){
    var isoX;
    var isoY;
    canvasContext.save();
    canvasContext.translate(x,y);
    for (var row = 0; row < levelEditorMap.length; row ++){
        for (var column = 0; column < levelEditorMap[row].length; column ++){
            isoX = row * (tileSize - (tileSize / 32));
            isoY = column * (tileSize -(tileSize / 32));
            var drawPt = twoDToIso({x: isoX, y: isoY});
            if (levelEditorMap[row][column] == 1){
                drawLevelEditorOutline(drawPt.x,drawPt.y, tileSize);
                levelEditorTileX = column;
                levelEditorTileY = row;
            }
        }
    }
    canvasContext.restore();
}
function drawText(color, text, x, y) {
    canvasContext.fillStyle = color;
    canvasContext.fillText(text, x, y);
}
function drawMapSizeText(lineHeight){
    drawText('blue', 'Map Width: ' + tileMapWidth, canvas.width / 20, (canvas.height / 8) * 7);
    drawText('blue', 'Map Height: ' + tileMapHeight, canvas.width / 20, (canvas.height / 8) * 7 + lineHeight); // adding the lineHeight acts as a line break
}
function drawEverything() {
    drawCanvas();
    drawMap(tileMapX, tileMapY);
    drawMapSizeText(mapSizeTextLineHeight);
    if (levelEditorActive){
        drawLevelEditor(tileMapX, tileMapY);
    }
}
function drawCircle(color, x, y, radius) {
    canvasContext.fillStyle = color;
    canvasContext.beginPath();  // Starts the fill path.
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}