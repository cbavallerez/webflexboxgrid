$(document).ready(function(){

	$( "li" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500 );
});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){
			$('nav').height("50px");
			$('nav').addClass('nav2');
			$('.logo').height("50px");
			$('nav li').addClass('li2');







		} else {
			$('nav').height("150px");
			$('nav').removeClass('nav2');
			$('.logo').height("100%");
			$('nav li').removeClass('li2');





		}
	});

});
