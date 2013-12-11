(function($){
   


/*lazy loading*/

//set all data-atrributes to src & add lazy class

$('img').each(function(){

	var src = $(this).attr('src');
	$(this).attr('src','').attr('data-original',src).addClass('lazy');

});

//call lazyLoad function add fadeIn

$(function() {
    $("img.lazy").lazyload({
        event : "sporty",
        effect : "fadeIn"
    });
});

$(window).bind("load", function() {
    var timeout = setTimeout(function() {
        $("img.lazy").trigger("sporty")
    }, 500);
});

//done lazy load

$('.obst-tile').click(function(){

	$(this).parent().children().removeClass('is-selected');
	$(this).addClass('is-selected');
	$('.obst-feature').fadeOut(200,function(){

	var selectedId = $('.is-selected').attr('id');
	var imgLocation = $('#' + selectedId + ' img').attr('src');
	var featureTitle = $('#' + selectedId).find('h3').text();
	var taglineTarget = $('.is-selected').attr('target');


$('.obst-featured-img').attr('src',imgLocation);
$('.obst-desc-headline').text(featureTitle);
$('.obst-desc-tagline').load("http://127.0.0.1:8888/css-off/ajax/"+taglineTarget+".txt");


	$('.obst-feature').fadeIn(200);


});

});




	$('a[href*=#]').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
    return false;
});



$('.sign-up-form a').hover(function(){
	$(this).find('.dropdown').removeClass('animated slideOutUp').addClass('animated slideInDown');
},function(){
	$(this).find('.dropdown').removeClass('slideInDown').addClass('slideOutUp');
});




         














   
})(jQuery);