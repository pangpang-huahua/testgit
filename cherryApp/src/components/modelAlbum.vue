<template>
	<div id="modelAlbum">
		<div id="modelCoverBox">
			<img src="../img/0-ofOGL9.jpg" class="imgSty1" id="modelCoverImg" />
			<i id="backIcon" class="fa fa-angle-left" aria-hidden="true" style="font-size: 26px;color: white;" @click="goBack()"></i>
			<div class="modelHeadBox">
				<ul>
					<li><img src="../assets/樱桃logo1.png" /></li>
					<li>

						<p class="fontSty2 colorStyle4 pSty1">悠悠</p>
						<p class="fontSty2">模特</p>
					</li>
					<li class="">
						<p class="colorStyle4 pSty1 fontSty2">三围</p>

					</li>
				</ul>

			</div>

		</div>
		<div style="height: 0.4rem;"></div>
		<div class="modelAlbumBox1 fontSty2">
			<ul>
				<li>8888人关注她</li>
				<li>+关注她</li>
			</ul>
		</div>
		<div class="modelAlbumBox2">
			<div><img class="modelAlbumHeadImg" src="../assets/logo.png" /></div>
			<div class="modelPhotoList">
				<p class="fontSty3">悠悠 <br/><span class="fontSty4">专辑</span></p>
				<p class="fontSty2">专辑描述</p>
				<div>
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
				</div>
				<p class="fontSty2">
					已被 <span class="fontSty2">33336</span>人订阅        <i class="fa fa-share-alt floatR" aria-hidden="true" style="font-size: 20px;color: #FD237A;"></i>

				</p>
			</div>

		</div>
		<div class="modelAlbumBox2">
			<div><img class="modelAlbumHeadImg" src="../assets/logo.png" /></div>
			<div class="modelPhotoList">
				<p class="fontSty3">悠悠 <br/><span class="fontSty4">专辑</span></p>
				<p class="fontSty2">专辑描述</p>
				<div>
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
					<img src="../img/21923904.jpg" />
				</div>
				<p class="fontSty2">
					已被 <span class="fontSty2">33336</span>人订阅        <i class="fa fa-share-alt floatR" aria-hidden="true" style="font-size: 20px;color: #FD237A;"></i>

				</p>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: "modelAlbum",
		data() {
			return {

			}
		},
		methods: {
			goBack: function() {
				window.history.go(-1)

			}
		}
	}
</script>

<style scoped>
	@import url("../css/font-awesome.min.css");
	@import url("../css/public.css");
	#modelAlbum {
		font-size: 0;
		background-color: white;
		text-align: left;
	}

	#modelCoverBox {
		position: relative;
	}
	
	#backIcon {
		position: absolute;
		left: 0.2rem;
		top: 0.1rem;
		cursor: pointer;
	}
	
	.modelHeadBox {
		width: 100%;
		padding: 0 0.12rem;
		box-sizing: border-box;
		text-align: left;
		overflow: hidden;
		position: absolute;
		bottom: -0.4rem;
		left: 0;
	}
	
	.modelHeadBox img {
		width: 0.8rem;
		height: 0.8rem;
		margin-right: 0.04rem;
	}
	
	.modelHeadBox li {
		float: left;
	}
	
	.modelHeadBox li:nth-of-type(3) {
		float: right;
	}
	
	.pSty1 {
		height: 0.4rem;
		line-height: 0.6rem;
	}
	
	.modelAlbumBox1 {
		margin: 0.1rem 0;
		overflow: hidden;
	}
	
	.modelAlbumBox1 li {
		float: left;
		width: 50%;
		padding: 0.12rem 0;
		text-align: center;
	}
	
	.modelAlbumBox1 li:nth-of-type(1) {
		background-color: #E1F6FF;
		color: #009FE8;
	}
	
	.modelAlbumBox1 li:nth-of-type(2) {
		background-color: #009FE8;
		color: white;
	}
	
	.modelAlbumBox2 {
		overflow: hidden;
		padding: 0 0.12rem;
		box-sizing: border-box;
		border-bottom: 0.01rem solid #CECECE;
		margin-bottom: 0.08rem;
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.modelAlbumBox2:nth-last-child(1){
		margin-bottom: 0;
	}

	.modelPhotoList {
		width: 82%;
		font-size: 0;
	}
	
	.modelPhotoList img {
		width: 0.878rem;
		margin-right: 0.04rem;
		margin-bottom: 0.04rem;
	}
	
	.modelAlbumHeadImg {
		width: 0.5rem;
		height: 0.5rem;
		margin-right: 0.06rem;
	}
	
	.modelPhotoList p:nth-of-type(1) {
		padding-top: 0.13rem;
	}
	.modelPhotoList p:nth-of-type(3){
		padding: 0.04rem 0;
	}
	
	.modelPhotoList p span {
		display: inline-block;
		padding: 0.06rem 0;
		color: #FD237A;
	}
	
	.modelPhotoList div {
		padding-bottom: 0.04rem;
		border-bottom: 0.01rem solid #CECECE;
	}
</style>