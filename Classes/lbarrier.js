function leftBarrier() {
    //start positions for lbx & lby
    var lbx = 130, 
        lby = 320;
        

    leftBarrier.prototype.draw = function (context) {
        context.save();
        //set the coordinates of the drawing area of the new shape to x and y
        context.translate(lbx, lby);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#E9EBF8";
        //lbx, lby, radius, start_angle, end_angle, anti-clockwise
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

    //create a public property called X (note caps!)
    Object.defineProperty(this, 'X',
    {
        //getter
        get: function () {
            //return the value of lbx (lower case)
            return lbx;
        },
        //setter
        set: function (value) {
            //set the value of lbx (lower case)
            lbx = value;
        }
    }
    )

    //create a public property called Y (note caps!)
    Object.defineProperty(this, 'Y',
    {
        //getter
        get: function () {
            //return the value of lby (lower case)
            return lby;
        },
        //setter
        set: function (value) {
            //set the value of lby (lower case)
            lby = value;
        }
    }
    )

    //create a public property called Top
    Object.defineProperty(this, 'Top',
    {
        //getter
        get: function () {
            //return the lby posn less the height
            return lby - 70;
        }
    }
    )

    //create a public property called Bottom
    Object.defineProperty(this, 'Bottom',
    {
        //getter
        get: function () {
            //return the lby posn plus the height
            return lby + 50;
        }
    }
    )

    //create a public property called Left
    Object.defineProperty(this, 'Left',
    {
        //getter
        get: function () {
            //return the lbx posn less the width
            return lbx - 150;
        }
    }
    )

    //create a public property called Right
    Object.defineProperty(this, 'Right',
    {
        //getter
        get: function () {
            //return the lbx posn plus the width
            return lbx + 40;
        }
    }
    )
}
    