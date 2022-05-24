//employment
$(document).ready(function(){
    var btn = '.employment .tabBtn a';
    var content = '.employment .tabContentsWrap > div';
    $(btn).first().addClass('active');
    $(content).first().fadeIn(0); 
    
    $(btn).click(function(){        
        $(btn).removeClass('active'); 
        $(this).addClass('active'); 
        
        var index = $(this).parent().index(); 
        $(content).fadeOut(0); 
        $(content).eq(index).fadeIn(0);
    });
});

//faq
$(document).ready(function(){
    var btn = '.faq dt a';
    var dt = '.faq dt';
    var dd = '.faq dd';
    
    $(btn).click(function(){
        var is = $(this).parent().next().is(':hidden');
        
        if(is){
            $(dd).stop().slideUp(200);
            $(this).parent().next().stop().slideDown(200);
            $(dt).removeClass('active');
            $(this).parent().addClass('active');
        }else{
            $(this).parent().next().stop().slideUp(200,function(){
                $(this).prev().removeClass('active');
            });
        }
    });
});

//map - tabMenu
$(document).ready(function(){
    var btn = '.map .tabBtn a';
    var content = '.map .tabContentsWrap > div';
    $(btn).first().addClass('active');
    $(content).first().fadeIn(0); 
    
    $(btn).click(function(){        
        $(btn).removeClass('active'); 
        $(this).addClass('active'); 
        
        var index = $(this).parent().index(); 
        $(content).fadeOut(0); 
        $(content).eq(index).fadeIn(0);
    });
});

//room, facility
$(document).ready(function(){
    var galleryThumbs = new Swiper('.slideWrap .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3.5,
        freeMode: true,
        loopedSlides: 5, 
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.slideWrap .gallery-top', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, 
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});

