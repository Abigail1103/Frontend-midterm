// alert("QQ");
let about =document.querySelector("#about");
let popupabout = document.querySelector("#popupabout");
let isAboutHover =false;
let isAboutOpen =false;

$(document).ready(function() {
    if(!isAboutHover){
        $('#about').mouseenter(function() {
            $('#popupabout').slideDown(300);
            isAboutHover=true;
            // $('#popupabout').css('display', 'block');
        }).mouseleave(function(){
            isAboutHover=false;
        })
        $('#popupabout').mouseenter(function(){
            $('#popupabout').css('display','block');
            isAboutOpen=true;
        }).mouseleave(function(){
            $('#popupabout').slideUp(300);
            isAboutOpen=false;
        })

    };
    
});
