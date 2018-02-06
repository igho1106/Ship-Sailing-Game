 //this class contains code designed to detect collisions between objects
function Collision() {
    //collision function that handles the collision between all objects as shown on the HTML page.
    Collision.prototype.Overlapping = function (ObjectA, ObjectB, ObjectC, ObjectD) {
        //variables to see if overlaps are taking place
        var LBL_Overlap,//Left-Barrier-Left Overlap
            LBR_Overlap,//Left-Barrier-Right Overlap
            LBT_Overlap,//Left-Barrier-Top Overlap
            LBB_Overlap,//Left-Barrier-Bottom Overlap
            RBL_Overlap,//Right-Barrier-Left Overlap
            RBR_Overlap,//Right-Barrier-Right Overlap
            RBT_Overlap,//Right-Barrier-Top Overlap
            RBB_Overlap,//Right-Barrier-Bottom Overlap
            MBL_Overlap,//Moving-Barrier-Left Overlap
            MBR_Overlap,//Moving-Barrier-Right Overlap
            MBT_Overlap,//Moving-Barrier-Top Overlap
            MBB_Overlap;//Moving-Barrier-Bottom
        

            

            
        //check to see if the left edge of the left barrier is overlapping 
        LBL_Overlap = (ObjectA.Left >= ObjectB.Left) & (ObjectA.Left <= ObjectB.Right);
        //check to see if the right edge of the left barrier is overlapping 
        LBR_Overlap = (ObjectA.Right >= ObjectB.Right) & (ObjectA.Right <= ObjectB.Right);
        //check to see if the top edge of the left barrier is overlapping
        LBT_Overlap = (ObjectA.Top >= ObjectB.Top) & (ObjectA.Top <= ObjectB.Bottom);
        //check to see if the bottom edge of the left barrier is overlapping
        LBB_Overlap = (ObjectA.Bottom >= ObjectB.Top) & (ObjectA.Bottom <= ObjectB.Bottom);
        //check to see if the left edge of right barrier is overlapping
        RBL_Overlap = (ObjectA.Left >= ObjectC.Left) & (ObjectA.Left <= ObjectC.Right);
        //check to see if the right edge of the right barrier is overlapping
        RBR_Overlap = (ObjectA.Right >= ObjectC.Right) & (ObjectA.Right <= ObjectC.Right);
        //check to seee if the top edge or the right barrier is overlapping
        RBT_Overlap = (ObjectA.Top >= ObjectC.Top) & (ObjectA.Top <= ObjectC.Bottom);
        //check to see if the bottom edge of the right barrier is overlapping
        RBB_Overlap = (ObjectA.Bottom >= ObjectC.Top) & (ObjectA.Bottom <= ObjectC.Bottom);
        //check to see if the left edge of the moving barrier is overlapping
        MBL_Overlap = (ObjectA.Left >= ObjectD.Left) & (ObjectA.Left <= ObjectD.Right);
        //check to see if the right edge of the moving barrier is overlapping
        MBR_Overlap = (ObjectA.Right >= ObjectD.Right) & (ObjectA.Right <= ObjectD.Right);
        //check to see if the top edge of the moving barrier is overlapping 
        MBT_Overlap = (ObjectA.Top >= ObjectD.Top) & (ObjectA.Top <= ObjectD.Bottom);
        //check to see if the bottom edge of the moving barrier is overlapping 
        MBB_Overlap = (ObjectA.Bottom >= ObjectD.Top) & (ObjectA.Bottom <= ObjectD.Bottom);





        //if either left/right and either top/bottom edges of the left barrier are overlapping 
        if ((LBL_Overlap | LBR_Overlap ) & (LBT_Overlap | LBB_Overlap )) {
            return true;
        }
        //if either left/right and either top/bottom edges of the right barrier are overlapping 
        else if ((RBL_Overlap | RBR_Overlap) & (RBT_Overlap | RBB_Overlap)) {
            return true;
        //if either left/right and either top/bottom edges of the middle barrier are overlapping 
        }
        else if ((MBL_Overlap | MBR_Overlap) & (MBT_Overlap | MBB_Overlap)) {
            return true;
        }
        else {
            //otherwise return false... there is no collision 
            return false;
        }
    }
}

