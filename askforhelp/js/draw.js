/*function drawImage(x, y, sheetX, sheetY) {			
	canvasContext.drawImage(imageName, sheetX * IMAGE_FROM_SHEET_WIDTH, sheetY * IMAGE_FROM_SHEET_HEIGHT, IMAGE_FROM_SHEET_WIDTH, IMAGE_FROM_SHEET_HEIGHT, x, y, imageWidth * imageScaleModifier, imageHeight * imageScaleModifier);
}*/
function drawCanvas() {
    // console.log('Called drawCanvas()');  // DEBUG

    canvasContext.fillStyle = canvasBGColor; // "fillStyle Sets or returns the color, gradient, or pattern used to fill the drawing." from w3schools.com
    canvasContext.fillRect(0, 0, canvas.width, canvas.height); // Doesn't fill an existing rectangle, but instead creates a filled rectangle.

    // console.log('drawCanvas() complete');  // DEBUG
}
function drawRect(color, x, y, width, height) {
    // console.log('Called drawRect()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);

    // console.log('drawRect() complete');  // DEBUG
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
    drawIsoRhombusFilled(grassColor, x, y, tileSize);
}
function drawWallTile(x,y){
    for (var i = 0; i <= wallHeight; i++){
        drawIsoRhombusFilled(wallColor, x, y - i, tileSize);
    }
    drawIsoRhombusWire(wallColor, wallOutlineColor, x, y - wallHeight, tileSize);
    drawLine(wallOutlineColor, x + tileSize, y + tileSize, x + tileSize, y - wallHeight + tileSize);
}
function drawEmptyTile(x,y){
    drawIsoRhombusWire('black','white',x,y,tileSize);
}
function twoDToIso(pt){
    var tempPt = {x:0,y:0};
    tempPt.x = pt.x - pt.y;
    tempPt.y = (pt.x + pt.y) / 2;
    return tempPt;
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
                drawWallTile(drawPt.x,drawPt.y);
            }
            else if(tileType == 'grass'){
                drawGrassTile(drawPt.x,drawPt.y);
            }
            else {
                drawEmptyTile(drawPt.x,drawPt.y);
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
    //drawGrassTile(0,100);
    //drawWallTile(100,100);
}
function drawCircle(color, x, y, radius) {
    // console.log('Called drawCircle()');  // DEBUG

    canvasContext.fillStyle = color;
    canvasContext.beginPath();  // Starts the fill path.
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

    // console.log('drawCircle() complete');  // DEBUG
}