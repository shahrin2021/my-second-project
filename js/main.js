$(document).ready(function(){

       	$("#testimonial").owlCarousel({
		items: 1,
		margin: 20,
		loop: true,
		mouseDrag: false,
		nav: true,
		navText: ['<', '>'],
		responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:1
	        },
	        991:{
	            items:1
	        },
	        1199:{
	        	items:1
	        }
	    }
	});

});       	