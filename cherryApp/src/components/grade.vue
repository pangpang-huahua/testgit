<template>
	<div id="userGrade">
		<mt-header title="cherry" style="color: #333333;font-size: 20px;">
			<router-link to="/" slot="left">
				<mt-button icon="" style="color: #787878;font-size: 26px;"><i class="fa fa-angle-left" aria-hidden="true"></i></mt-button>
			</router-link>
		</mt-header>
		<div id="userGrdCont">
			<div class="userGrdCont1 fontSty3">
				账户余额：<img src="" alt="" /><span>6666金币</span>
			</div>
			<div class="userGrdCont2">
				<h3 class="fontSty3 colorStyle5">VIP会员</h3>
				<ul>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">钻石VIP会员   <button class="fontSty3 floatR">￥288</button></li>
								<li class="fontSty2">所有权限任性使用1年     <span class="fontSty4 floatR" @click="openRead(1)">点击展开<i class="fa fa-angle-right" aria-hidden="true"></i>
</span></li>
							</ul>
							
						</div>
						<p v-show="pshow.pshow1" class="fontSty2 colorStyle5">
							<ul>
								<li><img src="../img/logo1.png"/>有效期为1年</li>
								<li><img src="../img/logo1.png"/>任意看cherry全部高清图片专辑</li>
								<li><img src="../img/logo1.png"/>良心出品，模特专辑拍摄高清花絮任性看</li>
								<li><img src="../img/logo1.png"/>任意看全部精美制作独家呈现的视频</li>
							</ul>
						</p>
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">铂金VIP会员   <button class="fontSty3 floatR">￥158</button></li>
								<li class="fontSty2">所有权限任性使用半年     <span @click="openRead(2)" class="fontSty4 floatR">点击展开<i class="fa fa-angle-right" aria-hidden="true"></i>
</span></li>
							</ul>
						</div>
						<p v-show="pshow.pshow2" class="fontSty2 colorStyle5">
							<ul>
								<li><img src="../img/logo1.png"/>有效期为1年</li>
								<li><img src="../img/logo1.png"/>任意看cherry全部高清图片专辑</li>
								<li><img src="../img/logo1.png"/>良心出品，模特专辑拍摄高清花絮任性看</li>
								<li><img src="../img/logo1.png"/>任意看全部精美制作独家呈现的视频</li>
							</ul>
						</p>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">黄金VIP会员   <button class="fontSty3 floatR">￥88</button></li>
								<li class="fontSty2">所有权限任性使用3个月     <span @click="openRead(3)" class="fontSty4 floatR">点击展开<i class="fa fa-angle-right" aria-hidden="true"></i>
</span></li>
							</ul>
						</div>
						<p v-show="pshow.pshow3" class="fontSty2 colorStyle5">
							<ul>
								<li><img src="../img/logo1.png"/>有效期为1年</li>
								<li><img src="../img/logo1.png"/>任意看cherry全部高清图片专辑</li>
								<li><img src="../img/logo1.png"/>良心出品，模特专辑拍摄高清花絮任性看</li>
								<li><img src="../img/logo1.png"/>任意看全部精美制作独家呈现的视频</li>
							</ul>
						</p>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">白银VIP会员   <button class="fontSty3 floatR">￥50</button></li>
								<li class="fontSty2">所有权限任性使用1个月     <span @click="openRead(4)" class="fontSty4 floatR">点击展开<i class="fa fa-angle-right" aria-hidden="true"></i>
</span></li>
							</ul>
						</div>
						<p v-show="pshow.pshow4" class="fontSty2 colorStyle5">
							<ul>
								<li><img src="../img/logo1.png"/>有效期为1年</li>
								<li><img src="../img/logo1.png"/>任意看cherry全部高清图片专辑</li>
								<li><img src="../img/logo1.png"/>良心出品，模特专辑拍摄高清花絮任性看</li>
								<li><img src="../img/logo1.png"/>	任意看全部精美制作独家呈现的视频</li>
							</ul>
						</p>
						
					</li>
					
				</ul>
				
				
				
				<h3 class="fontSty3 colorStyle5">金币充值</h3>
				<ul class="gradeUl2">
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">600金币 <span class="fontSty5">首充大礼：只需1元，仅1次</span>   <button class="fontSty3 floatR">￥1</button></li>
							</ul>
						</div>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">600金币   <button class="fontSty3 floatR">￥6</button></li>
							</ul>
						</div>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">1200金币<span class="fontSty5">赠送100金币</span>   <button class="fontSty3 floatR">￥12</button></li>
							</ul>
						</div>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">1800金币 <span class="fontSty5">赠送200金币</span>  <button class="fontSty3 floatR">￥12</button></li>
							</ul>
						</div>
						
					</li>
					<li class="gradeLi">
						<img src="../assets/logo.png"/>
						<div>
							<ul>
								<li class="fontSty3">3000金币 <span class="fontSty5">赠送600金币</span>  <button class="fontSty3 floatR">￥30</button></li>
							</ul>
						</div>
						
					</li>
					
				</ul>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		name : "userGrade",
		data () {
			return {
				textChange : "点击展开",
				pshow : {
					pshow1 : false,
					pshow2 : false,
					pshow3 : false,
					pshow4 : false
				}
			}
		},
		methods:{
			openRead : function(index){
				if(index==1){
					this.pshow.pshow1 = !this.pshow.pshow1 
				}else if(index==2){
					this.pshow.pshow2 = !this.pshow.pshow2
				}else if(index==3){
					this.pshow.pshow3 = !this.pshow.pshow3
				}else{
					this.pshow.pshow4 = !this.pshow.pshow4
				}
//				this.pshow = !this.pshow ;
			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	#userGrade{
		font-size: 12px;
	}
	#userGrdCont{
		width: 100%;
		background-color: white;
		border-top: 1px solid #CECECE;
		text-align: left;
		font-size: 0;
	}
	.userGrdCont1{
		/*padding: 0.2rem 0.3rem;*/
		padding: 0.08rem 0.12rem;
		box-sizing: border-box;
	}
	.userGrdCont2{
				background-color: #F4F4F4;
	}
	.userGrdCont2 h3{
		/*height: 1rem;*/
		/*line-height: 1rem;*/
		padding: 0.08rem 0.12rem;
	}
	.userGrdCont2 .gradeLi{
		box-sizing: border-box;
		width: 100%;
		margin-bottom: 0.1rem;
		background-color: white ;
		padding: 0.08rem 0.12rem;
		
	}
	.gradeLi p{
		border-top: 1px solid #CECECE;
		margin-top: 0.15rem;
	}
	.gradeLi img{
		width: 0.4rem;
		max-height: 0.4rem;
		margin-right: 0.08rem;
	}
	.gradeLi li{
		overflow: hidden;
	}
	.gradeLi div{
		display: inline-block;
		width: 84%;
	}
	.gradeLi li button{
		border: 0.01rem solid #2C3E50;
		border-radius: 0.08rem;
		padding: 0.04rem 0.12rem;
		background-color: transparent;
	}
	.gradeLi li span i{
		margin-left: 0.15rem;
	}
	
	.gradeUl2 li img{
		width: 0.4rem;
		max-height: 0.4rem;
	}
	.gradeUl2 li button{
		border: 1px solid #F3CC14;
		color: #F3CC14;
	}
	
	
	.gradeLi p ul{
		padding: 0.05rem 0.06rem;
	}
	.gradeLi p ul li{
		margin-bottom: 0.2rem;
	}
	.gradeLi p img{
		vertical-align: middle;
		margin-right: 0.04rem;
	}
</style>