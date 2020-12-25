<template>
    <div>
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
                toname:"",
                toimg:"",
                totext:""

            }
        },
        mounted(){
            var name = localStorage.getItem("name")
            var img = localStorage.getItem("img")
            var text = localStorage.getItem("text")
            console.log(name,img,text);
            this.toname = name;
            this.toimg = img;
            this.totext = text;
        }

        
    }
</script>

<style scoped>

* {
    margin: 0;
    padding: 0;
}
.toplace {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.placeimg {
    width: 530px;
    height: 400px;
    background-color: pink;
    overflow: hidden;
}
.placeimg img {
    width: 530px;
    height: 400px;
}
.placetext {
    width: 650px;
    height: 400px;
    background-color: #F9F8F8;
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
}

.myul li:hover {
    color: blue;
}
</style>