 $(document).ready(function(){
     $('.main-manu').slicknav({
         prependTo: '#mobile-manu-wrap',
         allowParentLinks:true
     });
    
	  $(".slider-area").owlCarousel({
		  items:1,
		  nav:false,
		  loop:true,
		  dots:false,
		  autoplay:true,
		  responsive: {
			0: {
			  items: 1
			},
			600: {
			  items: 1
			},
			1000: {
			  items: 1
			}
		  }
	  });

	  $(".potfulio-list").isotope({
    });
    
    $(".filter-project li").on('click', function(){
        $(".filter-project li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".potfulio-list").isotope({
            filter: selector,
            
        });
    });
/*feedback carousel*/
$(".fedback-carousel").owlCarousel({
	items:2,
	margin:30,
	nav:false,
	loop:true,
	dots:true,
	autoplay:true,
	responsive: {
	  0: {
		items: 1
	  },
	  600: {
		items: 2
	  },
	  1000: {
		items: 2
	  }
	}
});
/*logo carousel*/
$(".logo-carousel").owlCarousel({
	items:4,
	margin:40,
	nav:false,
	loop:true,
	dots:false,
	autoplay:true,
	responsive: {
	  0: {
		items: 2
	  },
	  600: {
		items: 4
	  },
	  1000: {
		items: 4
	  }
	}
});
/* counter up*/
$('.count').counterUp({
	delay: 10,
	time: 1000
	  });






  });