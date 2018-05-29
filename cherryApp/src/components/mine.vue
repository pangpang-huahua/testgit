<template>
	<div id="mine" class="margin1">
		<div>
			<head-com></head-com>
		</div>
		<div id="mineHead" class="border1">
			<ul>
				<li><img src="../img/W020131212179876356677.jpg"/></li>
				<li><div><span class="colorStyle5 fontSty3">怪侠一枝梅</span><br/><span class="colorStyle5 fontSty4">UID:TG1314</span></div></li>
				<li class="floatR"><router-link to="/myData"><i class="fa fa-angle-right" style="color: #838383;font-size: 40px;" aria-hidden="true"></i>
</router-link></li>
			</ul>

		</div>
		
		<div id="mineCont">
			<div class="mintCont1 border1">
				<div><router-link to="/grade"><span class="colorStyle10">1</span><br/>等级</router-link></div>
				<div><router-link to="/grade"><span class="colorStyle10">888</span><br/>我的账户</router-link></div>
				<div><router-link to="/attention"><span class="colorStyle10">888</span><br/>我的关注</router-link></div>
			</div>
			<div class="minCont2">
				<ul>
					<li class="border1"><img src="../assets/logo.png"/>充值 <router-link to="/grade"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>已购买的 <router-link to="/purchased"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>我的收藏 <router-link to="/home"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>VIP专区 <router-link to="/home"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>每日任务 <router-link to="/mission"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>消息 <router-link to="/home"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>分享 <router-link to="/home"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
					<li class="border1"><img src="../assets/logo.png"/>设置 <router-link to="/home"><i class="fa fa-angle-right" style="color: #838383;font-size: 30px;float: right;" aria-hidden="true"></i></router-link></li>
	
					
				</ul>
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
	export default {
		name: 'mine',
		components: {
			navMenu,
			headCom
		},
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	@import url("../css/public.css");
	@import url("../css/font-awesome.min.css");
	#mine{
		font-size: 12px;
		text-align: left;
		background-color: white;
		
		
	}
	#mineHead{
		width: 100%;
		padding: 0.15rem;
		box-sizing: border-box;
		background-color: #FAFAFA;
		overflow: hidden;
		position: relative;
	}
	#mineHead li{
		float: left;
		/*height: 1.8rem;*/
	}
	#mineHead li div{
		position: absolute;
		top: 0.6rem;
		left: 1.4rem;
	}
	#mineHead img{
		width: 1.2rem;
		height: 1.2rem;
		border-radius: 1rem;
	}
	.floatR{
		float: right !important;
		line-height: 1.2rem;
	}
	
	.mintCont1{
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content:space-around;
		background-color: white;
		padding: 0.2rem 0;
	}
	.mintCont1 div{
		width: 33%;
		/*font-size: 30px;*/
		color: #333333;
		text-align: center;
	}
	.mintCont1 div a{
		color: #333333;
	}
	.mintCont1 div:nth-of-type(2){
		border-left: 1px solid #CECECE;
		border-right: 1px solid #CECECE;
	}
	.minCont2{
		background-color: white;
		overflow: hidden;
		padding: 0 0.1rem;
	}
	.minCont2 li{
		padding: 0.1rem 0;
		color: #333333;
		/*font-size: 30px;*/
	}
	.minCont2 i{
		display: inline-block;
		line-height: 0.4rem;
		height: 0.4rem;
	}
	.minCont2 img{
		max-width: 0.4rem;
		vertical-align: middle;
		margin-right: 0.04rem;
	}
</style>