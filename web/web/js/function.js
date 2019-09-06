function cir_One(){   
	$('html, body').animate({scrollTop: $('#how').offset().top}, 0, 'easeInQuad');
 	$('#cir1').removeClass("cir_browse").addClass("cir_browse_onclick");
	$('#cir2').removeClass("cir_select_onclick").addClass("cir_select");
	$('#cir3').removeClass("cir_shop_onclick").addClass("cir_shop");
	$('#cir4').removeClass("cir_eran_onclick").addClass("cir_eran");
	$('#cir5').removeClass("cir_share_onclick").addClass("cir_share"); 
	$('#cir_browse_tooltip').css({"opacity":"1","top":"115px"});
	$('#cir_select_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_shop_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_eran_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_share_tooltip').css({"opacity":"0","top":"300px"});
	$('#how_video_butt').hide();
	$('#how_sub_header').show();
	$('#cir_browse_header').show();
	$('#cir_select_header').hide();
	$('#cir_shop_header').hide();
	$('#cir_eran_header').hide();
	$('#cir_share_header').hide();
	document.getElementById('how_h1_header').innerHTML="";  
 }
 function cir_Two(){
	$('html, body').animate({scrollTop: $('#how').offset().top}, 0, 'easeInQuad');
 	$('#cir2').removeClass("cir_select").addClass("cir_select_onclick");
	$('#cir1').removeClass("cir_browse_onclick").addClass("cir_browse");
	$('#cir3').removeClass("cir_shop_onclick").addClass("cir_shop");
	$('#cir4').removeClass("cir_eran_onclick").addClass("cir_eran");
	$('#cir5').removeClass("cir_share_onclick").addClass("cir_share"); 
	$('#cir_select_tooltip').css({"opacity":"1","top":"115px"});
	$('#cir_browse_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_shop_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_eran_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_share_tooltip').css({"opacity":"0","top":"300px"});
	$('#how_video_butt').hide();
	$('#how_sub_header').show();
	$('#cir_browse_header').hide();
	$('#cir_select_header').show();
	$('#cir_shop_header').hide();
	$('#cir_eran_header').hide();
	$('#cir_share_header').hide(); 
	document.getElementById('how_h1_header').innerHTML="";
 }
 function cir_Three(){
	$('html, body').animate({scrollTop: $('#how').offset().top}, 0, 'easeInQuad');
 	$('#cir3').removeClass("cir_shop").addClass("cir_shop_onclick");
	$('#cir1').removeClass("cir_browse_onclick").addClass("cir_browse");
	$('#cir2').removeClass("cir_select_onclick").addClass("cir_select");
	$('#cir4').removeClass("cir_eran_onclick").addClass("cir_eran");
	$('#cir5').removeClass("cir_share_onclick").addClass("cir_share");
	$('#cir_shop_tooltip').css({"opacity":"1","top":"115px"});
	$('#cir_browse_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_select_tooltip').css({"opacity":"0","top":"300px"}); 
	$('#cir_eran_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_share_tooltip').css({"opacity":"0","top":"300px"});
	$('#how_video_butt').hide();
	$('#how_sub_header').show();
	$('#cir_browse_header').hide();
	$('#cir_select_header').hide();
	$('#cir_shop_header').show();
	$('#cir_eran_header').hide();
	$('#cir_share_header').hide(); 
	document.getElementById('how_h1_header').innerHTML="";
 }
 function cir_Four(){ 
  	$('html, body').animate({scrollTop: $('#how').offset().top}, 0, 'easeInQuad'); 
 	$('#cir4').removeClass("cir_eran").addClass("cir_eran_onclick");
	$('#cir1').removeClass("cir_browse_onclick").addClass("cir_browse");
	$('#cir2').removeClass("cir_select_onclick").addClass("cir_select");
	$('#cir3').removeClass("cir_shop_onclick").addClass("cir_shop");
	$('#cir5').removeClass("cir_share_onclick").addClass("cir_share");
	$('#cir_eran_tooltip').css({"opacity":"1","top":"115px"});
	$('#cir_browse_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_select_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_shop_tooltip').css({"opacity":"0","top":"300px"}); 
	$('#cir_share_tooltip').css({"opacity":"0","top":"300px"});
	$('#how_video_butt').hide();
	$('#how_sub_header').show();
	$('#cir_browse_header').hide();
	$('#cir_select_header').hide();
	$('#cir_shop_header').hide();
	$('#cir_eran_header').show();
	$('#cir_share_header').hide(); 
	document.getElementById('how_h1_header').innerHTML="";
 }
 function cir_Five(){ 
 	$('html, body').animate({scrollTop: $('#how').offset().top}, 0, 'easeInQuad');
 	$('#cir5').removeClass("cir_share").addClass("cir_share_onclick");
	$('#cir1').removeClass("cir_browse_onclick").addClass("cir_browse"); 
	$('#cir2').removeClass("cir_select_onclick").addClass("cir_select");
	$('#cir3').removeClass("cir_shop_onclick").addClass("cir_shop");
	$('#cir4').removeClass("cir_eran_onclick").addClass("cir_eran");
	$('#cir_share_tooltip').css({"opacity":"1","top":"115px"});
	$('#cir_browse_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_select_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_shop_tooltip').css({"opacity":"0","top":"300px"});
	$('#cir_eran_tooltip').css({"opacity":"0","top":"300px"});
	$('#how_video_butt').hide();
	$('#how_sub_header').show();
	$('#cir_browse_header').hide();
	$('#cir_select_header').hide();
	$('#cir_shop_header').hide();
	$('#cir_eran_header').hide();
	$('#cir_share_header').show(); 
	document.getElementById('how_h1_header').innerHTML="";
 } 
 function widthHight(){
	 if(navigator.appName == "Netscape") 
    	{  
    		windowwidth = window.innerWidth;
			windowheight = window.innerHeight;
    	} 
	else if(navigator.appName == "Microsoft Internet Explorer") 
    	{   
    		windowwidth = document.body.clientWidth;
			windowheight = window.innerHeight;
    	}
 		how_content_height=windowheight-200; 
		windowheight=windowheight+100;
		/*$('#header').css({"width":windowwidth+"px"});*/
 		$('#home').css({"height":windowheight+"px"});  
		$('#home_content').css({"height":windowheight+"px"});
   		$('#what').css({"height":windowheight+"px"});
		$('#shop').css({"height":windowheight+"px"});
		$('#like').css({"height":windowheight+"px"});
		$('#share').css({"height":windowheight+"px"});
		$('#donate').css({"height":windowheight+"px"});
		$('#all_img').css({"height":windowheight+"px"});
		$('#shop').css({"height":windowheight+"px"});
		$('#how').css({"height":windowheight+"px"});
		$('#download').css({"height":windowheight+"px"});
		$('#how').css({"background-size":windowwidth+"px"+ windowheight+"px" });
		$('.slide-image').css({"height":windowheight+"px"}); 
		$('.slide-image').css({"width":windowwidth+"px"}); 
		$('.slide-images').css({"height":windowheight+"px"}); 
		$('.slide-images').css({"width":windowwidth+"px"}); 
		$('#how_content').css({"height":how_content_height+"px"});
		$('#how_content').css({"margin-top":"-"+windowheight+"px"});
		$('#team').css({"height":windowheight+"px"});
		$('#team_content').css({"height":windowheight+"px"});
		$('#contact').css({"height":windowheight+"px"}); 
		
		//slider.setSize(windowwidth, windowheight);
 }  
 function video()
	{ 
		$('html, body').animate({scrollTop: $('#home').offset().top}, 0, 'easeInQuad');
		$("body").getNiceScroll().hide(); 
		var d = new Date();
		var n = d.getMilliseconds(); 
		TINY.box.show("video/index.html?tr="+n,1,650,400,1);
		$("#home_video_button").hide(); 
	} 
function slideSwitch() {
   if(bgno==count){
		 bgno=1;
	 }
 	 $('#home').css({opacity: 0.50}).removeClass().addClass("bg"+bgno).animate({opacity: 1.0}, 800);
	 $('#home_text_pos').css({opacity: 0.50}).removeClass().addClass("bgtext"+bgno).animate({opacity: 1.0}, 800);
 	 bgno++; 
}
 // Google analytics start
 /* var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38548357-2']);
  _gaq.push(['_setDomainName', 'shopulses.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })(); */
 // Google analytics end