<template>
  <div class="thumb-example">
    <!-- swiper1 -->
    <swiper
      class="swiper gallery-top"
      :options="swiperOptionTop"
      ref="swiperTop"
    >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
      <div
        class="swiper-button-next swiper-button-white"
        slot="button-next"
      ></div>
      <div
        class="swiper-button-prev swiper-button-white"
        slot="button-prev"
      ></div>
    </swiper>
    <!-- swiper2 Thumbs -->
    <swiper
      class="swiper gallery-thumbs"
      :options="swiperOptionThumbs"
      ref="swiperThumbs"
    >
      <swiper-slide class="slide-1"></swiper-slide>
      <swiper-slide class="slide-2"></swiper-slide>
      <swiper-slide class="slide-3"></swiper-slide>
      <swiper-slide class="slide-4"></swiper-slide>
      <swiper-slide class="slide-5"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";
// import "swiper/swiper-bundle.css";
import "swiper/dist/css/swiper.css";

export default {
  name: "swiper-example-thumbs-gallery",
  title: "Thumbs gallery with Two-way control",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
        // observer: true, //修改swiper自己或子元素时，自动初始化swiper
        // observeParents: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped>
.thumb-example {
  height: 480px;
  background-color: pink;
}

.swiper .swiper-slide {
  background-size: cover;
  background-position: center;
}
.swiper .swiper-slide.slide-1 {
  background-image: url("../../assets/logo.png");
}
.swiper .swiper-slide.slide-2 {
  background-image: url("../../assets/logo.png");
}
.swiper .swiper-slide.slide-3 {
  background-image: url("../../assets/logo.png");
}
.swiper .swiper-slide.slide-4 {
  background-image: url("../../assets/logo.png");
}
.swiper .swiper-slide.slide-5 {
  background-image: url("../../assets/logo.png");
}
.swiper.gallery-top {
  height: 80%;
  width: 100%;
}
.swiper.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.swiper.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.swiper.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>
