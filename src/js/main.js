$(document).ready(function() {

	// block-header profile/auth toggle >>>

	var openAuthForm = $('.auth-btn-js');	
	var authForm = $('.authorization-js');
	var userProfile = $('.profile-js');

	openAuthForm.on('click', function(e) {
		openHeaderMenu.removeClass('active');
		headerMenu.hide();
		e.preventDefault();
		openAuthForm.toggleClass('active');
		if ( openAuthForm.hasClass('logged') ) {
			userProfile.slideToggle();
		} else {
			authForm.slideToggle();
		}
	});

	// block-header menu toggle >>>

	var openHeaderMenu = $('.burger-js');	
	var headerMenu = $('.nav-js');

	openHeaderMenu.on('click', function(e) {
		openAuthForm.removeClass('active');
		authForm.hide();
		userProfile.hide();
		e.preventDefault();
		openHeaderMenu.toggleClass('active');
		headerMenu.slideToggle();
	});

	// block-header menu slideToggle >>>

	var headerMenuToggle = $('.header-menu .toggle-js');
	var headerSubMenu = $('.header-menu .header-submenu-js');

	headerMenuToggle.on('click', function(e) {
		headerSubMenu.slideToggle();
		headerMenuToggle.toggleClass('active');
	});

	// block-footer menu slideToggle >>>
	var footerMenuToggle = $('.footer-menu .toggle-js');
	var footerSubMenu = $('.footer-menu .footer-submenu-js');
	footerMenuToggle.on('click', function(e) {
		footerSubMenu.slideToggle();
		footerMenuToggle.toggleClass('active');
	});

	// block-partners-list slideToggle >>>

	var partnersBtn = $('.partners-toggle-btn-js');
	var partnersInfo = $('.partners-info-js');

	partnersBtn.on("click", function(e) {
		e.preventDefault();

		var $this = $(this);

		if( !$(this).hasClass("active") ) {
			$(this).text("Скрыть");
			partnersInfo.slideUp();
			partnersBtn.removeClass("active");
		} else {
			$(this).text("Показать");
		}

		$(this).toggleClass("active");
		partnersInfo.slideToggle();

	});

	// jQuery UI Range slider https://jqueryui.com/slider >>>
	// block-dating-search-form
	$( "#slider-range-age" ).slider({
		range: true,
		min: 0,
		max: 99,
		values: [ 0, 99 ],
		slide: function( event, ui ) {
			$( "#amount-age" ).val( ui.values[ 0 ] );
			$( "#amount-second-age" ).val( ui.values[ 1 ] );
		}
	});
	$( "#amount-age" ).val( $( "#slider-range-age" ).slider( "values", 0 ) );
	$( "#amount-second-age" ).val( $( "#slider-range-age" ).slider( "values", 1 ) );

	$("input#amount-age").change(function(){
		var value1=$("input#amount-age").val();
		var value2=$("input#amount-second-age").val();
			if(parseInt(value1) > parseInt(value2)) {
				value1 = value2;
				$("input#amount-age").val(value1);
			}
			$("#slider-range-age").slider("values",0,value1);
	})

		$("input#amount-second-age").change(function(){
		var value1=$("input#amount-age").val();
		var value2=$("input#amount-second-age").val();
			if(parseInt(value1) > parseInt(value2)) {
				value2 = value1;
				$("input#amount-second-age").val(value2);
			}
			$("#slider-range-age").slider("values",1,value2);
	})

	$("input#amount-age ,input#amount-second-age").keypress(function(event){
		var key, keyChar;

		if (!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;

		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar)) return false;

	});

// jQuery UI Range slider https://jqueryui.com/slider >>>
// block-dating-search-form
		$( "#slider-range-growth" ).slider({
		range: true,
		min: 100,
		max: 250,
		values: [ 100, 250 ],
		slide: function( event, ui ) {
			$( "#amount-growth" ).val( ui.values[ 0 ] );
			$( "#amount-second-growth" ).val( ui.values[ 1 ] );
		}
	});
	$( "#amount-growth" ).val( $( "#slider-range-growth" ).slider( "values", 0 ) );
	$( "#amount-second-growth" ).val( $( "#slider-range-growth" ).slider( "values", 1 ) );

	$("input#amount-growth").change(function(){
		var value1=$("input#amount-growth").val();
		var value2=$("input#amount-second-growth").val();
			if(parseInt(value1) > parseInt(value2)) {
				value1 = value2;
				$("input#amount-growth").val(value1);
			}
			$("#slider-range-growth").slider("values",0,value1);
	})

		$("input#amount-second-growth").change(function(){
		var value1=$("input#amount-growth").val();
		var value2=$("input#amount-second-growth").val();
			if(parseInt(value1) > parseInt(value2)) {
				value2 = value1;
				$("input#amount-second-growth").val(value2);
			}
			$("#slider-range-growth").slider("values",1,value2);
	})

	$("input#amount-growth ,input#amount-second-growth").keypress(function(event){
		var key, keyChar;

		if (!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;

		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar)) return false;

	});

	// jQuery UI DataPicker https://jqueryui.com/datepicker >>>

	// block-caledarEvents
	$( ".calendarEvents-calendar" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: true
	}, $.datepicker.regional[ "ru" ]);


	// block-events
	var dpickerCont;
	$( "#calendar-show" ).datepicker({
		showOtherMonths: true,
		selectOtherMonths: true
	}, $.datepicker.regional[ "ru" ]);
	$('.show-calendar-js').click(function (e) {
			$('#calendar-show').datepicker("show");
			dpickerCont = $('.events-wrapper').outerWidth();
			$('#ui-datepicker-div').css("width",dpickerCont);
			e.preventDefault();
	});

	// block-datingEdit
	 $( ".bday" ).datepicker();

	// block-addEvent
	$( ".time-begin" ).datepicker();
	$( ".time-end" ).datepicker();

	// slcik slider http://kenwheeler.github.io/slick/ >>>

	// .block-contestTsigunWoman
	$('.contestTsigunWoman-gallery .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.contestTsigunWoman-gallery .custom-prev'),
		nextArrow: $('.contestTsigunWoman-gallery .custom-next'),
		asNavFor: '.slider2'
	});

	$('.contestTsigunWoman-gallery .slider2').slick({
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true
	});

	// block-guideObject
	$('.guideObject-gallery .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.guideObject-gallery .custom-prev'),
		nextArrow: $('.guideObject-gallery .custom-next'),
		asNavFor: '.slider2'
	});

	$('.guideObject-gallery .slider2').slick({
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider',
		focusOnSelect: true
	});

	// block-calendarEvents
	$('.calendarEvents-slider .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.calendarEvents-slider .slide-prev'),
		nextArrow: $('.calendarEvents-slider .slide-next')
	});

	// block-ad
	$('.block-ad .ad-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.block-ad .ad-slider-prev'),
		nextArrow: $('.block-ad .ad-slider-next')
	});

	// block-previews blogs
	$('.previews-blogs .blogs-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.previews-blogs .blogs-slider-prev'),
		nextArrow: $('.previews-blogs .blogs-slider-next')
	});


	// block-previews video
	$('.previews-video .video-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.previews-video .video-slider-prev'),
		nextArrow: $('.previews-video .video-slider-next')
	});

	// block-previews photos
	$('.previews-photos .photos-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.previews-photos .photos-slider-prev'),
		nextArrow: $('.previews-photos .photos-slider-next')
	});

	// block-previews object
	$('.previews-objects .objects-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.previews-objects .objects-slider-prev'),
		nextArrow: $('.previews-objects .objects-slider-next')
	});

	// block-previews news
	$('.previews-news .news-slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.previews-news .news-slider-prev'),
		nextArrow: $('.previews-news .news-slider-next')
	});

	// block-guideObject
	$('.guideObject-similar-object .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.guideObject-similar-object .similar-object-slider-prev'),
		nextArrow: $('.guideObject-similar-object .similar-object-slider-next')
	});

		// block-newsBlogFul
	$('.newsBlogFull-similar-events .slider').slick({
		arrows: true,
		autoplay: true,
		pauseOnHover: true,
		autoplaySpeed: 3000,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.newsBlogFull-similar-events .similar-events-slider-prev'),
		nextArrow: $('.newsBlogFull-similar-events .similar-events-slider-next')
	});


	// block addObject rang
	$('.addObject-rang .rang-item').click(function (e) {
		$(this).toggleClass('active');
	});

	// block-aboutHainanFotoFull http://fancybox.net/ >>>
	$(".gallery-item").fancybox();

});


