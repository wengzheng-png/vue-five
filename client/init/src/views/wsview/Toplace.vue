<template>
    <div class="body">
        <!-- <h1>旅游地点简介</h1> -->
        <!-- 这个页面怎样根据对应的商品id跳转到详情页 -->
        <div class="toplace">
            <div class="placeimg">
                <img :src="toimg" alt="图片加载失败">
            </div>
            <div class="placetext">
                <h3>{{toname}}</h3>
                <p>{{totext}}</p>
            </div>
        </div>

        <div class="toplace">
            <div class="left">
                <h2>周边目的地</h2>
            </div>
            <div class="right">
                <ul class="myul">
                    <li>九寨沟</li>
                    <li>稻城亚丁</li>
                    <li>318川藏线</li>
                    <li>色达</li>
                    <li>四姑娘山</li>
                    <li>海螺沟</li>
                    <li>冷嘎措</li>
                    <li>乐山大佛</li>
                    <li>党岭葫芦海</li>
                    <li>措卡湖</li>
                    <li>措卡湖</li>
                    <li>德格印经院</li>
                    <li>阆中古城</li>
                    <li>峨眉山</li>
                    <li>黄龙</li>
                    <li>泸沽湖</li>
                    <li>甲居藏寨</li>
                    <li>新都桥</li>
                    <li>莫斯卞</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{ 
                toname:"四川",
                toimg:"http://www.ezout.cn/uploads/2019/0115/f1dbdbb6c90e24142287969aa7558ab7_550x372.jpg",
                totext:`
四川，简称川或蜀，是中国23个省之一，省会成都。位于中国西南地区内陆，东连重庆，南邻云南、贵州，西接西藏，北接陕西、甘肃、青海。
瑰丽险峻的巴蜀风光，底蕴深厚的蜀国文化，火辣热情的川菜美食，一个来了就不想走的地方。
四川属中国西南内陆，西有青藏高原相扼，东有三峡险峰重叠，北有巴山秦岭屏障，南有云贵高原拱卫，形成了闻名于世的四川盆地。
四川地处中国西南腹地，长江上游。西部是青藏高原，东部为四川盆地，数亿年的地质运动，沧桑巨变，造就了瑰丽险峻的巴蜀风光。四川，位于中国民族东西交融、南北过渡的走廊，糅合吸收东西民族之长，是南北文化交流的要冲。长江黄河两大流域文明的精华，哺育出博大奇绝的巴蜀文化。
`

            }
        },
        mounted(){
            var url = `/search?id=${this.$route.query.placeid}`
            this.$axios(url)
            .then((res)=>{
            this.toname = res.data[0].name;
            this.toimg = res.data[0].img;
            this.totext = res.data[0].text;
            })
        }

        
    }
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}
.body {
    background-color: rgb(193, 220, 241);
}
.toplace {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    /* margin-top: 20px; */
}
.placeimg {
    width: 530px;
    height: 400px;
    background-color: pink;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    border: 8px solid rgb(20, 19, 19)
}
.placeimg img {
    width: 530px;
    height: 400px;
    cursor: pointer;
}
.placeimg img:hover {
    transform: scale(1.2);
    transition: all 2s;
}
.placetext {
    width: 650px;
    height: 400px;
    background-color: #F9F8F8;
     margin-top: 20px;
}
.placetext h3 {
    margin: 20px;
}
.placetext p {
    margin-left: 20px;
}


/* 周边目的地 */
.left {
    width: 200px;
    height: 200px;
    /* background-color: #c1d2e9; */
}
.left h2 {
    margin: 20px;
    color: rgb(241, 149, 87);
}
.right {
    width: 1000px;
    height: 200px;
    /* background-color: #c1d2e9; */
}
.myul {
    margin-top: 20px;
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-between;
}
.myul li {
    width: 100px;
    height: 20px;
    margin: 5px;
    list-style: none;
}

.myul li:hover {
    color: blue;
}
</style>