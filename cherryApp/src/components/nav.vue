<template>
	<div id="navMenu">
		<div v-for="(list,index) in menuLists" @click="clickList(index)">
				<router-link v-bind:to="menuUrls[index]" class="fontColorOne">
					<span><i v-bind:class=iconClass[index] class="fontSty1 colorStyle2" aria-hidden="true"></i></span>
					<p v-bind:class="{'colorStyle1':index===num}" class="fontSty1 colorStyle2">{{list}}</p>
				</router-link>
			</div>
	</div>
</template>

<script>
	export default {
		name :"navMenu",
		data () {
			return {
				menuLists: ["首页", "私照", "视频", "我的"],
				menuUrls: ["/home", "/privatephoto", "/video", "/mine"],
				iconClass: ["fa fa-home", "fa fa-camera", "fa fa-video-camera", "fa fa-user"],
				show: true,
				num: 0
			}
		},
		methods:{
			clickList: function(index) {
				this.num = index;
				console.log("num的值：" + this.num)
			},
		}
	}
</script>

<style scoped>
	@import url("../css/public.css");
	#navMenu{
		font-size: 12px;
		color: red;
	}
</style>