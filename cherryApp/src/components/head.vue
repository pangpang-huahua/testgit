<template>
	<div id="headCom">
			<mt-header id="appHead" class="fontSty2" fixed title="cherry" style="color: #333;">
				<router-link to="/" slot="left">
					<!--<mt-button icon="">
						logo
						
					</mt-button>-->
					<img class="logoImg" v-bind:src="logoUrl" />
				</router-link>
				<router-link to="/search" slot="right">
					<mt-button icon="" @click="searchShow()"><i class="fa fa-search colorStyle1 fontSty2" aria-hidden="true"></i></mt-button>
				</router-link>

			</mt-header>
	</div>
</template>

<script>
	import logo from '@/assets/樱桃logo1.png'
	import bgImg from '@/img/54535d16cf50f.jpg'
	export default {
		name : "",
		data () {
			return {
				logoUrl: logo
			}
		},
		methods:{
			searchShow: function() {
				this.show = false
			}
		}
	}
</script>

<style scoped>
	@import url("../css/public.css");
	.logoImg {
		width: 0.4rem;
	}
</style>