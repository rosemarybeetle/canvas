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

//-------------------------------Set Up------------------------
function setUp() {
/* optional checking
if (window.File && window.FileReader && window.FileList && window.Blob) {
  alert("Yay - The File APIs are supported by your browser.")
} else {
  alert('The File APIs are not fully supported by your browser.');
}*/
alert ("Hello, Tweetenstein.js...");
W=document.body.clientWidth;
H=document.body.clientHeight;
myCanvas.width=W;
myCanvas.height=H;
window.defH=30;
var c=document.getElementById("myCanvas");
window.ctx=c.getContext("2d");
window.ctx2=c.getContext("2d");
window.ctx3=c.getContext("2d");
window.txt=c.getContext("2d");
window.xxBKUP=0;
window.yyBKUP=0;
}
// -------------------------------end setup ---------------------


function plotLoop(txty){
//tx.globalAlpha=1;
window.xx=Math.random(1)*W-35;//random(150);
window.yy=(Math.random(1)*H);//random(150));
xxBKUP=xx;
yyBKUP=yy;

//ctx.fillRect(xx,yy,defH,xx);
txt.fillStyle="hh7766";
txt.fillText(txty,xx,yy);

//ctx.globalAlpha=0.2;


}
window.phi=1;
window.txty="Hello World...";
setInterval(function(){plotLoop(txty)},phi);
