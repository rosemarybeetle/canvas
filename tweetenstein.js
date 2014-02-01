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
alert ("helloe tweetenstein");
W=document.body.clientWidth;
H=document.body.clientHeight;
myCanvas.width=W;
myCanvas.height=H;
myCanvas.width=W;
myCanvas.height=H;
window.defH=30;
var c=document.getElementById("myCanvas");
window.ctx=c.getContext("2d");
window.ctx2=c.getContext("2d");
window.ctx3=c.getContext("2d");
window.txt=c.getContext("2d");
window.xxBKUP=0;
window.xx2BKUP=0;
}
// -------------------------------end setup ---------------------

/*
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var ctx2=c.getContext("2d");
var ctx3=c.getContext("2d");
var txt=c.getContext("2d");
*/

function rectRandom(){
//ctx.fillStyle="ffffff";
//ctx.fillRect(xxBKUP,xx2BKUP,W,H);
window.xx=Math.random(1)*W;//random(150);
window.xx2=(Math.random(1)*W)-(W/2);//random(150));
xxBKUP=xx;
xx2BKUP=xx2;


ctx.fillRect(xx,xx2,defH,xx);
//txt.fillStyle="ffffff";
//txt.fillText("flipping 'eck",xx,defH);
// must do each time

// 
//alert("annoying"+xx+" and " +xx2)
ctx.fillStyle="ccoo55";
ctx.fillRect(xx,xx2,xx,defH);
//myCanvas.width=xx;

}


setInterval(function(){rectRandom()},1900);
