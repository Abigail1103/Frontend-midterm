// alert("QQ");
let about =document.querySelector("#about");
let menu =document.querySelector("#menu");
let reservation =document.querySelector("#reservation");
let popupabout = document.querySelector("#popupabout");
let popupmenu = document.querySelector("#popupmenu");
let isAboutHover =false;
let isAboutOpen =false;
let isMenuHover =false;
let isMenuOpen =false;
let isReservationHover =false;

$(document).ready(function() {
    if(!isAboutHover){
        $('#about').mouseenter(function() {
            $('#popupmenu').slideUp(300);
            $('#popupabout').slideDown(300);
            isAboutHover=true;
            // $('#popupabout').css('display', 'block');
        }).mouseleave(function(){
            isAboutHover=false;
            if(!isAboutOpen){
                $('#popupabout').mouseenter(function(){
                    $('#popupabout').css('display','block');
                    isAboutOpen=true;
                }).mouseleave(function(){
                    $('#popupabout').slideUp(300);
                    isAboutOpen=false;
                })
            }
            
        })
    }
    if(!isMenuHover){
        $('#menu').mouseenter(function() {
            $('#popupabout').slideUp(300);
            $('#popupmenu').slideDown(300);
            isMenuHover=true;
            // $('#popupabout').css('display', 'block');
        }).mouseleave(function(){
            isMenuHover=false;
            if(!isMenuOpen){
                $('#popupmenu').mouseenter(function(){
                    $('#popupmenu').css('display','block');
                    isMenuOpen=true;
                }).mouseleave(function(){
                    $('#popupmenu').slideUp(300);
                    isMenuOpen=false;
                })
            }
            
        })
    }
    if(!isReservationHover){
        $("#reservation").hover(function(){
            $('#popupmenu').slideUp(300);
            $('#popupabout').slideUp(300);
        })
    }
    
});
