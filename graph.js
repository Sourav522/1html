
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 function sleep1() {
    var d = new Date();
    var n = d.getTime();
    var n1 = n
    while((n1-n)<50){
        var e= new Date();
        n1 = e.getTime();

    }
  }

 //xtransformation
function transX(x){
    return originX+(x/xUnitsPerPixel)
}
//ytransformation
function transY(y){
    return originY-(y/yUnitsPerPixel)
}

//Function for graph plotting
function graphPlot(a,d){
    
        ctx2.beginPath();
        rgb=[0,100,100]
        color1='rgb('+ rgb.join(',') +')';
        ctx2.strokeStyle=color1;
        ctx2.globalAlpha=0.9;
        ctx2.moveTo(transX(xMin),transY(a*xMin+d));
        ctx2.strokeStyle="rgb(254, 106, 94)";
        //ctx1.lineWidth="3";
        ctx2.lineTo(transX(xMax),transY(a*xMax+d));
        ctx2.lineWidth=2;
        
        ctx2.stroke();
        

    
}
//Connection between canvases and variables
var canvas1 = document.getElementById("firstCanvas");
var ctx1 = canvas1.getContext("2d");
var canvas2 = document.getElementById("secondCanvas");
var ctx2 = canvas2.getContext("2d");


//setting graph's ranges
var xMin=-10.2;
var xMax=10.2;
var yMin=-10.2;
var yMax=10.2;

//for loop count
var dt=0.01;
var loopCount=Math.trunc((xMax-xMin)/dt);
var initialLoopValue=Math.trunc(xMin/dt)-1;

//setting scales and origin
xUnitsPerPixel=(xMax-xMin)/canvas1.width;
yUnitsPerPixel=(yMax-yMin)/canvas1.height;
var originX=(-xMin)/xUnitsPerPixel;
var originY=(yMax)/yUnitsPerPixel;

//drwaing of coordinate axes
ctx1.beginPath();
ctx1.moveTo(0,yMax/yUnitsPerPixel);
ctx1.lineTo((xMax-xMin)/xUnitsPerPixel,yMax/yUnitsPerPixel);
ctx1.strokeStyle="black";
ctx1.stroke();
ctx1.moveTo((-xMin)/xUnitsPerPixel,0);
ctx1.lineTo((-xMin)/xUnitsPerPixel,(yMax-yMin)/yUnitsPerPixel);
ctx1.strokeStyle="black";
ctx1.stroke();

//lines parallel y axis
for(i=Math.trunc(xMin);i<=Math.trunc(xMax);i++){
    if(i!=0){
    ctx1.beginPath();
    ctx1.strokeStyle="gray";
    ctx1.lineWidth=0.6;
    ctx1.moveTo(transX(i),transY(yMin));
    ctx1.lineTo(transX(i),transY(yMax));
    //ctx1.stroke();
    ctx1.font = "bold 13px Montserrat";
    ctx1.fillText(i, transX(i)-8, transY(0)+13);
    }
    else{
        ctx1.font = "bold 15px Montserrat";
    ctx1.fillText('0',originX,originY+15);
    }
}

//lines parallel x axis
for(i=Math.trunc(yMin);i<=Math.trunc(yMax);i++){
    if(i!=0){
    ctx1.beginPath();
    ctx1.strokeStyle="gray";
    ctx1.lineWidth=0.6;
    ctx1.moveTo(transX(xMin),transY(i));
    ctx1.lineTo(transX(xMax),transY(i));
    //ctx1.stroke();
    ctx1.font = "bold 13px Montserrat";
    ctx1.fillText(i, transX(0)-15, transY(i)+6);
    }
    else{
        ctx1.font = "bold 15px Montserrat";
    ctx1.fillText('0',originX-15,originY+5);
    }
}
ctx1.fillStyle="gray";
ctx1.font = "16px Montserrat";
ctx1.fillText('-X', transX(xMin)+5, originY-6);
ctx1.fillText('X', transX(xMax)-12, originY-6);
ctx1.fillText('Y', originX+6,transY(yMax)+15);
ctx1.fillText('-Y', originX+6,transY(yMin)-5);


//Main script(dyanmics)
var x1=0;
var y1=0;





//1st slider(a)
var slider_a = document.getElementById("myRange1");
var output_a = document.getElementById("demo1");
var output_1a = document.getElementById("demo1a");
output_a.value = (0.1*slider_a.value).toFixed(1);
output_1a.innerHTML = (0.1*slider_a.value).toFixed(1);
var a=0.1*slider_a.value;
var tempPercentage=((slider_a.value-slider_a.min)/(slider_a.max-slider_a.min))*100;
var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
slider_a.style.background=tempColor;
slider_a.oninput = function() {
  output_a.value = (0.1*this.value).toFixed(1);
  output_1a.innerHTML = (0.1*slider_a.value).toFixed(1);
  ctx2.clearRect(0,0,canvas1.width,canvas1.height);
  a=0.1*this.value;
  tempPercentage=(((a/0.1)-slider_a.min)/(slider_a.max-slider_a.min))*100;
  var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
  slider_a.style.background=tempColor;
  graphPlot(a,d)
}










//4th slider(d)
var slider_d = document.getElementById("myRange4");
var output_d = document.getElementById("demo4");
output_d.value = (0.1*slider_d.value).toFixed(1);
var output_4d = document.getElementById("demo4d");
output_4d.innerHTML = (0.1*slider_d.value).toFixed(1);
var d=0.1*slider_d.value;
var tempPercentage=((slider_d.value-slider_d.min)/(slider_d.max-slider_d.min))*100;
var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
slider_d.style.background=tempColor;
slider_d.oninput = function() {
  output_d.value = (0.1*this.value).toFixed(1);
  output_4d.innerHTML = (0.1*slider_d.value).toFixed(1);
  ctx2.clearRect(0,0,canvas1.width,canvas1.height);
  d=0.1*this.value;
  tempPercentage=(((d/0.1)-slider_d.min)/(slider_d.max-slider_d.min))*100;
  var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
  slider_d.style.background=tempColor;
  graphPlot(a,d)
}

function plotButtonFunction(){
    a=parseFloat(output_a.value);
    slider_a.value=a/0.1;
    tempPercentage=(((a/0.1)-slider_a.min)/(slider_a.max-slider_a.min))*100;
    var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
    slider_a.style.background=tempColor;
    d=parseFloat(output_d.value);
    slider_d.value=d/0.1;
    tempPercentage=(((d/0.1)-slider_d.min)/(slider_d.max-slider_d.min))*100;
  var tempColor = 'linear-gradient(90deg, rgb(42, 190, 236)'+tempPercentage+'%, rgb(230, 239, 248)'+tempPercentage+'%)';
  slider_d.style.background=tempColor;
    ctx2.clearRect(0,0,canvas1.width,canvas1.height);
    graphPlot(a,d)
}


graphPlot(a,d)


