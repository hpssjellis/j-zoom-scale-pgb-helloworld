

// This .js file should be included on each page, and called on mouseover for specific DIV's 
// or onload for the entire page
// <script  src=androidzoom.js>
// <div id="mySpecialDiv" onmouseover="myAndroidZoom('mySpecialDiv', 'true')"> 




//window.onload = function(){




function myAndroidZoom(myDivFromPage, myZoomtype){

// myDivFromPage   should be the calling div, could be the entire page
// myZoomType should be 'true' for zoom out only and 'false' to zoom and shrink the page




//Global Variables
document.myStartDist = 0
document.myScale = 1.1
document.myOnlyZoomLarger = myZoomtype    // if true page only can zoom larger, false allows page to shrink 

document.getElementById(myDivFromPage).style.WebkitTransformOrigin = '0px 0px';




// basic touch events


 myBodyId.ontouchstart = function(event){
    myFinger0 = event.touches[0]
    myFinger1 = event.touches[1]
    document.myStartDist = parseInt(myFinger0.clientX)  - parseInt(myFinger1.clientX)    
 }



  myBodyId.ontouchmove = function(event){
   
   if (event.touches.length == 2){     // check if only two fingers on the device
    
    myFinger0 = event.touches[0]
    myFinger1 = event.touches[1]
    myNewWidth = parseInt(myFinger0.clientX) - parseInt(myFinger1.clientX)   
    myChangeX =  myNewWidth / document.myStartDist  
    document.myScale = myChangeX
    
    
    
    // the following is less confusing than normal javascript if statements
    
    if (document.myOnlyZoomLarger == 'false'){
      if (document.myScale < 0.05){    // so web page does not fully disapear
          document.myScale = 0.05
      } 
      document.getElementById(myDivFromPage).style.webkitTransform = 'scale('+document.myScale+')';
    }  
    
    
    if (document.myOnlyZoomLarger == 'true'){
      if (document.myScale < 1){    //  resets webpage to original size
          document.myScale = 1.0
          document.getElementById(myDivFromPage).style.webkitTransform = 'scale(1.0)';
      } else {
        document.getElementById(myDivFromPage).style.webkitTransform = 'scale('+document.myScale+')';
      }
    }
          
        

   } // end touches   
    
  }  // end ontouchmove


}



