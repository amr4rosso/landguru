// Carousel function 

// $('.feedback-carousel').bxSlider({
// 	mode: 'horizontal',
// 	controls: true,
// 	pager: true,

// 	minSlides: 2,
// 	maxSlides: 3,
// 	auto: true,
//  });

//!  slide

const slider = $('.feedback-carousel').bxSlider({
	pager: false,
	Controls: false,
	infiniteLoop: true,
	touchEnabled: true,
	hideControlContent: false,
	speed: 1000,
	minSlides: 3,
	maxSlides: 4,
});

$(".prev").click((e) => {
	e.preventDefault();
	slider.goToPrevSlide();
});

$(".next").click((e) => {
	e.preventDefault();
	slider.goToNextSlide();
});


// function for section Spoiler


//? это функция все Слайдеры в одном время

// $('.spoiler-item').on('click', function(){
// 	$(this).toggleClass('active').next('.spoiler-text').slideToggle(800);
// })


//? это функция чтобы открылся только один Слайд !!

$('.spoiler-item').on('click', function(){
	if($('.spoiler-block').hasClass('one')){
		$('.spoiler-item').not($(this)).removeClass('active');
		$('.spoiler-text').not($(this).next()).slideUp(800);
	}

	$(this).toggleClass('active').next().slideToggle(800);

})


// Scroll button 


$(window).on('scroll', function(){
	if($(this).scrollTop() > 700){
		$('#up').fadeIn()
	}
	else{
		$('#up').fadeOut()
	}
})

$('#up').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500)
})


// function for section modal-overlay


$('.modal-overlay').on('click', function(e){
	if($(e.target).closest('.modal').length == 0){
		$(this).fadeOut();
	}
});

$('.close').on('click', function(){
	$(this).parents('.modal-overlay').fadeOut();
})

$('#open-modal').on('click', function(){
	$('.modal-overlay').fadeIn();
})




// $('#menuToggle #toggleCheckbox').change(function(){
// 	if(this.checked){
// 		$('body').css({'overflow': "hidden"})
// 	}
// 	else {
// 		$('body').css({'overflow': "visible"})
// 	}
// })

// $('#up').on('click', function(){
// 	$('html, body').animate({scrollTop: 0}, 500)
// })

// $('#audience_link').on('click', function(e){
// 	e.preventDefault();
// 	document.getElementById('toggleCheckbox').checked = false
// 	$('body').css({'overflow': "visible" })
// 	$('html, body').animate({scrollTop: $('#audience').offset().top})
// })