
function Mbarrier() {
    //create private variables for the x and y coordinates

    var xposn = 0,
        yposn = 450;
        //vxposn = 0,
        //vyposn = 0;

    //draw the moving barrier on the canvas
    Mbarrier.prototype.draw = function (context) {
        ////save the state of the drawing context before we change it 
        context.save();
        ////set the coordinates of the drawing area of the new shape to x and y
        context.translate(xposn, yposn);
        //start the line (path)
        context.beginPath();
        context.fillStyle = "#FF0000";
        context.moveTo(60, 7);
        context.lineTo(40, -27);
        context.lineTo(60, -62);
        context.lineTo(20, -62);
        context.lineTo(0, -97);
        context.lineTo(-20, -62);
        context.lineTo(-60, -62);
        context.lineTo(-40, -27);
        context.lineTo(-60, 7);
        context.lineTo(-20, 7);
        context.lineTo(0, 42);
        context.lineTo(20, 7);
        //close the path
        context.closePath();
        context.fill();
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to what it was before our drawing()
        context.restore();

    }

        
    //this function handles the movement of the moving barrier accross the canvas
        Mbarrier.prototype.move = function () {
            //x++;
            //change the xposn axis by the xposn velocity
            xposn += 2;
            if (xposn >= 799) {
                xposn = 0;
            }

        }

    //create a public property called X (note caps)
        Object.defineProperty(this, 'X',
            {
                //getter
                get: function () {
                    //return the value of xposn (lower case)
                    return xposn;
                },
                //setter 
                set: function (value) {
                    //set the value of xposn (lower case)
                    xposn = value
                }
            }
    )

    //create a public property called Y (note caps)
        Object.defineProperty(this, 'Y',
            {
                //getter
                get: function () {
                    //return the value of yposn (lower case)
                    return yposn;
                },
                //setter 
                set: function (value) {
                    //set the value of yposn (lower case)
                    yposn = value;
                }
            }
            )



    //create a public property called Top
        Object.defineProperty(this, 'Top',
        {
            //getter
            get: function () {
                //return the yposn less the height
                return yposn - 10;
            }
        }
        )

    //create a public property called Bottom
        Object.defineProperty(this, 'Bottom',
        {
            //getter
            get: function () {
                //return the yposn plus the height
                return yposn + 10;
            }
        }
        )

    //create a public property called Left
        Object.defineProperty(this, 'Left',
        {
            //getter
            get: function () {
                //return the xposn less the width
                return xposn - 80;
            }
        }
        )

    //create a public property called Right
        Object.defineProperty(this, 'Right',
        {
            //getter
            get: function () {
                //return the xposn plus the width
                return xposn + 80;
            }
        }
        )



    }