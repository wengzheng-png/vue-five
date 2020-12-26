<template>
  <div class="block"> 
    <div class="lunbo">
    <el-carousel class="lunbobox">
      <el-carousel-item v-for="item in 3" :key="item">
        <h3 class="small">{{txt[item-1]}}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      txt:["川西景区","九寨沟景区","稻城亚丁景区"]
    }
  },
}
</script>

<style>

.small {
  color: aliceblue;
  position: relative;
  left: 30px;
  top: 15px;
}
.lunbo{
  width: 100%;
  height: 300px;
  background-color: rgba(86, 113, 185, 0.3);
}

  .lunbobox {
    width: 800px;
    height: 300px;
    margin: auto;
  }

  .el-carousel__item:nth-child(3n+1) {
    background-image: url("../../../public/lightimg/li5.jpg");
    background-size: 800px 300px;
    background-repeat: no-repeat;
  }

  .el-carousel__item:nth-child(3n+2) {
    background-image: url("../../../public/lightimg/li9.jpg");
    background-size: 800px 300px;
    background-repeat: no-repeat;
  }
  
  .el-carousel__item:nth-child(3n+3) {
     background-image: url("../../../public/lightimg/li8.jpg");
    background-size: 800px 300px;
    background-repeat: no-repeat;
  }
 
</style>
