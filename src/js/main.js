$(document).ready(function() {

	// block-header authorization/user-profile toggle

	var openAuthForm = $('.auth-btn-js');	
	var authForm = $('.authorization-js');
	var userProfile = $('.profile-js');

	$(openAuthForm).on('click', function(e) {
		
		e.preventDefault();
		$(openAuthForm).toggleClass('active');
		if ( openAuthForm.hasClass('logged') ) {
			userProfile.slideToggle();
		} else {
			authForm.slideToggle();
		}

	});

		// block-footer menu slideToggle

		var footerMenuToggle = $('.footer-menu .toggle-js');
		var footerSubMenu = $('.footer-menu .footer-submenu-js');
		$(footerMenuToggle).on('click', function(e) {
			footerSubMenu.slideToggle();
			footerMenuToggle.toggleClass('active');
		});

	// jQuery UI Range slider https://jqueryui.com/slider

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 99,
		values: [ 0, 99 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.values[ 0 ] );
			$( "#amount-second" ).val( ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount-second" ).val( $( "#slider-range" ).slider( "values", 1 ) );

	$("input#amount").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount-second").val();
			if(parseInt(value1) > parseInt(value2)) {
				value1 = value2;
				$("input#amount").val(value1);
			}
			$("#slider-range").slider("values",0,value1);
	})

		$("input#amount-second").change(function(){
		var value1=$("input#amount").val();
		var value2=$("input#amount-second").val();
			if(parseInt(value1) > parseInt(value2)) {
				value2 = value1;
				$("input#amount-second").val(value2);
			}
			$("#slider-range").slider("values",1,value2);
	})

	$("input#amount ,input#amount-second").keypress(function(event){
		var key, keyChar;

		if (!event) var event = window.event;
		if (event.keyCode) key = event.keyCode;
		else if (event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;

		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar)) return false;


	});



});