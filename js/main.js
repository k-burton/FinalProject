// ############################################################
// ######################## Applied JS ########################
// ############################################################

// Using a Flickity carousel with jQuery
// Initialization for carousel just attaches like any other jQuery method
// It works very similar to how you would define multiple CSS property/value pairs with the .css() method
// Check out the JSON notation for the options

// var waypoint = new Waypoint({
//   element: document.getElementById('#target'),
//   handler: function() {
//     notify('Basic waypoint triggered')
//   }
// });
// var headerWaypoint = new Waypoint({
//   element: document.getElementById('header'),
//   handler: function(direction) {
//     console.log("test22");
//     if (direction === 'down') {
//       $('#stickyheader').removeClass('displaynone');
//       $('#ltk-capability-icon-2').removeClass('active-icon');
//       $('#ltk-capability-icon-3').removeClass('active-icon');
//       $('#ltk-capability-icon-4').removeClass('active-icon');
//     }
//     if (direction === 'up') {
//       $('#ltk-capability-nav').fadeOut();
//       $('#ltk-capability-icon-1').addClass('active-icon');
//       $('#ltk-capability-icon-2').removeClass('active-icon');
//       $('#ltk-capability-icon-3').removeClass('active-icon');
//       $('#ltk-capability-icon-4').removeClass('active-icon');
//     }
//   }
// },
//   offset: 780
// });

var headerWaypoint = new Waypoint({
  element: document.getElementById('target'),
  handler: function(direction) {
    console.log('test')
    if (direction === 'down') {
      // $('.stickyheader').removeClass('displaynone');
      $('#stickyheader').delay(200).fadeIn();
    }
    if (direction === 'up') {
      $('#stickyheader').delay(500).fadeOut();
    }
  }
  // ,
  // offset: 350
});

// click function to scroll to top, smoothly
$(".backtotop").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
// click event scroll to for "Lessons Learned" nav item

$(".choro1").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $(".line1").offset().top}, "slow");
  return false;
});
$(".choro2").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $(".line2").offset().top}, "slow");
  return false;
});
$(".addfeature").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $(".line3").offset().top}, "slow");
  return false;
});
$(".storelocator").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $(".line4").offset().top}, "slow");
  return false;
});
$(".otherlessons").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $(".line5").offset().top}, "slow");
  return false;
});
$(".li3").click(function() {
  console.log("test");
  $("html, body").animate({ scrollTop: $("#target2").offset().top}, "slow");
  return false;
});
// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });

$('.choro1').hover(

               function () {
                  $(this).css({"background-color":"red"});
               },

               function () {
                  $(this).css({"background-color":"blue"});
               }
            );
