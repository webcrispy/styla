$(document).ready(function(){
	$('.header-top a').click(function(){
		$('.notification-down').fadeIn()

	});

$('.header-section .search a').click(function(){
	$('.header-hide ').fadeIn()
  $('.search .i').hide()


 

});
$('.header-left-menu').click(function(){
	$('.heder-right-menu').animate({"right":"0"})

});
$('.mex-menu-sub a').click(function(){
	$('.heder-right-menu').animate({"right":"-100%"})

});
// Show the first tab and hide the rest
$('.middle-tab li:first-child').addClass('active');
$('.middle-box .tab-content').hide();
$('.middle-box .tab-content:first-child').show();

// Click function
$('.middle-tab li').click(function(){
  $('.middle-tab li').removeClass('active');
  $(this).addClass('active');
  $('.middle-box .tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


$('.post-tabing li:first-child').addClass('active');
$('.tabing .tab-content').hide();
$('.tabing .tab-content:first-child').show();


// Click function
$('.post-tabing li').click(function(){
  $('.post-tabing li').removeClass('active');
  $(this).addClass('active');
  $('.tabing .tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$('.middle-right a').click(function(){
	$('.post-hide').show()

});
$('.post-btn a').click(function(){
	$('.post-hide').hide()

});
$('.popup-tabing li:first-child').addClass('active');
$('.post-tab .tab-content').hide();
$('.post-tab .tab-content:first-child').show();


// Click function
$('.popup-tabing li').click(function(){
  $('.popup-tabing li').removeClass('active');
  $(this).addClass('active');
  $('.post-tab .tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});

$('.search-hide input[type="text"]').click(function(){
  $('.header-popup,#hide').fadeIn()

});
$('#hide').click(function(){
  $('.header-popup').hide()
  $("#hide").hide()

});

$(document).mouseup(function(e) 
{
    var container = $(".notification-down");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
    }
});


$(".progress").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});




  $('.piechart').easyPieChart({
    scaleColor: "transparent",
    lineWidth: 6,
    lineCap: 'round', //Can be butt
    barColor: '#ffcd35',
    trackColor: "#f2f2f2",
    size: 250,
    rotate: 0,    
    animate: 3000,

    onStep: function(value) {
  this.$el.find('span').text(Math.round(value));
},
onStop: function(value, to) {
  this.$el.find('span').text(Math.round(to));
}
    
  });




// Show the first tab and hide the rest
$('.middle-top .middle-btn li:first-child').addClass('active');
$('.tabcontent').hide();
$('.tabcontent:first').show();

// Click function
$('.middle-top .middle-btn li').click(function(){
  $(' .middle-top .middle-btn li').removeClass('active');
  $(this).addClass('active');
  $('.tabcontent').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});




   


/*$('#flip-btn').click(function(){
  $('.pie-padding').addClass('flipped')

});
$('.close').click(function(){
  $('.pie-padding').removeClass('flipped')

});*/


$('.flip-btn').click(function(){
  $(this).parents('.pie-padding').addClass('flipped')

});
$('.close').click(function(){
  $(this).parents('.pie-padding').removeClass('flipped')

});


$('.middle-bg:first-child .middle-end p').wrap('<div class="my-class"></div>')


  

});
/*$(window).scroll(function(){
  if($(this).scrollTop() > 1){
    $('.header-section').addClass('sticky')

  }
  else{
    $('.header-section').removeClass('sticky')

  }

});
*/

$(document).ready(function(){
     function AddReadMore() {
      //This limit you can set after how much characters you want to show Read More.
      var carLmt = 100;
      // Text to show when text is collapsed
      var readMoreTxt = " ...read more";
      // Text to show when text is expanded
      var readLessTxt = " read less";


      //Traverse all selectors with this class and manupulate HTML part to show Read More
      $(".add-read-more").each(function () {
         if ($(this).find(".first-section").length)
            return;

         var allstr = $(this).text();
         if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='second-section'>" + secdHalf + "</span><span class='read-more'  title='Click to Show More'>" + readMoreTxt + "</span><span class='read-less' title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
         }
      });

      //Read More and Read Less Click Event binding
      $(document).on("click", ".read-more,.read-less", function () {
         $(this).closest(".add-read-more").toggleClass("show-less-content show-more-content");
      });
   }

   AddReadMore();

   $('.sallon-share a').click(function(){
    $('.sullon-popup').show();
    $('body').addClass('background')

   });
   $('.sullon-head a').click(function(){
    $('.sullon-popup').hide()
    $('body').removeClass('background')

   });

  $('.tabing-section ul li').click(function(){
    $('.tabing-section li').removeClass("active");
    $(this).addClass("active");

});
  $('.sullon-top a').click(function(){
    $('.about-popup').show();
    $('body').addClass('about')

   });
   $('.about-head-popup a').click(function(){
    $('.about-popup').hide()
    $('body').removeClass('about')

   });

 

    



});

(function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);

