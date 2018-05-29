<template>
	<div id="myData">
		<mt-header title="我的" style="color: #333333;font-size: 20px;">
			<router-link to="/" slot="left">
				<mt-button icon="" style="color: #787878;font-size: 26px;"><i class="fa fa-angle-left" aria-hidden="true"></i></mt-button>
			</router-link>
		</mt-header>

		<div class="myDataCont">
			<div class="myHeadImg"><img src="../img/21923904.jpg" alt="" /></div>
			<div class="myDataCont1">
				<form>

					<div class="dataBox">
						<i class="fa fa-user-o" aria-hidden="true" style="color: #333333;font-size: 26px;"></i>
						<input type="text" v-model="userName" />
						<span @click="clearInput(1)"><i class="fa fa-times" aria-hidden="true"></i></span>
					</div>
					<div class="dataBox">
						<i class="fa fa-user-o" aria-hidden="true" style="color: #333333;font-size: 26px;"></i>
						<input type="text" v-model="usersex" />
						<span @click="clearInput(2)"><i class="fa fa-times" aria-hidden="true"></i></span>
					</div>

					<button id="sbmBtn">保存</button>
				</form>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "myData",
		data() {
			return {
				userName: "花花",
				usersex : "男"
			}
		},
		methods:{
			clearInput: function(index){
				if(index == 1){
					this.userName = "";
				}
				if(index==2){
					this.usersex = ""
				}
				
			},
			backBtn : function(){
				window.history.go(-1)
			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	.myDataCont {
		padding: 0 0.12rem;
		background-color: white;
		border-top: 0.01rem solid #CECECE;
		font-size: 0;
		padding-bottom: 1rem;
	}
	
	.myDataCont div {
		width: 100%;
	}
	
	.myHeadImg {
		text-align: center;
		padding-top: 0.2rem;
		padding-bottom: 0.15rem;
	}
	
	.myHeadImg img {
		width: 1rem;
		height: 1rem;
		border-radius: 1.2rem;
	}
	
	.myDataCont1 {}
	
	.dataBox {
		text-align: left;
		border-radius: 0.08rem;
		width: 100%;
		padding: 0.08rem;
		box-sizing: border-box;
		background-color: #DCDDDD;
		font-size: 0;
		margin-bottom: 0.3rem;
	}
	.dataBox input{
		height: 0.3rem;
		margin-left: 0.08rem;
		width: 72%;
		outline: none;
		border: none;
		background-color: transparent;
		
	}
	.dataBox span{
		height: 0.28rem;
		display: inline-block;
		width: 0.28rem;
		border-radius: 0.25rem;
		line-height: 0.42rem;
		float: right;
		border: 1px solid #333;
		text-align: center;
	}
	.dataBox span i{
		font-size: 20px;
		color:#333333
	}
	
	#sbmBtn{
		outline: none;
		border: none;
		width: 100%;
		height: 0.5rem;
		border-radius: 0.08rem;
		color: white;
		font-size: 18px;
		background-color: #2ADBC1;
	}
</style>