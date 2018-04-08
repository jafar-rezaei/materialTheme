$(function(){ $('.carousel.carousel-slider').carousel({full_width: true}); });

  $(document).ready(function () {


    $('.button-collapse').sideNav({
    	menuWidth: 300, // Default is 240
		edge: 'right', // Choose the horizontal origin
		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });

    $('.card').hover(function(){
    		$(this).addClass("z-depth-4");
    	},
    	function(){
    		$(this).removeClass("z-depth-4").addClass("z-depth-1");
    	}
    )
    $('.parallax').parallax();

    $('.slider').slider({full_width: true});

	$('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .6, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function() { /*alert('Ready');*/ }, 
      complete: function() { /*alert('Closed');*/ } 
    });


	$('input.autocomplete').autocomplete({
		data: {
			"اپل": null,
			"مایکروسافت": null,
			"گوگل": 'http://placehold.it/250x250'
		}
	});

    $('select').not('.disabled').material_select();
    $('.materialboxed').materialbox();


	$('#goToContent').on( "click" , ()=> {
		$('html,body').animate({
			scrollTop: $("[name=content]").offset().top
		}, 1200);
		return false;
	});

	var options = [
	{selector: '#staggered-test', offset: 50, callback: function(el) {
	  Materialize.toast("This is our ScrollFire Demo!", 1500 );
	} },
	{selector: '#staggered-test', offset: 205, callback: function(el) {
	  Materialize.toast("Please continue scrolling!", 1500 );
	} },
	{selector: '#staggered-test', offset: 400, callback: function(el) {
	  Materialize.showStaggeredList($(el));
	} },
	{selector: '#image-test', offset: 500, callback: function(el) {
	  Materialize.fadeInImage($(el));
	} }
	];
	Materialize.scrollFire(options);



  }); // end of document ready
