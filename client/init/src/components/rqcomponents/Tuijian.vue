<template>
  <div class="bigbox">
<div class="box">
<div class="tuijian">
  <h1>推荐景点</h1>
  
    <ul>
      <router-link to="#" class="a"><li>温泉</li></router-link>
      <router-link to="#" class="a"><li>赏花</li></router-link>
      <router-link to="#" class="a"><li>儿童乐园</li></router-link>
      <router-link to="#" class="a"><li>博物馆</li></router-link>
      <router-link to="#" class="a"><li>游乐场</li></router-link>
      <router-link to="#" class="a"><li>特色演出</li></router-link>
      <router-link to="#" class="a"><li>更多</li></router-link>
    </ul>

</div>
<div class="cont">

<div class="biaoti">
<span class="bspan" @mouseover="mouseover1">318国道</span>
<span class="bspan" @mouseover="mouseover2">稻城亚丁</span>
<span class="bspan" @mouseover="mouseover3">318川藏线</span>
<span class="bspan" @mouseover="mouseover4">色达</span></div><router-link to="#" class="geng a">更多 ></router-link>
<router-view></router-view>
</div>
</div>
  </div>
</template>

<script>
  export default {
    methods: {
      
    },
  }
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.bigbox{
  width: 100%;
  height: 400px;
  position: relative;
  top: 50px;
}

.box{
  position: relative;
  width: 1000px;
  height: 450px;
  background-color: pink;
  margin: auto;
}
.tuijian{
  display: inline-block;
  width: 280px;
  background-color: rgb(236, 147, 147);
  box-sizing: border-box;
  height: 450px;
}

ul,li{
  list-style: none;
}

h1{
  margin-left: 15px;
  margin-top: 15px;
}

ul{
  display: block;
  background-image: url('../../../public/lightimg/tilbei.jpg');
  background-size: 280px;
  background-repeat: no-repeat;
  height: 363px;
  padding-left: 0;
  margin-left: 15px;
  padding-top: 8px;
  margin: auto;
}

li {
  display: block;
  width: 100px;
  height: 30px;
  background-color:rgba(208, 202, 209, 0.7);
  text-align: center;
  line-height: 30px;
  margin: 18px auto;
  color: rgb(43, 40, 40);
  border-radius: 20px;
  
}
li:hover {
  background-color: #fff;
}
.cont {
  position: absolute;
  display: inline-block;
  width: 600px;
  background-color: #9943;
  height: 450px;
  margin-left:50px ;
}

.biaoti {
  width: 400px;
}

.biaoti span {
  display: inline-block;
  margin: 15px 25px 0 0;
  height: 25px;
  cursor: pointer;
}

.biaoti span:hover {
  text-decoration: underline;
  text-align: center;
  color: rgb(233, 117, 50);
}

.geng{
  position: absolute;
  right: 20px;
  top: 15px;
  color: #666;
}
</style>