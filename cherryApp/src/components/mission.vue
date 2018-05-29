<template>
	<div id="mission">
		<mt-header title="每日任务" style="color: #333333;font-size: 40px;">
			<router-link to="/" slot="left">
				<mt-button icon="" style="color: #787878;font-size: 40px;"><i class="fa fa-angle-left" aria-hidden="true"></i></mt-button>
			</router-link>
		</mt-header>
		<div class="missionCont">
			<div class="missionCont1">
				<p class="fontSty2 textLeft">30金币 <span class="floatR fontSty2">任务进度0%</span></p>
				<p class="fontSty5">分享内容</p>
				<p class="fontSty2">做人不能只顾自己享受，好东西要和他人分享</p>
			</div>
			<div class="missionMar"></div>
			<div class="missionCont1">
				<p class="fontSty2 textLeft">50金币 <span class="floatR fontSty2">任务进度0%</span></p>
				<p class="fontSty5">热心评论</p>
				<p class="fontSty2">您对内容的评论使我们无上的荣幸</p>
			</div>
			<div class="missionMar"></div>
			<div class="missionCont1">
				<p class="fontSty2 textLeft">25金币 <span class="floatR fontSty2">任务进度0%</span></p>
				<p class="fontSty5">每日签到</p>
				<p class="fontSty2">cherry每天都欢迎您的使用，精彩好礼天天都送</p>
			</div>
			<div class="missionMar"></div>
			<div class="missionCont1">
				<p class="fontSty2 textLeft">100金币 <span class="floatR fontSty2">任务进度0%</span></p>
				<p class="fontSty5">新用户福利</p>
				<p class="fontSty2">我们为每一位新用户都准备了一份豪礼哟</p>
			</div>
			<div class="missionMar"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name : "mission",
		data () {
			return{
				
			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	.missionCont{
		
		outline: 1px solid red;
		font-size: 0;
		background-image: url(../img/mission.png);
		background-repeat: no-repeat;
		background-size: cover;
	}
	.missionCont p{
		overflow: hidden;
		color: white;
		
	}
	.missionCont1{
		padding: 0.45rem 0.3rem; 
	}
	.missionCont1 p:nth-of-type(2){
		padding: 0.25rem 0;
	}
	.missionMar{
		height: 0.25rem;
		width: 100%;
		background-color: white;
	}
</style>