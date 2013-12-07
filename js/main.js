(function($){
   


$('.obst-tile').click(function(){

	$(this).parent().children().removeClass('is-selected');
	$(this).addClass('is-selected');
	$('.obst-feature').fadeOut();

	var selectedId = $('.is-selected').attr('id');
	var imgLocation = $('#' + selectedId + ' img').attr('src');
	var featureTitle = $('#' + selectedId).find('h3').text();
	var taglineTarget = $('.is-selected').attr('target');


$('.obst-featured-img').attr('src',imgLocation);
$('.obst-desc-headline').text(featureTitle);
$('.obst-desc-tagline').load("http://127.0.0.1:8888/css-off/ajax/"+taglineTarget+".txt");


	$('.obst-feature').fadeIn();




});




   
})(jQuery);