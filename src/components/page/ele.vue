<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in imgs" :key="item.id">
      <img :src="item.img" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          img: require("../../assets/md_img/11.jpg"),
          id: '111'
        },
        {
          img: require("../../assets/md_img/22.jpg"),
          id: '222'
        }
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item img {
    width: 100%;
    height: 300px;
  }
</style>