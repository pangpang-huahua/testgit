<template>
	<div id="app">
		<!--<div>

			<mt-header id="appHead" v-show="show" class="fontSty2" fixed title="固定在顶部">
				<router-link to="/" slot="left">
					<!--<mt-button icon="">
						logo
						
					</mt-button>-->
					<!--<img class="logoImg" v-bind:src="logoUrl" />
				</router-link>
				<router-link to="/search" slot="right">
					<mt-button icon="" @click="searchShow()"><i class="fa fa-search colorStyle1 fontSty2" aria-hidden="true"></i></mt-button>
				</router-link>

			</mt-header>
		</div>-->
		
		<!--<div id="appFoot" v-show="show">
			<div v-for="(list,index) in menuLists" @click="clickList(index)">
				<router-link v-bind:to="menuUrls[index]" class="fontColorOne">
					<span><i v-bind:class=iconClass[index] class="fontSty1 colorStyle2" aria-hidden="true"></i></span>
					<p v-bind:class="{'colorStyle1':index===num}" class="fontSty1 colorStyle2">{{list}}</p>
				</router-link>
			</div>

		</div>-->

		<router-view></router-view>
	</div>
</template>

<script>
	import logo from '@/assets/樱桃logo1.png'
	import bgImg from '@/img/54535d16cf50f.jpg'
	export default {
		name: 'app',
		data() {
			return {
				menuLists: ["首页", "私照", "视频", "我的"],
				menuUrls: ["/home", "/privatephoto", "/video", "/mine"],
				iconClass: ["fa fa-home", "fa fa-camera", "fa fa-video-camera", "fa fa-user"],
				show: true,
				logoUrl: logo,
				num: 0
			}
		},
		mounted: function() {
			this.$nextTick(function() {
				//				this.logoUrl = "img/logo1.png"
			})
		},
		methods: {
			clickList: function(index) {
				this.num = index;
				console.log("num的值：" + this.num)
			},
			searchShow: function() {
				this.show = false
			}
		}
	}
</script>

<style>
	@import url("css/font-awesome.min.css");
	@import url("css/public.css");
	html{
		font-size: 100px;
	}
	body {
		--colorSty1: white;
	}
	*{
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		/*font-size: 12px;*/
	}
	button{
		outline: none;
		border: none;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		
	}
	#app:before{
		content: ' ';
	  position: fixed;
	  z-index: -1;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  background: url(img/54535d16cf50f.jpg) center 0 no-repeat;
	  background-size: cover;
	}
	/*head*/
	/*foot*/

	
	.fontColorOne {
		list-style: none;
		float: left;
		width: 25%;
		text-decoration: none;
	}
	
	p {
		padding: 0;
		margin: 0;
	}
	
	.mint-header {
		/*padding: 10px;*/
		height: 0.5rem;
		background-color: var(--colorSty1);
	}
	.mint-searchbar-inner{
		height: 0.4rem;
	}
	input,.mint-searchbar-inner .mintui-search{
		/*font-size: 30px;*/
		text-decoration: none;
	}
	
	.inputSty1{
		outline: none;
		border: none;
		border-radius: 0.04rem ;
		height: 0.25rem;
		padding-left: 0.08rem;
		box-sizing: border-box;
		width: 100%;
		margin: 0.08rem auto;
		background-color: rgba(0,0,0,0.5) ;
		
	}

	/*.logoImg {
		width: 80px;
	}*/

</style>