//main
/*$(document).ready(function(){
    $(window).resize(function(){
        var deviceHeight = $(window).height();
        var minHeight = 568;
        var timeHeight = 80;
        
        if(deviceHeight >= minHeight){
            $('main').height(deviceHeight - timeHeight);
        }else{
            $('main').height(minHeight - timeHeight);
        }
    });*/
    
    $(window).trigger('resize');
    
    //swiper
    var swiper = new Swiper('main .swiper-container', {
        effect: 'fade',
        navigation: {
            nextEl: 'main .swiper-button-next',
            prevEl: 'main .swiper-button-prev',
        },
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            init: function(){
                $('main .progress .bar').addClass('active');
            },
            slideChangeTransitionStart: function(){
                $('main .progress .bar').removeClass('active');
            },
            slideChangeTransitionEnd: function(){
                $('main .progress .bar').addClass('active');
            },
        },
    });
});

//promotion
$(document).ready(function(){
    var swiper = new Swiper('#promotion .swiper-container', {
        loop: true,
        slidesPerView: 1.4,
        spaceBetween: 10,
        pagination: {
            el: '#promotion .swiper-pagination',
            clickable: true,
        },
        on: {
            slideNextTransitionStart: function(){
                $('#promotion .swiper-pagination-bullet-active').css('animation','btnRight 0.3s');
            },
            slidePrevTransitionStart: function(){
                $('#promotion .swiper-pagination-bullet-active').css('animation','btnLeft 0.3s');
            },
        },
    });
});

//room
$(document).ready(function(){
    var swiper = new Swiper('#room .swiper-container', {
        loop: true,
        pagination: {
            el: '#room .swiper-pagination',
            clickable: true,
        },
    });
});

//facility
$(document).ready(function(){
    var swiper = new Swiper('#facility .swiper-container', {
        loop: true,
        pagination: {
            el: '#facility .swiper-pagination',
            clickable: true,
        },
    });
});


//notice
$(document).ready(function(){
    var list = '#notice .list';
    var up = '#notice .upBtn';
    var down = '#notice .downBtn';
    var time = 3000;
    var speed = 'fast';
    var h = $(list).find('li').height();
    
    $(list).find('li a').fadeOut(0);
    $(list).find('li:first a').fadeIn(0);
    
    setInterval(function(){
        $(list).find('li a').fadeIn(0);
        
        $(list).animate({
            top: '-=' + h
        },speed,function(){
            $(this).find('li:first').appendTo($(this));
            $(this).css('top',0);
            $(list).find('li a').fadeOut(0);
            $(list).find('li:first a').fadeIn(0);
        });
    },time);
    
    $(up).click(function(){
        $(list).find('li a').fadeIn(0);
        $(list).animate({
            top: '-=' + h
        },speed,function(){
            $(this).find('li:first').appendTo($(this));
            $(this).css('top',0);
            $(list).find('li a').fadeOut(0);
            $(list).find('li:first a').fadeIn(0);
        });
    });
        
    $(down).click(function(){
        $(list).find('li a').fadeIn(0);
        $(list).animate({
            top: '-=' + h
        },speed,function(){
            $(this).find('li:first').appendTo($(this));
            $(this).css('top',0);
            $(list).find('li a').fadeOut(0);
            $(list).find('li:first a').fadeIn(0);
        });
    });
});