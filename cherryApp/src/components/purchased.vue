<template>
	<div class="purchased">
		<mt-header title="每日任务" style="color: #333333;font-size: 20px;">
			<router-link to="/" slot="left">
				<mt-button icon="" style="color: #787878;font-size: 26px;"><i class="fa fa-angle-left" aria-hidden="true"></i></mt-button>
			</router-link>
		</mt-header>
		
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">私照</mt-tab-item>
			<mt-tab-item id="2">视频</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
				<!--<mt-cell v-for="n in 10" :title="'content ' + n" />-->
				<div class="photoBox" v-for="item in imgs">
					<img  v-bind:src="item"/>
				</div>
				
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<mt-cell v-for="n in 4" :title="'content ' + n" />
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	import banner1 from "../img/W020131212179876356677.jpg"
	export default {
		name: "purchased",
		data() {
			return {
				selected : "1",
				imgs : [banner1,banner1,banner1,banner1]
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	
	#purchased{
		background-color: white;
	}
	.photoBox{
		overflow: hidden;
		margin-bottom: 0.1rem;
		max-height: 2rem;
	}
	#purchased img{
		width: 100%;
		
	}
</style>