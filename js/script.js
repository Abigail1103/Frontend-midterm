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
        $("#btn_right").css('opacity','0').css('transition','all 0.5s');
        
    })
    $("#btn_left").on("click",function(){
        $("#btn_left").css('opacity','0').css('transition','all 0.5s');
        $("#menuitem").css('justify-content','start').css('transition','all 0.5s');
        $("#btn_right").css('opacity','1').css('transition','all 0.5s');
        
    })
    
});

$('document').ready(function(){
    let $ul = $(".phonenav_list"),
    $menu = $(".phonenav_menu");

    $($menu).click(function(){
        $ul.toggleClass("menu_click");
    });

});

let isAnswerOpen = false;

$('document').ready(function(){
    $("#qa1").click(function(){
        if(!isAnswerOpen){
            $("#ans1").slideDown(300);
            $("#qa1").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont1").css('color','#fff');
            $("#ques_num1").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title1").css('color','#fff');
            $("#btn_qa1").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans1").slideUp(300);
            $("#qa1").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont1").css('color','#A4907C');
            $("#ques_num1").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title1").css('color','#6F553E');
            $("#btn_qa1").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa2").click(function(){
        if(!isAnswerOpen){
            $("#ans2").slideDown(300);
            $("#qa2").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont2").css('color','#fff');
            $("#ques_num2").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title2").css('color','#fff');
            $("#btn_qa2").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans2").slideUp(300);
            $("#qa2").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont2").css('color','#A4907C');
            $("#ques_num2").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title2").css('color','#6F553E');
            $("#btn_qa2").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa3").click(function(){
        if(!isAnswerOpen){
            $("#ans3").slideDown(300);
            $("#qa3").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont3").css('color','#fff');
            $("#ques_num3").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title3").css('color','#fff');
            $("#btn_qa3").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans3").slideUp(300);
            $("#qa3").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont3").css('color','#A4907C');
            $("#ques_num3").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title3").css('color','#6F553E');
            $("#btn_qa3").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa4").click(function(){
        if(!isAnswerOpen){
            $("#ans4").slideDown(300);
            $("#qa4").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont4").css('color','#fff');
            $("#ques_num4").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title4").css('color','#fff');
            $("#btn_qa4").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans4").slideUp(300);
            $("#qa4").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont4").css('color','#A4907C');
            $("#ques_num4").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title4").css('color','#6F553E');
            $("#btn_qa4").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa5").click(function(){
        if(!isAnswerOpen){
            $("#ans5").slideDown(300);
            $("#qa5").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont5").css('color','#fff');
            $("#ques_num5").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title5").css('color','#fff');
            $("#btn_qa5").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans5").slideUp(300);
            $("#qa5").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont5").css('color','#A4907C');
            $("#ques_num5").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title5").css('color','#6F553E');
            $("#btn_qa5").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa6").click(function(){
        if(!isAnswerOpen){
            $("#ans6").slideDown(300);
            $("#qa6").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont6").css('color','#fff');
            $("#ques_num6").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title6").css('color','#fff');
            $("#btn_qa6").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans6").slideUp(300);
            $("#qa6").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont6").css('color','#A4907C');
            $("#ques_num6").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title6").css('color','#6F553E');
            $("#btn_qa6").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })

    $("#qa7").click(function(){
        if(!isAnswerOpen){
            $("#ans7").slideDown(300);
            $("#qa7").css('border-color','#A4907C').css('background-color','#8B706A').css('border-radius','5px');
            $("#cont7").css('color','#fff');
            $("#ques_num7").css('background-color','#fff').css('color','#6F553E');
            $("#ques_title7").css('color','#fff');
            $("#btn_qa7").css('transform','rotate(-45deg)').css('transition','all 0.5s');
            isAnswerOpen=true;
        }else{
            $("#ans7").slideUp(300);
            $("#qa7").css('border-color','#8B706A').css('background-color','#fff').css('border-radius','0px').css('transition','all 0.5s');
            $("#cont7").css('color','#A4907C');
            $("#ques_num7").css('background-color','#6F553E').css('color','#fff');
            $("#ques_title7").css('color','#6F553E');
            $("#btn_qa7").css('transform','rotate(0deg)').css('transition','all 0.5s');
            isAnswerOpen=false;
        }
        
    })
})

