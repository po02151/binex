$(document).ready(function(){
	// accordion();
    tabMenu();

    // calendarBtn();
    mainPopUp();
    langBtn();
    mainSlider();
    mainSliderCtrl();

    tabLink();
    detail_tabLink();

    probioticsSlider();
    busanSlider1();
    busanSlider2();
    businessSlider1();
    businessSlider2();
    businessSlider3();

    hoverTxtBox();

    hamburger();
    mobileHeaderAccordion();

    stickyNav();
}); 

function stickyNav(){
    $('.stickyNavBox > div > div > span').click(function(){
        $(this).toggleClass('active');
    })
}

function hamburger(){
    $('.header_mo .hamburger').click(function(){
        $(this).parents('.header_mo').toggleClass('active');
    })
}

function mobileHeaderAccordion(){
    $('.header_mo .nav > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).nextAll('ul').slideToggle('fast');
        $(this).parent().siblings('li').children('ul').slideUp('fast')
            .parent('li').find('span').removeClass('active');
        return false;
        
    })
}

function hoverTxtBox(){
    
    $('.processing_procedure .contentBox .tabBtnBox > div > div').hover(function(){
        $('.processing_procedure .contentBox .tabBtnBox > div > div').removeClass('active');
        $(this).addClass('active');
        
        if($('.step_1').hasClass('active')){
			$('.hoverTxtBox > p').removeClass('active');
			$('.hoverTxtBox > p:nth-child(2)').addClass('active');
		}
		if($('.step_2').hasClass('active')){
			$('.hoverTxtBox > p').removeClass('active');
			$('.hoverTxtBox > p:nth-child(3)').addClass('active');
		}
		if($('.step_3').hasClass('active')){
			$('.hoverTxtBox > p').removeClass('active');
			$('.hoverTxtBox > p:nth-child(4)').addClass('active');
		}
		if($('.step_4').hasClass('active')){
			$('.hoverTxtBox > p').removeClass('active');
			$('.hoverTxtBox > p:nth-child(5)').addClass('active');
		}
        if($('.step_5').hasClass('active')){
			$('.hoverTxtBox > p').removeClass('active');
			$('.hoverTxtBox > p:nth-child(6)').addClass('active');
		}
        
    })
}

function businessSlider1(){
    
    $('.songdo ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.songdo .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

}
function businessSlider2(){
    
    $('.osong ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.osong .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

}
function businessSlider3(){
    
    $('.busan ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.busan .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

}

function busanSlider2(){
    
    $('.sliderWrap2 ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.sliderWrap2 .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

    $('.sliderWrap2 ul').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 

        var i = (currentSlide ? currentSlide : 0) + 1;
       
        $('.sliderPagerBox2').html("<span class='now'>"+i+"</span><span> / "+slick.slideCount+"</span>");
       
    });
}
function busanSlider1(){
    
    $('.sliderWrap1 ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.sliderWrap1 .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

    $('.sliderWrap1 ul').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 

        var i = (currentSlide ? currentSlide : 0) + 1;
       
        $('.sliderPagerBox1').html("<span class='now'>"+i+"</span><span> / "+slick.slideCount+"</span>");
       
    });
}

function probioticsSlider(){
    
    $('.probiotics .sliderWrap ul').slick({
        autoplay: true,
        arrows: true,
        appendArrows: $('.probiotics .sliderWrap .btnBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

    $('.probiotics .sliderWrap ul').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 

        var i = (currentSlide ? currentSlide : 0) + 1;
       
        $('.sliderPagerBox').html("<span class='now'>"+i+"</span><span> / "+slick.slideCount+"</span>");
       
    });
}


function detail_tabLink(){

    $('.tab1').click(function(){
        $('.tabBtnBox a').removeClass('active');
        $('.tabBtn_1').addClass('active');
        if($('.tabBtn_1').hasClass('active')){
            $('.header_mo').removeClass('active');
            $(".subPage").attr("id","tab1");
            $(".tabContentBox > div").removeClass('active');
			$('.tabContentBox .content_1').addClass('active');
		}
    })
    $('.tab2').click(function(){
        $('.tabBtnBox a').removeClass('active');
        $('.tabBtn_2').addClass('active');
        if($('.tabBtn_2').hasClass('active')){
            $('.header_mo').removeClass('active');
            $(".subPage").attr("id","tab2");
            $(".tabContentBox > div").removeClass('active');
			$('.tabContentBox .content_2').addClass('active');
		}
    })
    $('.tab3').click(function(){
        $('.tabBtnBox a').removeClass('active');
        $('.tabBtn_3').addClass('active');
        if($('.tabBtn_3').hasClass('active')){
            $('.header_mo').removeClass('active');
            $(".subPage").attr("id","tab3");
            $(".tabContentBox > div").removeClass('active');
			$('.tabContentBox .content_3').addClass('active');
		}
    })
    $('.tab4').click(function(){
        $('.tabBtnBox a').removeClass('active');
        $('.tabBtn_4').addClass('active');
        if($('.tabBtn_4').hasClass('active')){
            $('.header_mo').removeClass('active');
            $(".subPage").attr("id","tab4");
            $(".tabContentBox > div").removeClass('active');
			$('.tabContentBox .content_4').addClass('active');
		}
    })
    $('.tab5').click(function(){
        $('.tabBtnBox a').removeClass('active');
        $('.tabBtn_5').addClass('active');
        if($('.tabBtn_5').hasClass('active')){
            $('.header_mo').removeClass('active');
            $(".subPage").attr("id","tab5");
            $(".tabContentBox > div").removeClass('active');
			$('.tabContentBox .content_5').addClass('active');
		}
    })
}

function tabLink(){
    if (location.hash == "#tab1"){
            $(".subPage").attr("id","tab1");
            $('.tabBtnBox').find('a').removeClass('active');
            $('.tabBtnBox').find('a').eq(0).addClass('active');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox').find('#tab1').addClass('active');
        }else if(location.hash == "#tab2"){
            $(".subPage").attr("id","tab2");
            $('.tabBtnBox').find('a').removeClass('active');
            $('.tabBtnBox').find('a').eq(1).addClass('active');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox').find('#tab2').addClass('active');
        }else if(location.hash == "#tab3"){
            $(".subPage").attr("id","tab3");
            $('.tabBtnBox').find('a').removeClass('active');
            $('.tabBtnBox').find('a').eq(2).addClass('active');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox').find('#tab3').addClass('active');
        }else if(location.hash == "#tab4"){
            $(".subPage").attr("id","tab4");
            $('.tabBtnBox').find('a').removeClass('active');
            $('.tabBtnBox').find('a').eq(3).addClass('active');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox').find('#tab4').addClass('active');
        }else if(location.hash == "#tab5"){
            $(".subPage").attr("id","tab5");
            $('.tabBtnBox').find('a').removeClass('active');
            $('.tabBtnBox').find('a').eq(4).addClass('active');
            $('.tabContentBox > div').removeClass('active');
            $('.tabContentBox').find('#tab5').addClass('active');
        }
        
}

function mainSliderCtrl(){
    $('.mainPage .sliderWrap .left').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 

        var i = (currentSlide ? currentSlide : 0) + 1;
       
        $('.circleBtn').html("<i class='fa-regular fa-plus'></i><img class='circle circle"+i+"' src='assets/images/main_circleBtn"+i+".png' alt='circle text'>");
        

        $('.mainPage .sliderWrap .right > div').attr('class', 'box');
        switch (currentSlide){
            case 0:
                $('.box').removeClass('active');
                $('.box .box1').addClass('active');
                break;

            case 1:
                $('.box').removeClass('active');
                $('.box .box2').addClass('active');
                break;
                
            case 2:
                $('.box').removeClass('active');
                $('.box .box3').addClass('active');
                break;
        }
    });

    // $('.mainPage .sliderWrap .left').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 

    //     var i = (currentSlide ? currentSlide : 0) + 1;
       
    //     $('.sPage1').html("<span class='now'>"+i+"</span><span> / "+slick.slideCount+"</span>");
       
    // });
    
}

function mainSlider(){
    $('.mainPage .sliderWrap .left').slick({
        autoplay: true,
        dots: true,
        arrows: true,
        appendDots: $('.dots'),
        appendArrows: $('.arrowBox'),
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // variableWidth: true,

        responsive: [
              {
                breakpoint: 1600,
                settings: {
                    variableWidth: false
                }
              }
            ]

        // fade: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '10px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
    });

    $('.controlBtn').click(function(){
        $(this).toggleClass('active');
        if($('.controlBtn').hasClass('active')){
			$('.mainPage .sliderWrap .left').slick('slickPlay');
		}else if(!$('.controlBtn').hasClass('active')){
            $('.mainPage .sliderWrap .left').slick('slickPause');
        }
    });
    // 재생/정지 버튼 컨트롤
      

}

function langBtn(){
    $('.header_pc .rightBox .langBox button').click(function(){
        $(this).toggleClass('active');
    })
}
function mainPopUp(){
    $('.mainPopUp .btnBox button').click(function(){
        $(this).parents('.mainPopUp').removeClass('active');
    })
}


function accordion(){

    $('.accordionBox .titleBox').click(function(){        
        $('.accordionBox .titleBox').removeClass('active');

        if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    })

}


function tabMenu(){

    $('.tabBtnBox a, .tabBtnBox button, .tabBtnWrap .imgBox').click(function(){
        $('.tabBtnBox a, .tabBtnBox button, .tabBtnWrap .imgBox').removeClass('active');
        $(this).addClass('active');
        
        if($('.tabBtn_1').hasClass('active')){
            $(".subPage").attr("id","tab1");
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .content_1').addClass('active');
		}
		if($('.tabBtn_2').hasClass('active')){
            $(".subPage").attr("id","tab2");
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .content_2').addClass('active');
		}
		if($('.tabBtn_3').hasClass('active')){
            $(".subPage").attr("id","tab3");
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .content_3').addClass('active');
		}
		if($('.tabBtn_4').hasClass('active')){
            $(".subPage").attr("id","tab4");
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .content_4').addClass('active');
		}
        if($('.tabBtn_5').hasClass('active')){
            $(".subPage").attr("id","tab5");
			$('.tabContentBox > div').removeClass('active');
			$('.tabContentBox .content_5').addClass('active');
		}
        
    })
}
