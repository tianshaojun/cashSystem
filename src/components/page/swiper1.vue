<template>
  <div class="HeadRotation">
    <!-- 列表轮播图 -->
    <div class="swiper-container qwe">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
             <img :src="image" alt="图片未加载">
        </div>
        <div class="swiper-slide">
            <img :src="image1" alt="图片未加载">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination paging"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
    name: "HeadRotation",
    data () {
        return {
            image: require("../../assets/md_img/11.jpg"),
            image1: require("../../assets/md_img/22.jpg")
        }
    },

    mounted() {
        new Swiper ('.qwe', {

            loop: true, //循环模式选项
            autoplay: true, //自动循环

            //如果需要分页器
            pagination: {
            el: '.paging',
            },

            //如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            // scrollbar: {
            // el: '.swiper-scrollbar',
            // },
        })

    },

};
</script>

<style scoped>
.banner {
  width: 100%;
  height: 400px;
}
.swiper-slide img {
    width: 100%;
    min-width: 800px;
    height: 400px;
}
</style>