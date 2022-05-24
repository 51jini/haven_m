//panel
$(document).ready(function(){
    var bodyWrap = '.bodyWrap';
    var panelBtn = '.panelBtn';
    var panel = '.panel';
    var panelBg = '.blackBg';
    var mainNav = '.panel .mainNav';
    var subNav = '.panel .subNav';

    $(panelBtn).click(function(){ 
        $(panelBg).stop().fadeIn(100,function(){
            $('html, body').css('overflow','hidden');
        });
        $(panel).addClass('active');
        $(bodyWrap).addClass('active');
    });

    $(panelBg).click(function(){
        $(this).stop().fadeOut(100,function(){
            $('html, body').css('overflow-y','auto');
            $(subNav).stop().slideUp(0);
            $(mainNav).removeClass('active');
        });
        $(panel).removeClass('active');
        $(bodyWrap).removeClass('active');
    });

    $(mainNav).click(function(){
        var is = $(this).next().is(':hidden');
        if(is){ 
            $(subNav).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast');
            $(mainNav).removeClass('active');
            $(this).addClass('active');
        }else{
            $(this).next().stop().slideUp('fast');
            $(this).removeClass('active');
        }
    });
});

//language
$(document).ready(function(){
    var select = '.languageWrap';
    var language = '.languageWrap li'
    $(select).find('.language').click(function(){
        $(this).next().stop().fadeToggle('fast');
    });
    $(select).mouseleave(function(){
        $(this).find('ul').stop().fadeOut('fast');
    });
    $(select).find('li:last a').keydown(function(e){
        if(e.keyCode == 9){
            if(!e.shiftKey){
                $(select).find('.language').trigger('click');
            }
        }
    });
    $(select).find('button').keydown(function(e){
        if(e.keyCode == 9){
            if(e.shiftKey){
                $(this).next().stop().fadeOut('fast');
            }
        }
    });
    $(language).click(function(){
        alert('페이지 준비중입니다');
    });
});
