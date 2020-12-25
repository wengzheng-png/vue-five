<template>
    <div class="bigbox">
<div class="box">
    <div>
        <img :src="require('../../../public/lightimg/'+img+'.jpg')" alt="" ref="img">
		<ul class="box">
			<li style="border: 2px solid blue;">
			<li><img :src="require('../../../public/lightimg/' + img1 +'.jpg')" alt="" @click="click1" ref="img1"></li>
			<li><img :src="require('../../../public/lightimg/' + img2 +'.jpg')" alt="" @click="click2" ref="img2"></li>
			<li><img :src="require('../../../public/lightimg/' + img3 +'.jpg')" alt="" @click="click3" ref="img3"></li>
		</ul></div>
    <div></div>
</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                img:"jiu",
                img1:"jiu",
                img2:"jiuzai",
                img3:"qiu"
            }
        },
        methods: {
            click1(){  
            this.$refs.img.src = this.$refs.img1.src;
            },click2(){  
            this.$refs.img.src = this.$refs.img2.src;
            },click3(){  
            this.$refs.img.src = this.$refs.img3.src;
            }
        },
    }
</script>

<style lang="scss" scoped>
* {
				margin: 0;
				padding: 0;
			}
			
			.showImg {
				width: 600px;
				height: 400px;
				display: block;
				margin: 20px auto 0;
			}
			
			.box {
				margin-top: 20px;
				border: 1px solid red;
				padding: 10px 20px;
			}
			li {
				list-style: none;
				display: inline-block;
			}
			
			.box img {
				width: 300px;
				height: 200px;
			}
</style>