<template>
	<div id="search">
	
		<div id="searchHead">
			<mt-search v-model="value" cancel-text="取消" placeholder="搜索">
			</mt-search>

		</div>
	</div>
</template>

<script>
	export default {
		name: "search",
		data() {
			return {
				msg: "this is search",
				value : ""
			}
		}
	}
</script>

<style scoped="scoped">
	#app{
		margin-top: 0 !important;
	}
</style>