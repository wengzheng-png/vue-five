<template>
  <router-link to="/gonglue" class="tow_goods_nav">
    <div class="tow_box_left">
      <img src="../../../assets/zmimg/12.jpg" alt="" class="img1" />
      <img src="../../../assets/zmimg/remen.png" alt="" class="img2" />
      <div class="text1">螺髻山99里温泉旅游攻略</div>
      <div class="right_text2">
        螺髻山99里温泉是螺髻山五绝之一，是四川非常出名温泉之地，也是全世界屈指可数的温泉瀑布群，温泉水从山顶倾泻而下形成难得一见的温泉瀑布，露天温…
      </div>
    </div>
    <div class="tow_box_right">
      <div class="hot_right hot_right1">
        <img src="../../../assets/zmimg/12.jpg" alt="" class="img3" /><img
          class="img2"
          src="../../../assets/zmimg/remen.png"
          alt=""
        />
        <div>
          <div class="right_text1">螺髻山99里温泉三日游行程线路推荐</div>
          <div class="right_text2">
            说起螺髻山，可能很多人都没有听说过这个地方，螺髻山位于四川凉山州西昌市普洛县荞窝镇，是当地风光优美的山地景区，其中最出名的是99里温泉。本文…
          </div>
        </div>
      </div>
      <div class="hot_right hot_right1">
        <img src="../../../assets/zmimg/12.jpg" alt="" class="img3" />
        <img class="img2" src="../../../assets/zmimg/remen.png" alt="" />
        <div>
          <div class="right_text1">螺髻山99里温泉三日游行程线路推荐</div>
          <div class="right_text2">
            螺髻山99里温泉位于凉山州西昌普格县荞窝镇，是一个游玩、娱乐、温泉、观光集一身的度假景区。如果您想要来这里游玩，小蜀给您提供一个螺髻山99里…
          </div>
        </div>
      </div>
      <div class="hot_right">
        <div class="right_text1">螺髻山99里温泉三日游行程线路推荐</div>
        <div class="right_text2">
          螺髻山99里温泉位于凉山州西昌普格县荞窝镇，是一个游玩、娱乐、温泉、观光集一身的度假景区。如果您想要来这里游玩，小蜀给您提供一个螺髻山99里…
        </div>
      </div>
      <div class="hot_right">
        <div class="right_text1">螺髻山99里温泉门票是多少</div>
        <div class="right_text2">
          作为四川人，如果你没来螺髻山99里泡过温泉，那想想还真是有些亏。螺髻九十九里温泉距离西昌一个多小时的车程，这里被誉为是世界上最大的温泉，同年…
        </div>
      </div>
      <div class="hot_right">
        <div class="right_text1">螺髻山99里温泉景区游览线路</div>
        <div class="right_text2">
          螺髻山风景区总共几百公里，景区前后包括山上山下景点诸多，其中99里温泉是螺髻山的核心景区，怎么玩是一个问题，如果您不知道，可以跟着小蜀为您规…
        </div>
      </div>
      <div class="hot_right">
        <div class="right_text1">除了99里温泉，螺髻山还有哪些旅游景点呢</div>
        <div class="right_text2">
          螺髻山以99里温泉闻名于世，它是世界上最大的温泉群，也是世界绝无仅有的悬崖温泉瀑布，整个瀑布都是温泉水，长达200米，最高落差有50多米，因…
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: #333;
}
.tow_goods_nav {
  font-size: 14px;
  width: 1200px;
  min-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.tow_box_left {
  width: 386px;
  position: relative;
  color: #333;
}
.img1 {
  width: 386px;
}
.img2 {
  width: 100px;
  position: absolute;
  top: 10px;
  left: 0;
}
.text1 {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.text2 {
  font-size: 12px;
  padding: 0 0 20px 0;
  color: rgb(92, 91, 91);
}
/* 右边 */
.tow_box_right {
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hot_right1,
.hot_right {
  color: #333;
  width: 390px;
}
.img3 {
  width: 180px;
  height: 122px;
}

.hot_right1 {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.right_text1,
.right_text2 {
  margin: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
}
.right_text1 {
  font-weight: 600;
  font-size: 14px;
  height: 20px;
  width: 200px;
  color: #333;
}
.right_text1:hover {
  color: #ff7800;
}
.right_text2 {
  font-size: 14px;
  height: 77px;
  /* width: 200px; */
  color: rgb(85, 84, 84);
}
</style>
