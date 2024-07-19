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
$('.tab-content:first-child').show();

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


});