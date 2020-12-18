 
 // canvas-1

 var c1 = document.getElementById('can1');
 var c1x = c1.getContext('2d');

 // drawing line
 c1x.moveTo(0, 0);
 c1x.lineTo(200, 100);
 c1x.moveTo(200,0)
 c1x.lineTo(0, 100);
 c1x.stroke();
 

 // canvas-2

 var c2 = document.getElementById('can2');
 var c2x = c2.getContext('2d');

 // drawing circle
 c2x.beginPath();
 c2x.arc(100,50,40,39,2*Math.PI);
 c2x.stroke();


 // canvas-3

 var c3 = document.getElementById('can3');
 var c3x = c3.getContext('2d');

 // styling
 var grad = c3x.createLinearGradient(0, 0, 200, 100);
 grad.addColorStop(0, "red");
 grad.addColorStop(1, "white");

 c3x.fillStyle=grad;
 c3x.fillRect(0,0, 100, 50);

//  canvas 4

var c4 = document.getElementById('can4');
var c4x = c4.getContext('2d');

// adding text
c4x.font = "20px Arial";
c4x.fillText("Filled Text", 10, 30);
c4x.textAlign="center";
c4x.strokeText("Stroke Text", c4.width/2, c4.height/2);

// canvas 5

window.onload = function() {
    var c5 = document.getElementById("can5");
    var c5x = c5.getContext("2d");
    var img = document.getElementById("dummy");
    c5x.drawImage(img, 10, 10);
  };