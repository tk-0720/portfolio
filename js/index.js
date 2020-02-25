/* フェードイン */
$(function() {
// class'showUp'をdiv要素に追加
  $('.fadeInUp').addClass('showUp');
});

$(function() {
// class'showUp'をdiv要素に追加
  $('.fadeInRight').addClass('showUp');
});
/* フェードイン　ここまで */
/* スクロールスライドフェードイン */
const obj = $(".scroll-animation-obj");
const hopIn = $(".scroll-animation-hop");
const leftIn = $(".scroll-animation-left");
const rightIn = $(".scroll-animation-right");
$(window).on('scroll',function(){
  obj.each(function(){
    const objPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowH = $(window).height();
    if(scroll > objPos - windowH){
      $(this).css({
        'opacity': '1'
      });
    } else {
      $(this).css({
        'opacity': '0'
      });
    }
  });
  hopIn.each(function(){
    const objPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowH = $(window).height();
    if(scroll > objPos - windowH){
      $(this).css({
        'transform': 'translate(0,0)'
      });
    } else {
      $(this).css({
        'transform': 'translate(0,60px)'
      });
    }
  });
  leftIn.each(function(){
    const objPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowH = $(window).height();
    if(scroll > objPos - windowH){
      $(this).css({
        'transform': 'translate(0,0)'
      });
    } else {
      $(this).css({
        'transform': 'translate(-120px,0)'
      });
    }
  });
  rightIn.each(function(){
    const objPos = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowH = $(window).height();
    if(scroll > objPos - windowH){
      $(this).css({
        'transform': 'translate(0,0)'
      });
    } else {
      $(this).css({
        'transform': 'translate(120px,0)'
      });
    }
  });
});
/* スクロールスライドフェードイン　ここまで */
/* 背景パララックス */
(function ($) {
	'use strict';
    let scrollPosi = 0;
	$(window).scroll(function () {
		scrollPosi = $(document).scrollTop();
 $('.background_all').stop(true, true).animate({
			'background-position-y': -scrollPosi / 3 + 'px'
		}, 100);
	}); 
})(jQuery);
/* 背景パララックス　ここまで */