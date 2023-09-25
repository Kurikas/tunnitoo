//console.log(window, {document});
// setTimeout(() => {
//    document.location = 'https://google.com';
// }, 5000);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 250, 50);
ctx.fillStyle = "black";
ctx.fillRect(0, 50, 250, 50);
ctx.strokestyle = "black";
ctx.strokeRect(0, 0, 250, 300);

ctx.moveTo(380, 60); 
ctx.lineTo(410,15); 
ctx.lineTo(440, 60); 
ctx.closePath(); 
ctx.stroke();
ctx.beginPath();
ctx.moveTo(380, 30); 
ctx.lineTo(410, 75); 
ctx.lineTo(440, 30); 
ctx.closePath(); 
ctx.stroke();
  
ctx.beginPath();
ctx.arc(400, 110, 30, 0, Math.PI * 2);
ctx.clip();
ctx.fillStyle = "orange";
ctx.fillRect(0, 0, canvas.width, canvas.height);
