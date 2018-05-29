<template>
	<div id="video" class="margin1">
		<div>
			<head-com></head-com>
		</div>
		<div class="videoBanner">
			<mt-swipe :auto="4000">
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
					<mt-swipe-item><img src="../img/0-ofOGL9.jpg" /></mt-swipe-item>
				</mt-swipe>
		</div>
		<div class="videoCont1 contSty2">
			<h2 class="colorStyle5">全部分类</h2>
			<div class="videoClassify">
				<router-link to="/videoAlbumD" v-for="item in videoClassify"><span class="videoClassifyE"><img v-bind:src="item"/></span></router-link>
			</div>
		</div>
		<div class="videoCont2 contSty2">
			<h2 class="colorStyle5">精选推荐</h2>
			
			<div class="contSty2">
						<div class="homeList">
							<div class="homeListBox" v-for="(item,index) in list">
								<router-link to="/videoAlbums"><img class="listImg" v-bind:src="item"/></router-link>
								<div class="fontSty1 colorStyle3">
									<img src="../img/logo1.png" />
									<span class="fontSty1 colorStyle4" style="font-size: 12px;">花花</span>
								</div>
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
	import banner1 from "../img/21923904.jpg"
	import video from "../img/0-ofOGL9.jpg"
	export default {
		name: 'video',
		components :{
			navMenu,
			headCom
		},
		data() {
			return {
				list:[banner1,banner1,banner1,banner1,banner1],
				videoClassify : [video,video,video,video,video]
			}
		}
	}
</script>

<style scoped>
	#video{
		background-color: white;
		font-size: 0;
	}
	.videoBanner{
		height: 1.8rem;
		width: 100%;
		padding: 0 0.08rem;
		box-sizing: border-box;
		overflow: hidden;
		border-radius: 0.04rem;
	}
	.videoBanner img{
		width: 100%;
	}
	h2{
		/*font-size: 40px;*/
		margin-bottom: 0.08rem;
	}
	.videoListCont{
		font-size: 0;
		margin-bottom: 0.2rem;
	}
	.videoListCont img{
		width: 100%;
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
		width: 100%;
		/*border-radius: 0.04rem;*/
		min-height: 0.8rem;
		background-color: white;
		/*box-shadow: 0 0 0.04rem rgba(0,0,0,0.8);*/
		overflow: hidden;
		margin-bottom: 0.1rem;
		font-size: 0 !important;
	}
	.homeListBox div{
		width: 100%;
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
	}
	.homeListBox div img{
		max-width: 0.4rem;
		vertical-align: top;
		
		
	}
	.contSty1{
		margin: 15px 0;
	}

	.listImg{
		width: 100%;
	}
	
	
	.videoClassify{
		white-space: nowrap;
		overflow-x: auto;
		font-size: 0;
	}
	.videoClassify img{
		max-width: 1.5rem;
	}
	.videoClassifyE{
		margin-right: 0.08rem;
	}
</style>