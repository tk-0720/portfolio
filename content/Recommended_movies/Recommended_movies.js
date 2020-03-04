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
/* タイピング風表示　ここまで */
function typing(str = ""){
    let buf = document.getElementById("typing").innerHTML; //書き込み済みの文字を要素から取得
    let writed = buf.length; //書き込み済みの文字数を取得
    let write = "";
    if(writed < str.length){
        write = str.charAt(writed); //1文字だけ取得する
    }else{
        //buf = ""; //今回は何度も繰り返すために内容を消去します
    }
    document.getElementById("typing").innerHTML = buf + write; //1文字だけ追加していく
}

const str = document.getElementById("typing").innerHTML; //書き込む文字を要素から取得
const delay = 200 //1文字が表示される時間

document.getElementById("typing").innerHTML = "";
window.setInterval(function(){typing(str);}, delay);
/* タイピング風表示　ここまで */