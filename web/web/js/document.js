$(window).load(function() { // makes sure the whole site is loaded
			$("#status").fadeOut(); // will first fade out the loading animation
			$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})
var bgno=2;
var count=8;
$(document).ready(function () {   
	widthHight();
	window.onresize = function(event) { 
		widthHight(); 
	}
  //initialise Stellar.js
	$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});  
	  
    setInterval( "slideSwitch()", 10000 );
	
	$('html, body').animate({scrollTop: $('#home').offset().top}, 0, 'easeInQuad');
	$("body").niceScroll({cursorcolor:"#94c242"}); 
	$('#h_home').click(function () {
		$('html, body').animate({scrollTop: $('#home').offset().top}, 1000, 'easeInQuad'); 
	});
	$('#h_what').click(function () {
		$('html, body').animate({scrollTop: $('#what').offset().top}, 1000, 'easeInQuad'); 
		$('#shop').addClass("fadeInUp"); 
	});
	$('#h_how').click(function () {
		$('.slide-image').css({"height":windowheight+"px"}); 
		$('.slide-image').css({"width":windowwidth+"px"}); 
		$('.slide-images').css({"height":windowheight+"px"}); 
		$('.slide-images').css({"width":windowwidth+"px"}); 
		$('html, body').animate({scrollTop: $('#how').offset().top}, 1000, 'easeInQuad');
	});
	$('#h_download').click(function () {
		$('html, body').animate({scrollTop: $('#download').offset().top}, 1000, 'easeInQuad');  
	});
	$('#ribbon').click(function () {
		$('html, body').animate({scrollTop: $('#download').offset().top}, 1000, 'easeInQuad');  
	}); 
	$('#h_team').click(function () { 
		$('html, body').animate({scrollTop: $('#team').offset().top}, 1000, 'easeInQuad'); 
	}); 
	$('#h_contact').click(function () { 
		$('html, body').animate({scrollTop: $('#contact_text').offset().top}, 1000, 'easeInQuad'); 
	}); 
	$('#faq1').click(function () { 
		 window.open("faq/", '_blank');
	});
	$('#terms').click(function () { 
		 window.open("terms/", '_blank');
	});
	$('#policy').click(function () { 
		 window.open("policy/", '_blank');
	});
	$('#twitter').click(function () { 
		 window.open("http://www.twitter.com/shopulses", '_blank');
	});
	$('#facebook').click(function () { 
		 window.open("http://facebook.com/shopulses", '_blank');
	});
	$('#linked_in').click(function () { 
		 window.open("http://facebook.com/shopulses", '_blank');
	});
	$('#face_app').click(function () { 
		 window.open("https://apps.facebook.com/shopulses", '_blank');
	});
	$('#monkey_app').click(function () { 
		 window.open("https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/", '_blank');
	});
	$('#userscripts1').click(function () { 
		 window.open("https://userscripts.org/scripts/show/161978", '_blank');
	});
	$('#userscripts2').click(function () { 
		 window.open("https://userscripts.org/scripts/show/161978", '_blank');
	});
	
	$('#ribbon_button').click(function () {
		var val=$(this).html();
		if(val=="Download"){
			$('#ribbon').animate({"top":"-5px"}); 
			$(this).css({"text-decoration":"none"});
			$(this).html("Close");
		}
		else{
			$('#ribbon').animate({"top":"-80px"}); 
			$(this).css({"text-decoration":"blink"});
			$(this).html("Download");
		}
	});   
	window.onresize = function(event) {
		widthHight()
	} 
	/*$("#slider").easySlider({
		auto: true,
		continuous: true 
	});  */
	$('#home_video_button').waypoint(function (direction) {
		if (direction === "down") {
		$('#h_home').removeClass("header_label_select");
		$('#h_what').addClass("header_label_select");
		$('#h_how').removeClass("header_label_select");
		$('#h_download').removeClass("header_label_select");
		$('#h_team').removeClass("header_label_select"); 
 		$('#h_contact').removeClass("header_label_select"); 
		prevPage = '#home';
		currentPage = '#what';
		nextPage = '#how'; 
		} else { 
			$('#h_home').addClass("header_label_select");
			$('#h_what').removeClass("header_label_select");
			$('#h_how').removeClass("header_label_select");
			$('#h_download').removeClass("header_label_select");
			$('#h_team').removeClass("header_label_select");
 			$('#h_contact').removeClass("header_label_select"); 
			nextPage = '#what';
			prevPage = '#home';
			currentPage = '#home';
		}
	});
	$('#waypoint_for_what').waypoint(function (direction) {
		if (direction === "down") {
		$('#h_home').removeClass("header_label_select");
		$('#h_what').removeClass("header_label_select");
		$('#h_how').addClass("header_label_select");
		$('#h_download').removeClass("header_label_select");
		$('#h_team').removeClass("header_label_select");
 		$('#h_contact').removeClass("header_label_select");  
		prevPage = '#what';
		currentPage = '#how';
		nextPage = '#download'; 
		} else { 
			$('#h_home').removeClass("header_label_select");
			$('#h_what').addClass("header_label_select");
			$('#h_how').removeClass("header_label_select");
			$('#h_download').removeClass("header_label_select");
			$('#h_team').removeClass("header_label_select");
 			$('#h_contact').removeClass("header_label_select"); 
			prevPage = '#home';
			currentPage = '#what';
			nextPage = '#how';
		}
	});
	$('#waypoint_for_how').waypoint(function (direction) {
		if (direction === "down") {
		$('#h_home').removeClass("header_label_select");
		$('#h_what').removeClass("header_label_select");
		$('#h_how').removeClass("header_label_select");
		$('#h_download').addClass("header_label_select");
		$('#h_team').removeClass("header_label_select");
 		$('#h_contact').removeClass("header_label_select"); 
		prevPage = '#how';
		currentPage = '#download';
		nextPage = '#contact_text'; 
		} else { 
			$('#h_home').removeClass("header_label_select");
			$('#h_what').removeClass("header_label_select");
			$('#h_how').addClass("header_label_select");
			$('#h_team').removeClass("header_label_select");
			$('#h_download').removeClass("header_label_select");
 			$('#h_contact').removeClass("header_label_select"); 
			prevPage = '#what';
			currentPage = '#how';
			nextPage = '#download';
		}
	});
	$('#waypoint_for_download').waypoint(function (direction) {
		if (direction === "down") {
		$('#h_home').removeClass("header_label_select");
		$('#h_what').removeClass("header_label_select");
		$('#h_how').removeClass("header_label_select");
		$('#h_team').addClass("header_label_select");
		$('#h_download').removeClass("header_label_select");
 		$('#h_contact').removeClass("header_label_select"); 
		prevPage = '#download';
		currentPage = '#team';
		nextPage = '#contact_text'; 
		} else { 
			$('#h_home').removeClass("header_label_select");
			$('#h_what').removeClass("header_label_select");
			$('#h_how').removeClass("header_label_select");
			$('#h_team').removeClass("header_label_select");
			$('#h_download').addClass("header_label_select");
 			$('#h_contact').removeClass("header_label_select"); 
			prevPage = '#how';
			currentPage = '#download';
			nextPage = '#team'; 
		}
	}); 
	$('#waypoint_for_team').waypoint(function (direction) {
		if (direction === "down") {
		$('#h_home').removeClass("header_label_select");
		$('#h_what').removeClass("header_label_select");
		$('#h_how').removeClass("header_label_select");
		$('#h_download').removeClass("header_label_select");
		$('#h_team').removeClass("header_label_select");
 		$('#h_contact').addClass("header_label_select"); 
		prevPage = '#team';
		currentPage = '#contact_text';
		nextPage = '#contact_text'; 
		} else { 
			$('#h_home').removeClass("header_label_select");
			$('#h_what').removeClass("header_label_select");
			$('#h_how').removeClass("header_label_select");
			$('#h_team').addClass("header_label_select");
 			$('#h_contact').removeClass("header_label_select"); 
			prevPage = '#download';
			currentPage = '#team';
			nextPage = '#contact_text'; 
		}
	}); 
 	var slider = new Slider($('#slider'));
	slider.setPhotos([ { "src" : "css/images/how_default_bg.jpg"}, { "src" : "css/images/how_browse.jpg"}, { "src" : "css/images/how_select.jpg" }, { "src" : "css/images/how_shop.jpg" }, { "src" : "css/images/how_eran3.jpg" }, { "src" : "css/images/how_share.jpg" } ]);
	slider.setSize(windowwidth, windowheight);
	slider.setTheme('theme-dark'); slider.setTransition('transition-rotatezoomin'); 
  	 
});  