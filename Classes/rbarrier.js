function rightBarrier() {
    //start positions for rbx & rby
    var rbx = 720,//Math.floor((Math.random() * 400 + 120 + 100)),
        rby = 520;


    rightBarrier.prototype.draw = function (context) {
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(rbx, rby);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#E9EBF8";
        //rbx, rby, radius, start_angle, end_angle, anti-clockwise
        //context.moveTo(-80, -10);
        //context.lineTo(80, -10);
        //context.lineTo(80, 10);
        //context.lineTo(-80, 10);

        context.moveTo(0, 40);
        context.lineTo(-40, 40);
        context.lineTo(-150, 0);
        context.lineTo(-120, -50);
        context.lineTo(-25, -75);
        context.lineTo(75, -25);

        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing()
        context.restore();
    }

    //create a public property called X (note caps)
    Object.defineProperty(this, 'X',
        {
            //getter
            get: function () {
                //return the value of rbx (lower case)
                return rbx;
            },
            //setter 
            set: function (value) {
                //set the value of rbx (lower case)
                rbx = value
            }
        }
)

    //create a public property called Y (note caps)
    Object.defineProperty(this, 'Y',
        {
            //getter
            get: function () {
                //return the value of rby (lower case)
                return rby;
            },
            //setter 
            set: function (value) {
                //set the value of rby (lower case)
                rby = value;
            }
        }
        )



    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the rby posn less the height
            return rby - 75;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the rby posn plus the height
            return rby + 50;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the rbx posn less the width
            return rbx - 150;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the rbx posn plus the width
            return rbx + 40;
        }
    }
    )



}