//popup
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
	   var todayDate = new Date();
	   todayDate.setDate( todayDate.getDate() + expiredays );
	   document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
	};
    
    $('.tClose').click(function(){ 
        setCookie('maindiv','done',1);
		$('.popupWrap').slideUp(0);
        $('html, body').css('overflow','visible');
    });	
    $('.eClose').click(function(){
        $('.popupWrap').slideUp(0);
        $('html,body').css('overflow','visible');
    });
    
	cookiedata = document.cookie;
	if(cookiedata.indexOf('maindiv=done') < 0 ){
		$('.popupWrap').css('display','block');
	}else{                        
		$('.popupWrap').css('display','none');
        $('html, body').css('overflow','visible');        
	}
});