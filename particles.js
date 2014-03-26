// declare vars
var ps = [];
var MAX_NUM = 500;
var colors = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
var FPS = 60;

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

spawn();



//create the particles
function spawn() {
  for(var i=0; ps.length < MAX_NUM; i++) {
    ps[i] = { x: Math.random()*window.innerWidth,
              y: Math.random()*window.innerHeight,
              r: Math.random()*5,
              c: colors[Math.floor(Math.random()*colors.length)]
            };                  
   }
}

function update() {
    for(var i=0; i<ps.length; i++) {
        ps[i].y += 1;
        ps[i].x += -1 + (Math.random() * 3);
        //ps[i].r = Math.random()*5;
    }
}

function reset() {
    //reset the x and y coordinates if leaves the canvas
    for(var i=0; i<ps.length; i++) {
        //reset if y or coordinate has left the canvas
        if(ps[i].y > c.height) {
            ps[i].y = Math.random()*window.innerHeight;
            ps[i].color = colors[Math.floor(Math.random() * colors.length)];
        }
        //reset if x or coordinate has left the canvas
        if(ps[i].x > c.width || ps[i].x < 0){
          ps[i].x = Math.random()*window.innerWidth;
          ps[i].color = colors[Math.floor(Math.random() * colors.length)];
        }
    }
}
  

function draw() {

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  for(var i=0; i<ps.length; i++) {
    ctx.beginPath();
		ctx.arc( ps[i].x, ps[i].y, ps[i].r, 0, 6);
		ctx.fillStyle = ps[i].c;
		ctx.fill(); 
  }
}

setInterval(function() {
  update();
  draw();
  reset();
}, 30);
