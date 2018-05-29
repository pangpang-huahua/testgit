<template>
	<div id="videoAlbum">
		<div id="videoPlay">
			<video width="100%" v-bind:src="videoUrl" height="400" webkit-playsinline="true" controls="controls"></video>
			<p class="colorStyle5 fontSty2 paddingT1">{{videoName}}</p>
			<p class="fontSty3 colorStyle6 paddingB1">{{videoDescribe}}</p>
		</div>
		
		<div id="modelBox" class="colorStyle7">
			<div class="modelHead"><img src="../assets/樱桃logo1.png"/></div>
			<p class="colorStyle5 fontSty3">{{modelName}}</p>
			<div class="floatR"><button class="fontSty3">+关注她</button></div>
		</div>
		
		<!--more-->
		<div id="moreBox" class="">
			<h3 class="fontSty2 colorStyle8">更多内容</h3>
			<div class="moreList colorStyle7">
				<ul>
					<li v-for="(item,index) in moreList.imgList">
						<div><a href="javascript:void(0)"><img v-bind:src="item"/></a></div>
						<p class="colorStyle5 fontSty2 paddingT1">{{moreList.nameList[index]}}</p>
						<p class="colorStyle9 fontSty4 paddingB1">{{moreList.playNumList[index]}}</p>
					</li>
				</ul>
			</div>
			<h3 class="fontSty2 colorStyle8">互动评论</h3>
			<div class="discussBox">
				<ul>
					<li v-for="(item,index) in discussList.userHeadimg">
						<div class="modelHead"><img v-bind:src="item"/></div>
						<div>
							<span class="colorStyle9 fontSty4">{{discussList.userName[index]}}</span><br />
							<span class="colorStyle5 fontSty1">{{discussList.discussCont[index]}}</span>
						</div>
					</li>
					
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import banner1 from "../img/21923904.jpg"
	import video from "../img/appstart_vedio.mp4"
	import userHeadImg from "../img/logo1.png"
	export default {
		name: 'videoAlbum',
		data() {
			return {
				list: [banner1, banner1, banner1, banner1, banner1],
				videoUrl : video,
				videoName : "等风来",
				videoDescribe : "等风来了之后.....",
				modelName : "西风",
				moreList : {
					imgList:[banner1, banner1, banner1, banner1, banner1],
					nameList : ["花花","花花","花花","花花","花花"] ,
					playNumList : ["12万","1亿","300万","60万","90万"]
				},
				discussList:{
					userHeadimg : [userHeadImg,userHeadImg,userHeadImg,userHeadImg,userHeadImg],
					userName : ["花花","花花","花花","花花","花花"],
					discussCont : ["性感的美女  不错不错","性感的美女  不错不错","性感的美女  不错不错","性感的美女  不错不错","性感的美女  不错不错"]
				}
			}
		},
		methods:{

		}
	}
</script>

<style scoped>
	#videoAlbum{
		font-size: 0;
		text-align: left;
		background-color: #F4F4F4;
	}
	#videoImg{
		width: 100%;
		height: 400px;
	}
	#videoImg img{
		width: 100%;
	}
	#videoPlay{
		background-color: white;
		/*height: 400px;
		overflow: hidden;*/
	}
	#videoPlay p{
		padding-left: 0.1rem;
		padding-right: 0.1rem;
	}
	
	
	#modelBox,.discussBox li{
		padding: 0.1rem;
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 0.1rem 0;
	}
	#modelBox div,#modelBox p{
		height: 0.4rem;
		line-height: 0.4rem;
		display: inline-block;
	}
	#modelBox div button{
		width: 1rem;
		height: 0.3rem;
		outline: none;
		border: 1px solid #77D4FF;
		border-radius: 0.5rem;
		background-color: transparent;
		color: #77D4FF ;
		margin-top: 0.05rem;
	}
	.modelHead{
		width: 0.4;
		/*border-radius: 0.5rem;*/
		overflow: hidden;
		margin-right: 0.04rem;
		font-size: 0;
		/*outline: 1px solid red;*/
	}
	.modelHead img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.floatR{
		/*outline: 1px solid red;*/
		width: 70%;
		text-align: right;
		float: right;
	}
	
	
	/*more*/
	#moreBox{
		padding: 0 0.12rem;
	}
	#moreBox h3{
		text-align: center;
		line-height: 0.4rem;
	}
	.moreList{
		white-space: nowrap;
		overflow-x: auto;
	}
	.moreList li{
		width: 1.4rem;
		display: inline-block;
		margin-right: 0.04rem;
		background-color: white;
		padding: 0.08rem 0;
	}
	.moreList li img{
		width: 100%;
	}
	
	
	.discussBox li{
		background-color: white;
		width: 100%;
		box-sizing: border-box;
		margin: 0;
		margin-bottom: 0.04rem;
	}
</style>