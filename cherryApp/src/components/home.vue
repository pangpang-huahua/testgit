<template>
	<div id="home" class="margin1">
		<div>
			<head-com></head-com>
		</div>
		<!--<h1>this is home</h1>-->
		<div class="contSty1">
			<input class="inputSty1" type="text" name="" id="" value="" placeholder="搜索｜模特名/标签" />

		</div>
		<div class="homeBanner">
			<div>
				<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
				</mt-swipe>
			</div>

		</div>
		<!--3d轮播图-->
		<div class="homeBanner">
			<div>
				<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
				</mt-swipe>
			</div>

		</div>
		
		<div class="contSty1">
			<div class="homeList" >
				<div class="homeListBox" v-for="(item,index) in list">
					<router-link to="/modelalbum"><img class="listImg" v-bind:src="item"/></router-link>
					<div class="fontSty1 colorStyle3">
						<img src="../img/logo1.png"/>
						<span class="fontSty1 colorStyle4">花花</span>
					</div>
				</div>
				
			</div>
		</div>
		
		<div id="appFoot">
			<nav-menu></nav-menu>

		</div>
		
		
		
		
		
	</div>
</template>

<script>
	import navMenu from "./nav.vue"
	import headCom from "./head.vue"
	import banner1 from "../img/W020131212179876356677.jpg"
	export default {
		name: 'home',
		components :{
			navMenu,
			headCom
		},
		data() {
			return {
				list:[banner1,banner1,banner1,banner1,banner1]
			}
		}
	}
</script>

<style scoped="scoped">
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	
	#home{
		font-size: 12px;
	}
	.homeBanner img {
		width: 100%;
	}
	
	.homeBanner {
		font-size: 0;
		height: 1.8rem;
		width: 100%;
		padding: 0 0.08rem;
		box-sizing: border-box;
		margin-bottom: 0.08rem;
		
	}
	.homeBanner div{
		width: 100%;
		height: 100%;
		border-radius: 8px;
		overflow: hidden;
	}
	.homeBanner .homebannerDiV2{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
	
	.homeList{
		width: 100%;
		display: -webkit-flex;
		display: flex;
		flex-direction:row;
		flex-wrap:wrap;
		justify-content:space-between
		
	}
	.homeList .homeListBox{
		width: 48.8%;
		border-radius: 0.04rem;
		min-height: 1rem;
		background-color: white;
		box-shadow: 0 0 8px rgba(0,0,0,0.8);
		overflow: hidden;
		margin-bottom: 0.08rem;
		font-size: 0;
	}
	.homeListBox div{
		width: 100%;
		/*padding: 0.15rem 0.25rem;*/
		padding: 0.08rem 0.1rem;
		box-sizing: border-box;
		text-align: left;
		
		font-size: 0;
	}
	.homeListBox div span{
		display: inline-block;
		line-height: 0.4rem;
		margin-left: 0.04rem;
		height: 0.4rem;
		font-size: 12px;
	}
	.homeListBox div img{
		max-width: 0.4rem;
		vertical-align: top;
		
		
	}
	.contSty1{
		margin: 0.08rem 0;
	}

	.listImg{
		width: 100%;
	}
</style>