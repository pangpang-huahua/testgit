<template>
	<div id="videoAlbumD">
		<div>
			<mt-header title="cherry">
				<router-link to="/" slot="left">
					<mt-button icon=""><i class="fa fa-angle-left backIcon" aria-hidden="true"></i>
					</mt-button>
				</router-link>
				<!--<mt-button icon="more" slot="right"></mt-button>-->
			</mt-header>
		</div>
		<hr style="background-color: #F4F4F4;height: 1px;width: 100%;" />

		<div class="nav">
			<mt-button v-bind:class="{'colorStyle1':index===num}" v-for="(item,index) in tabId" size="small" @click.native.prevent="active = item;num=index">{{tabName[index]}}</mt-button>
		</div>

		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					<!-- cell组件 -->
					<!--<mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->

					<div class="">
						<div class="homeList">
							<div class="homeListBox" v-for="(item,index) in list">
								<router-link to="/videoAlbums"><img class="listImg" v-bind:src="item" /></router-link>
								
									<mt-cell title="标题文字" style="color: white;">
										<span style="line-height: 0.6rem;color: white;">已被10万人订阅</span>
										<img slot="icon" src="../assets/樱桃logo1.png" width="60" height="60" style="border-radius: 50%;">
									</mt-cell>
							

							</div>

						</div>
					</div>

				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<!-- cell组件 -->
					<!--<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>-->
					<div class="">
						<div class="homeList">
							<div class="homeListBox" v-for="(item,index) in list">
								<img class="listImg" v-bind:src="item" />
								<div class="fontSty1 colorStyle3">
									<img src="../img/logo1.png" />
									<span class="fontSty1 colorStyle4">花花</span>
								</div>
							</div>

						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<!-- cell组件 -->
					<!--<mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>-->
					<div class="">
						<div class="homeList">
							<div class="homeListBox" v-for="(item,index) in list">
								<img class="listImg" v-bind:src="item" />
								<div class="fontSty1 colorStyle3">
									<img src="../img/logo1.png" />
									<span class="fontSty1 colorStyle4">花花</span>
								</div>
							</div>

						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import banner1 from "../img/0-ofOGL9.jpg"
	export default {
		name: "videoAlbumD",
		data() {
			return {
				list: [banner1, banner1, banner1, banner1, banner1],
				active: "tab-container1",
				tabName : ["小清新","小清新","小清新"],
				num :'',
				tabId : ["tab-container1","tab-container2","tab-container3"]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	@import url("../css/public.css");
	@import url("../css/font-awesome.min.css");
	.mint-header {
		font-size: 40px;
		color: #333;
	}
	.backIcon {
		font-size: 50px;
	}
	.mint-cell {
		background-color: #E5A5A5 !important;
	}
	.mint-cell-wrapper{
		color: white;
	}
	.mint-button{
		border-radius: 0;
		background-color: transparent;
		border: 0;
		width: 33%;
	}
	.mint-button--default{
		box-shadow: none !important;                                       
	}
	/**/
	
	.nav {
		padding: 10px;
		text-align: left;
		background-color: white;
		font-size: 0;
	}
	
	.nav button{
		border-bottom: 2px solid transparent;
	}
	
	.link {
		color: inherit;
		padding: 20px;
		display: block;
	}
	
	.homeList {
		width: 100%;
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		text-align: left;
	}
	
	.homeList .homeListBox {
		width: 100%;
		border-radius: 8px;
		min-height: 1rem;
		background-color: white;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
		overflow: hidden;
		margin-bottom: 0.2rem;
		font-size: 0;
	}
	
	.homeListBox div {
		width: 100%;
		padding: 0.15rem 0.25rem;
		box-sizing: border-box;
		text-align: left;
		font-size: 0;
	}
	
	.homeListBox div span {
		display: inline-block;
		line-height: 0.8rem;
		margin-left: 0.15rem;
		height: 0.8rem;
	}
	
	.homeListBox div img {
		max-width: 0.8rem;
		vertical-align: middle;
	}
	
	.listImg {
		width: 100%;
	}
</style>