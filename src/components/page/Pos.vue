<template>
  <div id="app">
    <div>
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
          <img :src="item.url" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
        <div class="swiper-button-prev" slot="button-prev"></div>  <!-- 箭头左 --> 
        <div class="swiper-button-next" slot="button-next"></div>  <!-- 箭头右 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slide: [
        {
          url: require("../../assets/md_img/11.jpg"),
          id: '11'
        },
        {
          url: require("../../assets/md_img/22.jpg"),
          id: '22'
        },
      ],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 4000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>

<style>
.swiper-slide {
  width: 100%;
  height: 500px;
}

.swiper-slide img{
  width: 100%;
  height: 500px;
}
</style>