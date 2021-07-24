let x = 0;
let y = 200;
let rando =0;
let spacing = 0;
var ran; 
var texticles ;
let w = windowWidth-10; 
let h= windowHeight-10; 

let button;

  


function setup() {
createCanvas(1200, 1200);
background(0);
button = createButton('👈');
button.position(600, 1000);
  button.size(100)
  button.mousePressed(goLeft);
  
}
function goLeft(){
alert("hi");
}
function draw() {
while (y < 800){
stroke(0,255,0);

fill(0, 255, 0);
textSize(80);


 // button.show; 
if ( x > 800){
x =0;
y = y + 80;
}

rando = random(10);
ran= Math.ceil(rando); 
if (rando <2){
    texticles= "__";
    } else if (ran==2){
  texticles= " |";
}
else if( ran == 3){
    texticles= "0";
    }
else if (ran ==4){
    texticles= "1";
}
    
else if (ran ==5){
    texticles= " ";
    }

else if (ran ==6){
    texticles= "|";
    }
else if (ran ==7){
    texticles= "|";

    }
else if (ran ==8){
    texticles= "__";
    }
else if (ran ==9){
    texticles= " ";
    }
else if (ran> 9){
    texticles= "  ";
    }
 text(texticles, x, y);
x=x+40; 
}

}
