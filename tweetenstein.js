/* --------------------------------------
-----------------------------------------
Andrew Lewis 2014
Canvas visualiser script to ingest tweet data and turn it into something else
v.1 31 Jan 2014 - test
github
*/

/* -------------
if (Modernizr.canvas) {
   alert ("let's draw some shapes!")
} else {
   alert("no native canvas support available :( ")
}
Optional test script to identify any elements (and handle them if necessary
------------------*/
function screenSize()
{
window.W=document.body.clientWidth;
window.H=document.body.clientHeight;
}
//-------------------------------Set Up------------------------
function setUp() {
/* optional checking
if (window.File && window.FileReader && window.FileList && window.Blob) {
  alert("Yay - The File APIs are supported by your browser.")
} else {
  alert('The File APIs are not fully supported by your browser.');
}*/
alert ("Hello, Tweetenstein.js...");
screenSize();
myCanvas.width=W;
myCanvas.height = H;
var ctxt=document.getElementById("myCanvas");
window.txt=ctxt.getContext("2d");
window.fontDef="20px Arial";
txt.font=fontDef;

}
// -------------------------------end setup ---------------------
function harvestText ()
{
}

function plotLoop(txty){
screenSize();
window.xx=Math.random(1)*W-35;//initialise random x position variable;
window.yy=Math.random(1)*H;//initialise random y position variable;
txt.fillStyle="#86DDDE";
txt.fillText(txty,xx,yy);
}
function plotPulse() {
myCanvas.width=W;
myCanvas.height=H;
window.fontDef="20px Arial";
txt.font=fontDef;
}
// speed of text draw
window.phi=20;
// speed of pulse
window.phi2=4000;
window.txty="Hello World...";
setInterval(function(){plotPulse()},phi2); //redraws a backgound to make the text visible
setInterval(function(){plotLoop(txty)},phi); // fires out text at rate set by period: phi
