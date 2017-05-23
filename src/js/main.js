$(document).ready(function() {

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



});