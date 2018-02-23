// this class contains code that handles the mooring of the ship

function Mooring() {
    Mooring.prototype.Moor = function (ObjectA, ObjectE) {
        //variables to see if the ship moors safely
        var SDL_Overlap,//Ship-Dock-Left Overlap
            SDR_Overlap,//Ship-Dock-Right Overlap
            SDT_Overlap,//Ship-Dock-Top Overlap
            SDB_Overlap;//Ship-Dock-Bottom Overlap

        //check to see if the left edge of the ship dock is overlapping
        SDL_Overlap = (ObjectA.Left >= ObjectE.Left) & (ObjectA.Left <= ObjectE.Right);
        //check to see if the right edge of ship dock is overlapping 
        SDR_Overlap = (ObjectA.Right >= ObjectE.Right) & (ObjectA.Right <= ObjectE.Right);
        //check to see if the top edge of ship dock is overlapping
        SDT_Overlap = (ObjectA.Top >= ObjectE.Top) & (ObjectA.Top <= ObjectE.Bottom);
        //check to see if the bottom edge of ship dock is overlapping
        SDB_Overlap = (ObjectA.Bottom >= ObjectE.Top) & (ObjectA.Bottom <= ObjectE.Bottom);
        //if either left/right and either top/bottom edges are overlapping 
        if ((SDL_Overlap | SDR_Overlap) & (SDT_Overlap | SDB_Overlap)) {
            return true;
        }
        else {
            //otherwise return false 
            //safely moored
            return false;
        }
    }
}