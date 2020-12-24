<template>
  <div class="bigbox">
       <div class="inbox" v-for="el in arr2" :key="el.pid">
           <img class="img1" :src="el.img1" alt="">
           <img  class="img2" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2389998747,3300817372&fm=26&gp=0.jpg" alt="">
           <h2>{{el.title}}</h2>


           <div class="main">
             <div class="main-left">
               <p>{{el.descrption}}</p>
               <p>{{el.pic1}}</p>

               <img class="imgpic" :src="el.pic2" alt="">
               <img class="imgpic" :src="el.pic3" alt="">
               <img class="imgpic" :src="el.pic4" alt="">
               <img class="imgpic" :src="el.pic5" alt="">
               <img class="imgpic" :src="el.pic6" alt="">
              </div>

              <div class="main-right">
                   <h3>中国著名的景点</h3>
                   <div class="inright">
                       <span>1.九寨沟</span>
                       <p>九寨沟是一个集合了神秘、浪漫的地方，也是国内一生必去的10个地方，这里的湖水晶莹平静，五花海让人无不惊叹，还有参天的古树和野生动物，走在九寨沟中就仿佛步入了人间仙境。</p>
                       <img src="https://img.phb123.com/uploads/allimg/180528/33-1P52QI205.png" alt="">
                   </div>
                  <div class="inright">
                       <span>2.香格里拉</span>
                       <p>　香格里拉的天空号称是全国最美的天空之一，这里的空气十分清新，被称为离天堂最近的地方。浓郁的藏族民族特色也是香格里拉很吸引人的一点，广阔的草坪，神圣的雪山，幽深的峡谷，宁静的湖泊可以让你看到世界之大，忘却一切烦恼。</p>
                       <img src="https://img.phb123.com/uploads/allimg/180528/33-1P52QI206.png" alt="">
                   </div>
                  <div class="inright">
                       <span>3.桂林漓江</span>
                       <p>桂林漓江风景区中有着“桂林山水甲天下”的精华，漓江本身仿佛一条青色的缎带蜿蜒在山谷之中，坐船游江是最好的感受漓江美的方法，你可以看到两侧奇峰倒影，层峦叠嶂，，被人们称作“百里画廊”。</p>
                       <img src="https://img.phb123.com/uploads/allimg/180528/33-1P52QI206-50.png" alt="">
                  </div>
              </div>
            
          </div>
       </div>


       
  </div>  
</template>

<script>
export default {
  data() {
    return {
      arr2:[]
    }
  },
    mounted() {
      // console.log(this.$router.currentRoute.query.aid)
        this.$axios.get("/showask?aid="+this.$router.currentRoute.query.aid).then((res)=>{
        console.log(res.data);
        this.arr2 = res.data
      })
    },
}
</script>

<style scoped lang="scss">
.bigbox {
  width: 100%;
  background-color: aqua;
  height: 200px;
  .img1 {
    width: 100%;
    height: 420px;
  }
  .img2{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    top: 243px;
    left: 215px;

  }
  h2{
    color: white;
    position: absolute;
    top: 363px;
    left: 451px;
  }
  .main {
    width: 1200px;
    height: auto;
    margin: 30px auto;
    // background-color: yellowgreen;
    display: flex;
    justify-content: space-between;
    .main-left{
      width: 70%;
      height: 100%;
      background-color: #F8F8F8;

      .imgpic{
        width: 100%;
        margin-top: 15px;
      }
    }
    .main-right{
      width: 28%;
      height: 100%;
      // background-color: royalblue;
    }
  }
}
.main-right {
  margin: 10px 0px;
  h3{
    color: #ff7200;
    
  }
  .inright {
    width: 100%;
    height: 268px;
    background-color: #EDECEC;
  }
  img {
    width: 100%;
    height: 163px;
  }
  span {
     color: #ff7200;
     font-size: 18px;
  }
  p {
    text-indent: 15px;
    font-size: 14px;

    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>