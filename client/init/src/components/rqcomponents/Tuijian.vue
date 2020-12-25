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
  <el-tabs v-model="activeName" @tab-click="change">
    <el-tab-pane  label="318国道" name="first"></el-tab-pane>
    <el-tab-pane  label="稻城亚丁" name="second"></el-tab-pane>
    <el-tab-pane  label="318川藏线" name="third"></el-tab-pane>
    <el-tab-pane  label="色达" name="fourth"></el-tab-pane>
  </el-tabs>
</div>
<router-link to="#" class="geng a">更多 ></router-link>
<component :is="cont" class="comp"></component>
</div>
</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cont:"Con1",
        activeName: 'first',
        }
    },
    methods: {
      change (){
        if(this.activeName == 'first'){
          this.cont1 = 'Con1';
        }if(this.activeName == 'second'){
          this.cont = 'Con2';
        } if(this.activeName == 'first'){
          this.cont = "Con3";
        } if(this.activeName == 'fourth'){
          this.cont = "Con4";
        }
      }
    },
    components:{
    Con1:()=>import("./Con1"),
    Con2:()=>import("./Con2"),
    Con3:()=>import("./Con3"),
    Con4:()=>import("./Con4")
    }
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
  top: 75px;
}

.box{
  position: relative;
  width: 1200px;
  height: 560px;
  background-color: rgba(72, 119, 207, 0.2);
  margin: auto;
}
.tuijian{
  display: inline-block;
  width: 300px;
  box-sizing: border-box;
  height: 560px;

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
  background-size: 280px 560px;
  background-repeat: no-repeat;
  height: 473px;
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
  margin: 30px auto;
  color: rgb(43, 40, 40);
  border-radius: 20px;
  
}
li:hover {
  background-color: #fff;
}
.cont {
  position: absolute;
  display: inline-block;
  width: 860px;
  height: 560px;
  margin-left:30px ;
}

.comp{
height: 510px;
  position: absolute; 
  top: 45px;
  left: 0;
  background-color: #fff;
} 

.biaoti {
  width: 400px;
  margin-left: 10px;
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
}

.geng{
  position: absolute;
  right: 20px;
  top: 15px;
  color: #666;
}
</style>