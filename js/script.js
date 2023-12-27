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

// 看菜單

let cake1 = document.querySelector("#cake1");
let cake2 = document.querySelector("#cake2");
let cake3 = document.querySelector("#cake3");
let cake1img =document.querySelector("#cake1img");
let cake1label =document.querySelector("#cake1label");
let cake2img =document.querySelector("#cake2img");
let cake2label =document.querySelector("#cake2label");
let cake3img =document.querySelector("#cake3img");
let cake3label =document.querySelector("#cake3label");

// $('document').ready(function(){
//     $('#cake1').mouseenter(function(){
//         $("#cake1img").css('opacity','0.6').css('transition','all 0.5s').css('height','70%');
//         $("#cake1label").css('height','30%').css('transition','all 0.5s');
//     }).mouseleave(function(){
//         $("#cake1img").css('opacity','1').css('transition','all 0.5s').css('height','80%');
//     })

//     $('#cake2').mouseenter(function(){
//         $("#cake2img").css('opacity','0.6').css('transition','all 0.5s').css('height','70%');
//         $("#cake2label").css('height','30%').css('transition','all 0.5s');
//     }).mouseleave(function(){
//         $("#cake2img").css('opacity','1').css('transition','all 0.5s').css('height','80%');
//     })

//     $('#cake3').mouseenter(function(){
//         $("#cake3img").css('opacity','0.6').css('transition','all 0.5s').css('height','70%');
//         $("#cake3label").css('height','30%').css('transition','all 0.5s');
//     }).mouseleave(function(){
//         $("#cake3img").css('opacity','1').css('transition','all 0.5s').css('height','80%');
//     })
// });


let btn_right = document.querySelector("#btn_right");
let btn_left = document.querySelector("#btn_left");

$('document').ready(function(){
    $("#btn_right").on("click",function(){
        $("#btn_left").css('opacity','1').css('transition','all 0.5s');
        $("#menuitem").css('justify-content','end').css('transition','all 0.5s');
        
    })
    $("#btn_left").on("click",function(){
        $("#btn_left").css('opacity','0').css('transition','all 0.5s');
        $("#menuitem").css('justify-content','start').css('transition','all 0.5s');
    })

});

$('document').ready(function(){
    let $ul = $(".phonenav_list"),
    $menu = $(".phonenav_menu");

    $($menu).click(function(){
        $ul.toggleClass("menu_click");
    });

});