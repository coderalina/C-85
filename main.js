canvas= document.getElementById("my_canvas");
ctx= canvas.getContext("2d");

rover_width=100;
rover_height=90;

nasa = ["mars.0.jfif", "mars.2.jpg", "mars.3.jpg", "mars.jpg" ];

random = Math.floor(Math.random() *4);
console.log(random);

background_image = nasa[random] ;
console.log("Background Image" + background_image );
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add(){

background = new Image();
background.onload= upload;
background.src= background_image;

rover = new Image();
rover.onload= upload_rover;
rover.src= rover_image;

}

function upload(){

ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

}

function upload_rover(){

ctx.drawImage(rover, rover_x, rover_y, rover_width, rover_height);

}

window.addEventListener('keydown', my_key_down);

function my_key_down(e){

var key= e.keyCode;
console.log(key);

if( key=='38' ){

up();
console.log("up");

}

if( key=='39' ){

    right();
    console.log("right");
    
    }

    if( key=='40' ){

        down();
        console.log("down");
        
        }

        if( key=='37' ){

            left();
            console.log("left");
            
            }

}

function down(){

    if(rover_y <= 500 ){
    
    rover_y= rover_y + 10;
    upload();
    upload_rover(); 
    console.log( "When down arrow is pressed,  x = " + rover_x + " | y = " + rover_y );
    
    }
    
    }


    function up(){

        if(rover_y >= 0 ){
        
        rover_y= rover_y - 10;
        upload();
        upload_rover(); 
        console.log( "When up  arrow is pressed,  x = " + rover_x + " | y = " + rover_y );
        
        }
        
        }

    function right(){

        if(rover_x <= 700 ){
        
        rover_x= rover_x+10;
        upload();
        upload_rover(); 
        console.log( "When right arrow is pressed,  x = " + rover_x + " | y = " + rover_y );

        }
        
        }

        function left(){

            if(rover_x >= 0 ){
            
            rover_x= rover_x-10;
            upload();
            upload_rover(); 
            console.log( "When left arrow is pressed,  x = " + rover_x + " | y = " + rover_y );

            }
            
            }

