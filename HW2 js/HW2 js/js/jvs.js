/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       var imgDiv = document.getElementById("image");
       imgDiv.style.backgroundImage = "url('" + previewPic.src+ "')";
       imgDiv.innerHTML = previewPic.alt;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       var imgDiv = document.getElementById("image");
       imgDiv.style.backgroundImage = "none";
       imgDiv.innerHTML = "Hover over an image below to display here.";
       }

function setImages(){
currentImages=document.querySelectorAll(".preview");
for(var i=0;i<currentImages.length;i++){
    currentImages[i].addEventListener("focus",function(){
upDate(this);
console.log("Image Focused:",this.alt);
    }
);

currentImages[i].addEventListener("blur",function(){
unDo();
console.log("Image unfocused:",this.alt);

}
);
currentImages[i].setAttribute("tabindex","0");

}

}