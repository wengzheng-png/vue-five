<template>
  <div class="bottom">
     <div class="bottom1">
           <span>价格公正，安心购买</span><span>|</span>
           <span>品质保证，放心出行</span><span>|</span>
           <span>产品丰富，一站式服务</span><span>|</span>
           <span>专业顾问，24小时客服</span>
     </div>

     <div class="question">
          <div>
             <p class="fir">预订常见问题</p>
             <p>报名前注意事项？</p>
             <p>纯玩团是什么意思？</p>
             <p>什么是单房差？</p>
          </div>
          <div>
             <p class="fir">付款和发票</p>
             <p>西北旅游须知</p>
             <p>西藏旅游须知</p>
             <p>我们的旅行</p>
          </div>
           <div>
             <p class="fir">签订合同</p>
             <p>如何预订及签约方式？</p>
             <p>新疆旅游须知</p>
             <p>取消报名退款政策</p>
          </div>
             <div>
             <p class="fir">其它问题</p>
             <p>预定活动常见问题？</p>
             <p>出发前常见问题？</p>
             <p>行程中常见问题？</p>
          </div>
          <div>
             <p class="fir">其他事项</p>
             <p>为什么玩户外？</p>
             <p>活动强度与分级？</p>
             <p>参加活动装备要求？</p>
          </div>

     </div>
     <div class="last">
           <p>本网站是非盈利性个人学习网站，一切资源均来自互联网，如有侵权，马上下架</p>
     </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped lang="scss">
.bottom1{
  width: 100%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #2577E3;

}
.bottom{
  width: 100%;
  height: auto;
  text-align: center;
  color: #fff;
  span {
    font-size: 16px;
    display: inline-block;
    padding: 0px 15px;
    
  }
}
.question {
  width: 100%;
  height: 75px;
  // background-color: brown;

  div {
    display: inline-block;
    height: auto;
    width: 161px;
    .fir{
      font-weight: 500;
      font-size: 14px;
      color: black;
    }
    p{
      font-size: 12px;
      color: #999;
    }
  }
}
.last {
  width: 100%;
  color: red;
  text-align: center;
  font-size: 12px;
}
</style>
