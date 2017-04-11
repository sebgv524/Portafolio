$(document).ready(function() {
	$("header").css({"height":$(window).height() + "px"});	
	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll= $(window).scrollTop();
		if (scroll >200) {
			if (!flag) {
				$(".navbar").css({"background": "#292525"});
				flag = true;
			}
		}else{
			if (flag) {
				$(".navbar").css({"background-color": "transparent"});
				flag = false;
			}
		}
	});
});
