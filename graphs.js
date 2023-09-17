

const canvas = document.getElementById("graph");
const ctx = canvas.getContext("2d");

const radius = 150;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function draw() {
  if (canvas.getContext) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pointRadius = 3;

    ctx.strokeStyle = "black"; // Цвет линии
    ctx.lineWidth = 2; // Толщина линии
    ctx.fillStyle = "black";
    ctx.font = "14px monospace";

    // Рисуем горизонтальную ось

    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(canvas.width, centerY);
    ctx.stroke();


    // Рисуем стрелку на горизонтальной оси
    ctx.beginPath();
    ctx.moveTo(canvas.width - 8, centerY - 5);
    ctx.lineTo(canvas.width, centerY);
    ctx.lineTo(canvas.width - 8, centerY + 5);
    ctx.fill();

    // Подписываем горизонтальную ось
    ctx.fillText("x", canvas.width - 10, centerY + 20);


    // Рисуем вертикальную ось
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, canvas.height);
    ctx.stroke();

    // Рисуем стрелку на вертикальной оси
    ctx.beginPath();
    ctx.moveTo(centerX - 5, 10);
    ctx.lineTo(centerX, 0);
    ctx.lineTo(centerX + 5, 10);
    ctx.fill();

    // Подписываем вертикальную ось
    ctx.fillText("Y", centerX - 20, 20);


    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;

    // Нарисуйте сектор
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius/2, -Math.PI/2, Math.PI/360);
    ctx.fill();
    ctx.stroke();


    // Рисуем треугольник
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius);
    ctx.lineTo(centerX - radius , centerY);
    ctx.fill();
    ctx.stroke();

    // Прямоугольник
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY + radius );
    ctx.lineTo(centerX + radius/2, centerY + radius);
    ctx.lineTo(centerX + radius/2, centerY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    // Отмечаем точку на радиусе
    ctx.beginPath();
    ctx.arc(centerX + radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX + radius / 2, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - radius, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX - radius / 2, centerY, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(centerX, centerY + radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY + radius / 2, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - radius, pointRadius, 0, 2 * Math.PI);
    ctx.arc(centerX, centerY - radius / 2, pointRadius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
  }
}

function namePoints() {
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("R", centerX + radius, centerY + 20);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("R / 2", centerX + radius / 2, centerY + 20);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("-R", centerX - radius + 5, centerY + 20);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("-R / 2", centerX - radius / 2 - 5, centerY + 20);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("-R", centerX + 10, centerY + radius);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("-R / 2", centerX + 10, centerY / 2 + radius + 25);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("R", centerX + 10, centerY - radius);
  ctx.fillStyle = "black";
  ctx.font = "14px monospace";

  ctx.fillText("R / 2", centerX + 10, centerY - radius / 2 - 5);
}

function drawPoint(x, y, r, color, hit) {

    const scale = 300 / 2;
    x = scale / r * x + scale + 50;
    y = 300 - (scale / r * y + scale - 50);

   
    ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 3, 0, 2 * Math.PI);
  ctx.fill();

  if (hit === 'Попадание') {
    ctx.strokeStyle = "green";
  } else {
    ctx.strokeStyle = "red";
  }

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x, y - 5);
  ctx.lineTo(x, y + 5);
  ctx.moveTo(x - 5, y);
  ctx.lineTo(x + 5, y);
  ctx.stroke();
  


}
  

function clearCanvas(){
  
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    namePoints();
  
}
draw();
namePoints();



/*
  todo: 
        изменить проверку областей так чтобы точка окрашивалась корректно
*/