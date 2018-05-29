$(function(){
	
	if (window.orientation == 90 || window.orientation == -90) {
     		$("#body").css({"height":$(window).height()*2.5});
       }else{
	       	$("body").css({"height":$(window).height()});
		    $("#body").css({"height":$(window).height()});
       }
       /*------ 页面拉伸 ---------*/
	$(window).resize(function(){
		if (window.orientation == 90 || window.orientation == -90) {
     				$("#body").css({"height":$(window).height()*2.5});
      		 }else{
			       	$("body").css({"height":$(window).height()});
				    $("#body").css({"height":$(window).height()});
       		}
	});
	
		/*------ 页面旋转 ---------*/	
		var evt = "onorientationchange" in window ? "orientationchange" : "resize";
      
		window.addEventListener(evt, function() {
		    if (window.orientation == 90 || window.orientation == -90) {
     				$("#body").css({"height":$(window).height()*2.5});
      		 }else{
			       	$("body").css({"height":$(window).height()});
				    $("#body").css({"height":$(window).height()});
       		}
		}, false);


	//详情页面
	var getColorInfoSe = sessionStorage.getItem("setColorInfo");//详情
	getColorInfoSe = JSON.parse(getColorInfoSe);
	var getColorInfoWare = sessionStorage.getItem("setColorInfoWare");//得到的
	getColorInfoWare = JSON.parse(getColorInfoWare);

	var colorMess = sessionStorage.getItem("colorMess");//抢光了
	colorMess = JSON.parse(colorMess);


	var getColorUserName = sessionStorage.getItem("setColorUserName");
	getColorUserName = JSON.parse(getColorUserName);
	var boss = document.getElementById("boss");
	boss.innerText = getColorUserName;
	var phone = localStorage.getItem("tel");
	var totalPrice = document.getElementById("totalPrice");
	var getPrice = document.getElementById("getPrice");
	var lastPrice = document.getElementById("lastPrice");
	var getNum = document.getElementById('getNum');
	var totalNum = document.getElementById('totalNum');
	totalPrice.innerText = getColorInfoSe[0];
	getPrice.innerText = getColorInfoSe[1];
	lastPrice.innerText = getColorInfoSe[2];
	getNum.innerText = getColorInfoSe[3];
	totalNum.innerText = getColorInfoSe[4];
	var colorInfoUl = document.getElementById('line-ul');

	var getOneImg = document.getElementById("getOneImg");
	var getTwoImg = document.getElementById("getTwoImg");
	getOneImg.src = getColorInfoWare[2][0];
	//判断彩头的图片
	if(getColorInfoSe[6].indexOf(1)==-1){
		document.getElementById("nothingLi").style = "width:0";
	}else{
		for(var j = 0;j<getColorInfoSe[6].length;j++){
			if(getColorInfoSe[6][j]==1){
				document.getElementById("getTwoImg").src = getColorInfoSe[10][j]
			}
		}
	}
	if(colorMess == "抢光了"){
		document.getElementById("detailContent").innerHTML = "恭喜发财大吉大利"
		document.getElementById("detailContent").style = "text-align: center;color:white;font-size:0.6rem;line-height: 2.5rem;"
	}

	for(var i = 0;i<getColorInfoSe[9].length;i++){
		if(getColorInfoSe[6][i]==1){
			colorInfoUl.innerHTML += '<li><img src="img/touxiang.jpg" class="headImg" /><span class="text"><p class="phone">'+ getColorInfoSe[16][i] +'</p>' +
				'<p class="time"><span>'+getColorInfoSe[getColorInfoSe.length-2][i]+'</span></p></span><span class="text">' +
				'<p style="margin: 0 10%;"><img src="img/bo.png" class="jackpot"><span class="colorSpan">'+getColorInfoSe[9][i]+'</span></p></span><span class="com"><img src='+getColorInfoSe[10][i]+' class="coms"/>' +
				'<p style="font-size: .2rem;padding: .005rem;">￥<span>'+getColorInfoSe[13][i]+'</span></p></span></li>';
		}else{
			colorInfoUl.innerHTML += '<li><img src="img/touxiang.jpg" class="headImg" /><span class="text"><p class="phone">'+ getColorInfoSe[16][i] +'</p>' +
				'<p class="time"><span>'+getColorInfoSe[getColorInfoSe.length-2][i]+'</span></p></span><span class="text">' +
				'<p style="margin: 0 10%;"><span class="colorSpan">'+getColorInfoSe[9][i]+'</span></p></span><span class="com"><img src='+getColorInfoSe[10][i]+' class="coms"/>' +
				'<p style="font-size: .2rem;padding: .005rem;">￥<span>'+getColorInfoSe[13][i]+'</span></p></span></li>';
		}

	}
});




