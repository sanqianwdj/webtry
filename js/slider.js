/*首页广告效果*/
$(function(){
     var len  = $(".sliderpin > li").length;
	 var index = 0;
	 var adTimer;
	 $(".sliderpin li").mouseover(function(){
		index  =   $(".sliderpin li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	
	 //滑入 停止动画，滑出开始动画.
	 $('.slidecontent').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
})
// 通过控制top ，来显示不同的幻灯片
function showImg(index){
        var $rollobject = $(".sliderpin");
        var $rolllist=$rollobject.find("li");
		$(".slider").find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$rolllist.removeClass("on")
			.eq(index).addClass("on");
}