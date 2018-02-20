//this function draws the sprite
function Ship() {

    //variables of ship start positions
    var x = Math.floor((Math.random() * 400 + 70) + 50),
        y = 0,
        vx = 0,
        vy = 0;
    //Red window drawn on ship
    RedWindow = 1;
    //bools for possible outcomes of the game
    var Boom,
     Win;
    var Gameover = false;//NEW


    Ship.prototype.draw = function (context) {
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(x, y);
        //start the line (path)
        context.beginPath();
        //context.fillStyle = "#d3d3d3";
        context.moveTo(40, 0);
        context.lineTo(40, -10);
        context.lineTo(30, -20);
        context.lineTo(20, -30);
        context.lineTo(10, -40);
        context.lineTo(0, -40);
        context.lineTo(-10, -40);
        context.lineTo(-20, -30);
        context.lineTo(-30, -20);
        context.lineTo(-40, -10);
        context.lineTo(-40, 0);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();

        DrawWindows(context)
        //windows

        // if the ship has crashed
        if (Boom == true) {
            //create a new instance of an image
            var img = new Image();
            //get the bitmap source
            img.src = "Images/boom.png";
            //draw the image on the context
            context.drawImage(img, -100, -110);
            vx = 0;
            vy = 0;
        }

        if (Win == true) {
            var img = new Image();
            //get the bitmap source
            img.src = "Images/win.png";
            //draw the image on the context
            context.drawImage(img, -180, -350);
        }
        context.restore();
    }

    function DrawWindows(context) {
        //var for the offset of the window to be drawn
        var XOffset = -20,
            //var for loop counter to indicate which window we are drawing
            WindowNo = 1,
            //var to store the colour to use
            Colour = "";
        //loop through each window
        while (WindowNo != 4) {
            //if the red window is being drawn then set the colour to red
            if (WindowNo == RedWindow) {
                //set colour to red
                Colour = "#ff0000";
            }
            else {
                //set colour to white
                Colour = "#ffffff";
            }
            //draw the window
            Window(context, XOffset, -10, Colour);
            //point at the next window
            WindowNo++;
            //work out the position of the next window
            XOffset = XOffset + 20;
        }
        //chage the red window to the next one
        RedWindow = RedWindow + .25;
        //if the red window is 6 thats too many
        if (RedWindow == 4) {
            //set it back to 1
            RedWindow = 1;
        }
    }

    //this function creates the windows on the ship
    function Window(context, xposn, yposn, colour) {
        context.beginPath();
        context.fillStyle = colour;
        context.arc(xposn, yposn, 5, 0, (Math.PI * 2));
        context.fill();
        context.stroke();
    }

    //this function handles the movement of the ship 
    //within the canvas
    Ship.prototype.move = function () {
        //change the x axis by the x velocity
        x += vx;
        //change the y axis by the y velocity
        y += vy;
        if (y >= 799) {
            y = 0;
            vy = 0;
        }
        else if (x >= 799 || x <= 0) {
            x = 400, y = 0;
            vx = 0;
        }

    }

    //this function handles the acceleration of the ship
    Ship.prototype.accelerate = function (Acceleration) {
        //set vx
        vx += Acceleration.AX;
        //set vy
        vy += Acceleration.AY;
    }

    Ship.prototype.setVector = function (vector) {
        //set vx
        vx = vector.VX;
        //set vy
        vy = vector.VY;
    }

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the value of y less height
            return y - 0;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the value of y plus height
            return y + 0;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the value of x less width
            return x - 0;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the value of x plus width
            return x + 0;
        }
    }
    )


    Ship.prototype.crash = function () {
        //temp variable to store the vy/vx values
        var temp = vy,
            temp2 = vx;
        //kill all velocity
        vx = 0;
        vy = 0;
        //if the ship comes in contact with any barrier
        //with a velocity of >.5, "Boom" it crashes
        if ((temp > 0.5) | (temp2 > 0.5)) {
            Boom = true;
        }

    }

    Ship.prototype.stop = function () {
        //killing the keyboard keys by setting the used keys values to false
        //to avoid further interaction with the game.
        keycode.UP = false;
        keycode.DOWN = false;
        keycode.LEFT = false;
        keycode.RIGHT = false;
        keycode.SPACE = false;
        keycode.X = false;
        keycode.Z = false;
    }

    //kill all velocity of the ship
    //no movement on either axis
    Ship.prototype.halt = function () {

        vx = 0;
        vy = 0;

    }

    //moor function handles the safe landing of the ship
    Ship.prototype.moor = function () {

        if (Gameover == false)//only if first time
        {
            Gameover = true;
            //temp variable to store the vy value
            var tem = vy;

            if (tem < .6) {
                Win = true;
                Boom = false;
                //kill all velocity of the ship
                tem = 0;
                tem = 0;
                ship.halt();
                //console.log('ship.halt')
            }

            else {
                Boom = true;
                //alert(tem);
            }
            //END  if (Gameover==false)
        }
    }
}


