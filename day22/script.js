const  canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let color = 'black';
let pressed = false; // di chuot
let x, y

canvas.addEventListener('mousedown', (e) => {
  pressed = true;
  x = e.offsetX;
  y = e.offsetY;
  drawCircle(x, y)
})
canvas.addEventListener('mouseup', (e) => {
  pressed = false;
  x = undefined;
  y = undefined;
})
canvas.addEventListener('mousemove', (e) => {
  if (pressed) {
    x2 = e.offsetX;
    y2 = e.offsetY;
    drawCircle (x2, y2)
    drawLine(x, y, x2, y2)
    
    x = x2;
    y = y2;
  }
})
function drawCircle (x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}
function drawLine (x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size*2;
    ctx.stroke();
}