///* JQUERY CODES
//-------------------------------------------------*/
//
//$(document).ready(function() {
//
//	$.fn.animateRotate = function(angle, duration, easing, complete) {
//	  var args = $.speed(duration, easing, complete);
//	  var step = args.step;
//	  return this.each(function(i, e) {
//		args.complete = $.proxy(args.complete, e);
//		args.step = function(now) {
//		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
//		  if (step) return step.apply(e, arguments);
//		};
//
//		$({deg: 0}).animate({deg: angle}, args);
//	  });
//	};
//	
//    $("#main-page").css("background-color", "#00BEFF");
//	$("#main-page").css("height", "100vh");
//	$("#main-page").css("width", "100%");
//	$("#main-page").fadeIn();
//	$(".maincontent").fadeIn();
//	
//	$(".portfolio-link").on("click", function() {
//		$(".maincontent").fadeOut();
//		$("#main-page").animate({
//			width: "25px",
//			height: "375px"
//		}, function() {
//			$(this).animateRotate(90);
//		});
//		
//		setTimeout(function() {
//			$("#main-page").fadeOut();		 
//		}, 1500);
//		
//		setTimeout(function() {
//			$("#portfolio").animateRotate(0, 0);
//			$("#portfolio").css("height", "25px");
//			$("#portfolio").css("width", "375px");
//			$("#portfolio").fadeIn();
//			$("#portfolio").animate({
//                backgroundColor: "#001030"
//			}, function() {
//				$(this).animate({
//					height: "100vh"
//				}, function() {
//					$(this).animate({
//						width: "100%"
//					}, function() {
//						$(".portfolio-content").fadeIn(300);
//					});
//				});
//			});
//		}, 800);
//	});
//		
//	$(".home-link").on("click", function() {
//		$(".portfolio-content").fadeOut();
//		$("#portfolio").animate({
//			width: "25px",
//			height: "375px"
//		}, function() {
//			$(this).animateRotate(-90);
//		});
//		
//		setTimeout(function() {
//			$("#portfolio").fadeOut();			
//		}, 1500);
//		
//		setTimeout(function() {
//		$("#main-page").animateRotate(0, 0);
//		$("#main-page").css("height", "25px");
//		$("#main-page").css("width", "375px");
//			$("#main-page").fadeIn();
//			$("#main-page").animate({
//				height: "100vh"
//			}, function() {
//				$(this).animate({
//					width: "100%"
//				}, function() {
//					$(".maincontent").fadeIn(300);
//				});
//			});
//		}, 1400);
//	});
//	
//});
//
function puffIn() {
    const puffIn = document.querySelector('#puffIn')
    puffIn.classList.add('magictime', 'puffIn')
}
setTimeout(puffIn, 020);

function foolishIn() {
    const foolishIn = document.querySelector('#foolishIn')
    foolishIn.classList.add('magictime', 'foolishIn')
}
setTimeout(foolishIn, 050);

function slideRightReturn() {
    const slideRightReturn = document.querySelector('.slideRightReturn')
    slideRightReturn.classList.add('magictime', 'slideRightReturn')
}
setTimeout(slideRightReturn, 100);


