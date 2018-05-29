<template>
	<div id="attention">
		<mt-header title="关注" style="color: #333333;font-size: 20px;">
			<router-link to="/" slot="left">
				<mt-button icon="" style="color: #787878;font-size: 20px;"><i class="fa fa-angle-left" aria-hidden="true"></i></mt-button>
			</router-link>
		</mt-header>
		<div class="attentionCont">
			<div class="attentionCont1">
				<ul>
					<li><img src="../assets/logo.png"/></li>
					<li>
						<div>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
					<img src="../assets/logo.png"/>
				</div>
					</li>
					<li class="colorStyle5 fontSty2">最近访问</li>
				</ul>
			</div>
			<div class="attentionCont2">
				<ul>
					<li class="personWLi" v-for="(item,index) in persons.name">
						<ul class="personUl">
							<li><img v-bind:src="persons.userHead[index]"/></li>
							<li>
								<span class="colorStyle5 fontSty2">{{item}}</span><br />
								<span class="fontSty4 colorStyle8">{{persons.downLoad[index] }}</span>
								
								
							</li>
							<li>
								<button class="fontSty2">取消关注</button>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import logo from '@/assets/樱桃logo1.png'
	export default {
		name : "attention",
		data(){
			return {
				persons : {
					userHead : [logo,logo,logo,logo,logo,logo,logo,logo,logo],
					name:["花花","世界","鸳鸯","蝴蝶","世界","鸳鸯","蝴蝶","鸳鸯","蝴蝶"],
					downLoad : ["下载11亿次","下载11亿次","下载11亿次","下载11亿次","下载11亿次","下载11亿次","下载11亿次","下载11亿次","下载11亿次"]
				}
			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	.attentionCont{
		background-color: #FAFAFA;
		text-align: left;
		font-size: 0;
	}
	.attentionCont1{
		background-color: white;
		margin-bottom: 0.1rem;
		border-top: 0.01rem solid #CECECE;
		padding: 0.08rem 0.12rem;
		font-size: 0;
		overflow: hidden;
	}
	.attentionCont1 img{
		max-width: 0.4rem;
		max-height: 0.4rem;
	}
	.attentionCont1 li{
		
		float: left;
		overflow: hidden;
		
	}
	.attentionCont1 li:nth-of-type(2){
		width: 66%;
		padding-left: 0.04rem;
	}
	.attentionCont1 li:nth-of-type(2) div{
		white-space: nowrap;
		overflow-x: auto;
	}
	.attentionCont1 li:nth-of-type(2) div img{
		margin-right: 0.04rem;
	}
	.attentionCont1 li:nth-of-type(3){
		line-height: 0.4rem;
		padding-left: 0.04rem;
		float: right;
	}
	
	
	
	.attentionCont2{
		background-color: white;
		padding: 0 0.12rem;
	}
	.personWLi{
		overflow: hidden;
		padding: 0.12rem 0;
		border-bottom: 0.01rem solid #CECECE;
	}
	.personUl{
		overflow: hidden;
	}
	.personUl li{
		float: left;
	}
	.personUl li:nth-of-type(3){
		float: right;
	}
	.personUl img{
		max-width: 0.4rem;
		max-height: 0.4rem;
		vertical-align: middle;
		margin-right: 0.04rem;
	}
	.personUl button{
		outline: none;
		border: 0.01rem solid #333333;
		padding: 0.08rem 0.15rem;
		background-color: transparent;
		border-radius: 1rem;
		/*margin-top: 0.1rem;*/
	}
</style>