/* スムーズスクロール部分の記述 */
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
/* スムーズスクロール部分の記述 end */
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
