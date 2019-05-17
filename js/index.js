$(function () {
  // 获取当前页面索引（BUG修复）
  // https://www.swiper.com.cn/api/properties/127.html
  Swiper.prototype.getCurrent = function () {
    var index = this.$el
        .find('.swiper-slide')
        .eq(this.activeIndex)
        .data('swiper-slide-index');
    return index
  };

  let mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical', // 垂直切换
    loop: true,
    effect: 'coverflow',
    //initialSlide: 4,
    on: {
      transitionEnd() { // this Swiper实例
        // console.log('fixed', this.getCurrent())
        // console.log('bug', this.activeIndex)
        let idx = this.getCurrent(); // 0 1 2
        // this.$el $('.swiper-container')
        // 当前轮播显示的 是哪个元素 就会有这个类名.swiper-slide-active
        let $slide = $(this.$el.find('.swiper-slide-active')[0]);
        // 如果是第三屏 复用第二屏的样式 page2
        // if (idx === '2'|| idx === '3') {
        //   idx = 1
        // }
        let arr = ['2','3'];
        if(arr.includes(idx)){
          idx = 1;
        }
        // 给当前slide添加动画ID名 其他slide兄弟元素 移除动画ID名
        $slide.attr('id', `page${idx}`).siblings('.swiper-slide').attr('id', '')
      }
    }
  });
});

 let $music = $('#music');
 let $musicIcon = $('.music_icon');
 $musicIcon.on('click',function () {
   if($music[0].paused) {
     $music[0].play();
     $musicIcon.css('animationPlayState' ,'running');
   } else {
     $music[0].pause();
     $musicIcon.css('animationPlayState' ,'paused');
   }
 });