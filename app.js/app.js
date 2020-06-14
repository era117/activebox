$(function () {

// FIXED======================
		let header = $("#header")
		let intro = $(".JSintro")
		let scrollPos = $(window).scrollTop();
		let introH = intro.innerHeight();
		let nav = $("#nav");
		let navToggle = $("#navToggle");
		checkScroll(scrollPos,introH);

		

		$(window).on("scroll resize ", function(){
			introH = intro.innerHeight();
			scrollPos = $(this).scrollTop();
			checkScroll(scrollPos,introH);
		});



		


		function checkScroll(){

			if ( scrollPos > introH ) {
				header.addClass("fixed");
			}

				else {
					header.removeClass("fixed");
				}
		}
	
// SMOOTH SCROLL
  $("[data-scroll]").on("click",function(event){
  	   event.preventDefault();


  	   let blockID = $(this).data('scroll');
  	   
  	   let blockOffset = $(blockID).offset().top;
  

  	   	nav.removeClass("show");

		$("html, body").animate({
			scrollTop:blockOffset - 70
		}, 700)
  })






// NAV TOGGLE =========================



	navToggle.on("click", function(event) {
	event.preventDefault();

	nav.toggleClass("show");

});


	// REVIEWS==============================<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
	let slider = $("#reviewsSlider");

			slider.slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  fade:false,
			  arrows:false,
			  dots:true
			});

})