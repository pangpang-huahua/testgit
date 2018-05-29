<template>
	<div id="privatePhoto" class="margin1">
		<div>
			<head-com></head-com>
		</div>
		<div class="nav">
			<mt-button size="small" @click.native.prevent="active = 'tab-container1'">小清新</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container2'">小清新</mt-button>
			<mt-button size="small" @click.native.prevent="active = 'tab-container3'">小清新</mt-button>
		</div>

		<div class="page-tab-container">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
				<mt-tab-container-item id="tab-container1">
					<!-- cell组件 -->
					<!--<mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>-->

					<div class="contSty1">
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
				<mt-tab-container-item id="tab-container2">
					<!-- cell组件 -->
					<!--<mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>-->
					<div class="contSty1">
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
					<div class="contSty1">
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
		name: 'privatePhoto',
		components :{
			navMenu,
			headCom
		},
		data() {
			return {
				list:[banner1,banner1,banner1,banner1,banner1],
				active:"tab-container1"
			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	#privatePhoto{
		font-size: 12px;
	}
	.item {
		display: inline-block;
	}
	
	.nav {
		padding: 10px;
		text-align: left;
		white-space: nowrap;
		overflow-x: auto;
		background-color: white;
	}
	
	.link {
		color: inherit;
		padding: 20px;
		display: block;
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
		margin-bottom: 0.2rem;
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
		margin: 0.15rem 0;
	}

	.listImg{
		width: 100%;
	}
</style>