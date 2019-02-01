
var crear = false;
var participar = false;

 window.addEventListener('load', function () {
  vanillacalendar.init();
});

$(document).ready(function(){	
	$(".loader").delay(2000).fadeOut("slow");

	$("#key7").click(function(){
		if (crear == false && participar == true) {
			$(".key8").hide(1000);
			$(".key7").delay(1200).show(1000);
			setTimeout(function() {
   				$('.key10').addClass('fadeIn');
			}, 2000);
			setTimeout(function() {
   				$('.key10').css("visibility", "visible");
			}, 2100);
			setTimeout(function() {
   				$('.key9').removeClass('fadeIn');
			}, 1);
			setTimeout(function() {
   				$('.key9').css("visibility", "hidden");
			}, 100);
			crear = true;
			participar = false;
		}else if (crear == false && participar == false){
			$(".key7").show(1000);
			setTimeout(function() {
   				$('.key10').addClass('fadeIn');
			}, 1100);
			setTimeout(function() {
   				$('.key10').css("visibility", "visible");
			}, 1100);
			crear = true;
		}else{
			$(".key7").hide(1000);
			setTimeout(function() {
   				$('.key10').removeClass('fadeIn');
			}, 1);
			setTimeout(function() {
   				$('.key10').css("visibility", "hidden");
			}, 1);
			crear = false;
		}    	
  	});

  	$("#key8").click(function(){
    	if (participar == false && crear == true) {
			$(".key7").hide(1000);
			$(".key8").delay(1200).show(1000);
			setTimeout(function() {
   				$('.key9').addClass('fadeIn');
			}, 2100);
			setTimeout(function() {
   				$('.key9').css("visibility", "visible");
			}, 2100);
			setTimeout(function() {
   				$('.key10').removeClass('fadeIn');
			}, 1);
			setTimeout(function() {
   				$('.key10').css("visibility", "hidden");
			}, 1);			
			participar = true;
			crear = false;
		}else if (participar == false && crear == false){
			$(".key8").show(1000);
			setTimeout(function() {
   				$('.key9').addClass('fadeIn');
			}, 1100);
			setTimeout(function() {
   				$('.key9').css("visibility", "visible");
			}, 1100);
			participar = true;
		}else{
			$(".key8").hide(1000);
			setTimeout(function() {
   				$('.key9').removeClass('fadeIn');
			}, 1);
			setTimeout(function() {
   				$('.key9').css("visibility", "hidden");
			}, 1);
			participar = false;
		} 
  	});
	
	$(window).scroll(function(){

		if ($(this).scrollTop() > 30) {
			$('.key6').addClass('fadeInUp');
			$('.key6').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 90) {
			$('.colorOp').addClass('selectOp');
			$('.key').addClass('fadeInUp');
			$('.key').css("visibility", "visible");
			$('.key1').addClass('slideInLeft');
			$('.key1').css("visibility", "visible");
			$('.key4').addClass('slideInRight');
			$('.key4').css("visibility", "visible");
			$('.key2').addClass('fadeIn');
			$('.key2').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 320) {
			$('.key3').addClass('fadeInUp');
			$('.key3').css("visibility", "visible");
			$('.key5').addClass('fadeInDown');
			$('.key5').css("visibility", "visible");
		}


		if ($(this).scrollTop() > 80) {
			$('.e1').addClass('slideInRight');
			$('.e1').css("visibility", "visible");
			$('.eve1').addClass('fadeInUp');
			$('.eve1').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 160) {
			$('.e2').addClass('slideInRight');
			$('.e2').css("visibility", "visible");
			$('.eve2').addClass('fadeInUp');
			$('.eve2').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 240) {
			$('.e3').addClass('slideInRight');
			$('.e3').css("visibility", "visible");
			$('.eve3').addClass('fadeInUp');
			$('.eve3').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 320) {
			$('.e4').addClass('slideInRight');
			$('.e4').css("visibility", "visible");
			$('.eve4').addClass('fadeInUp');
			$('.eve4').css("visibility", "visible");
		}

		if ($(this).scrollTop() > 400) {
			$('.e5').addClass('slideInRight');
			$('.e5').css("visibility", "visible");
			$('.eve5').addClass('fadeInUp');
			$('.eve5').css("visibility", "visible");
		}
	})
});
