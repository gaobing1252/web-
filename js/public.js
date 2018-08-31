
function home(type) {
	if(type == 1) {
		window.location.href = '../home/home.html';
	} else if(type == 2) {
		window.location.href = '../video/video.html';
	} else if(type == 3) {
		window.location.href = '../mistiming/mistiming.html';
	} else if(type == 4) {
		window.location.href = '../easyLife/easyLife.html';
	} else {
		window.location.href = '../personal/personal.html';
	}

}
$(function(){
	$('body').css('background', '#FFFFFF');
	$("#tabbar").html($("#tabbar").html()+"<ul class='uul'>"
				+"<li>"
					+"<a href='#' onclick='home(1)'><img src='../images/1.png' id='homes'/><br />首页</a>"
				+"</li>"
				+"<li>"
					+"<a href='#' onclick='home(2)'><img src='../images/2.png' id='video'/><br />兼职</a>"
				+"</li>"
				+"<li>"
					+"<a href='#' onclick='home(3)'><img src='../images/3.png' id='mistiming'/><br />优惠</a>"
				+"</li>"
				+"<li>"
					+"<a href='#' onclick='home(4)'><img src='../images/4.png' id='easyLife'/><br />美食</a>"
				+"</li>"
				+"<li>"
					+"<a href='#' onclick='home(5)'><img src='../images/5.png' id='personal'/><br />我的</a>"
				+"</li>"
			+"</ul>");
			
})
