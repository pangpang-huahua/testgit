//彩包详情数据
var totalPrice;
var getPrice;
var lastPrice;
var getNum;
var totalNum;
var yvisColorbagLogos;//数组
var wares;//数组
var colorbagCodeArr = [];
var isLuckyArr = [];
var isDonationArr = [];
var wareIdArr = [];
var wareNameArr = [] ;
var wareImageArr = [] ;
var wareNumArr = [] ;
var customerIdArr = [] ;
var warePriceArr = [] ;
var wareSkuidArr = [] ;
var createTimeArr = [] ;
var getColorInfo = [];


//二
var waresIdArr = [];
var waresWareNameArr = [];
var waresImgPathArr = [];
var waresWareStateArr = [];
var waresWarePriceArr = [];
var waresInterestRateArr = [];
var waresIntroductionArr = [];
var waresProductAreaArr = [];
var waresBrandIdArr = [];
var waresImage1fileArr = [];
var waresImage2fileArr = [];
var waresImage3fileArr = [];
var waresImage4fileArr = [];
var waresImage5fileArr = [];
var waresAuditStatusArr = [];
var waresSupplierIdArr = [];
var waresSortArr = [];
var waresSupportArr = [];
var waresLabelArr = [];
var waresKeyWordsArr = [];
var getColorWare = [];


var getUserName;
var bouncedImg = document.getElementById("bouncedImg");
var colorImgOnes = document.getElementsByClassName("colorImgOne");
var hasBox = document.getElementById("hasBox");
var noneImg = document.getElementById("noneImg");
var pView = document.getElementById("pView");
var phone = document.getElementById("inputText");
var smsCode = document.getElementById("codeInput");
var registerBox = document.getElementById("registerBox");
var openOneImg = document.getElementById("openOneImg");
var registerBtn = document.getElementById("registerBtn");
var errorMessage = document.getElementById("errorMessage");
var userName = document.getElementById("userName");
var colorImgGetOne = document.getElementById("colorImgGetOne");
var clickOpenTouCai = document.getElementById("clickOpenTouCai");

var dataFeng = '';
var arr = ['手机号码有误','验证码有误'];
var local = window.localStorage;
var telphone;

var colorbagCode = [];
var colorMess;//保存彩包的剩余个数

telphone = localStorage.getItem("tel");

var setColorInfoWare;
var getColorInfoSe;
var getColorInfoWare;

var url1 = "http://120.76.247.147";
var url2 = "http://192.168.0.136:8080";

var imgUrl = [];

var num = 2;
var userPhoneArr = [];
var invitationCode = [];

var arr1;
var arr2;
window.onload = function(){
	var a = "http://www.tblmall.com:81/colorbag/index.html?invitationCode=123456&colorbagCode=CB1706031010580385&from=singlemessage";
	var b = window.location.href;
	var urlo = a;

	var num=urlo.indexOf("?")
	urlo=urlo.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

	var arr=urlo.split("&"); //各个参数放到数组里
	arr1 = arr[0].split("=");
	arr2 = arr[1].split("=");

	invitationCode.push(arr1[1]);
	colorbagCode.push(arr2[1]);

	setColorbagCode = JSON.stringify(colorbagCode[0]);
	sessionStorage.setItem("setColorbagCode",setColorbagCode);
	userInformation();//用户信息在此处调用
	console.log(invitationCode[0]+"-----waibian----"+colorbagCode[0])
}

//本地是否存在电话号码 显示注册页面
function cunzai(){
	if(!window.localStorage){//浏览器不支持localStorage属性
		registerBox.style = "z-index: 1000;";
	}else{//浏览器支持localStorage属性
		if(telphone==null){//手机号码为空时  1、显示注册页面
			openOneImg.src = "img/register_bg.png";
			registerBox.style = "z-index: 1000;";
			document.getElementById("clickOpen").style = "z-index:-1"
		}else{//已经注册时  1、隐藏注册页面  2、执行动画   3、调用详情接口
			qiangPort();   //抢的 接口在注册 成功后调用
			xiangQingPort();//调用详情接口，并且

			//colorMess == "抢光了"   num==0
			if(colorMess == "抢光了"){//抢光了时调用
				colorMess = JSON.stringify(colorMess);
				sessionStorage.setItem("colorMess",colorMess);
				pView.style.display = "block";
				document.getElementsByClassName("touXiangBox")[0].style = "top: 12rem;left:2rem;width: 80%;"
				document.getElementById("bgOne").src = "img/nothing.png";
				document.getElementById("colorImgCarOne").style.display = "none";
				document.getElementById("colorImgCarTwo").style.display = "none";
				document.getElementById("colorImgGetOne").style.display = "none";
				document.getElementById("openOneImg").style.display = "none";
				document.getElementById("hasBox").removeChild(document.getElementById("clickOpen"))
			}else{
				////判断有无彩头
				for(var k = 0;k<isLuckyArr.length;k++){
					if(waresImgPathArr.length==1){
						animation();
					}else{
						imgUrl.push(wareImageArr[k]);
						animationOne();
					}
				}
			}
			//document.getElementById("clickOpen").style = "z-index:100";//注册按钮
			registerBox.style = "z-index: -1;";//隐藏注册页面
		}
	}
}


//获取验证码接口调用
function verifycode() {
	// 2、倒计时
	var Tnum=60;
	var myTimer=setInterval(daojishi,1000);
	function daojishi(){
		Tnum--;
		//获取并替换提交按钮的value值
		var verifycode=document.getElementById('verifycode');
		verifycode.innerText = Tnum+"s";
		if(Tnum<1){
			Tnum=0;
			verifycode.innerText="请重新获取";
			clearInterval(myTimer);
		}else if( Tnum>=1&&Tnum<=60 ){
			//document.getElementById("verifycode").disabled = "disabled";//按钮的禁止点击事件
		}
	}
	//获取验证码  无需返回
	$.ajax({
		type:"POST",
		data:{
			"phone":phone.value
		},
		url:url1 + "/api/login/getcode",
		dataType:"json",
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success:function(data){

		},
		error:function(xhr,type,errorThrown){
			console.log("验证码获取失败");
		}
	})
}

//注册接口调用
registerBtn.onclick=function(){
	var phoneY=/^1\d{10}$/g;//验证手机号码格式
	//验证码是否正确
	if(phone.value.match(phoneY)){
		errorMessage.innerText='';
	}else{
		errorMessage.innerText += arr[0];
	}

	//错误信息提示为空时    发送注册接口请求
	if(errorMessage.innerText==""){
		//输入验证正确时发送注册的数据请求   半个注册用户
		$.ajax({
			type:"POST",
			data:{
				"phone":phone.value,
				"smsCode":smsCode.value,
				"invitationCode":invitationCode[0]
			},
			url:url1 + "/api/webcolorbag/registercustomer",
			dataType:"json",
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			success:function(data){//注册成功：1、隐藏注册页面，2、出现抢，3、将电话号码保存到本地
				openOneImg.src = "img/open_01.png";
				registerBox.style = "z-index: -1;";
				localStorage.setItem("tel",phone.value);
				xiangQingPort();
				zdshuaxin();
			},
			error:function(xhr,type,errorThrown){
				console.log("注册失败");
			}
		})
	}else {
		return false;

	}
}

//抢彩包的接口   判断出彩包的有无   有问题
function qiangPort(){
	$.ajax({
		type:"POST",
		data:{
			"phone":"15828407404",
			"colorbagCode":colorbagCode[0]
		},
		url:url1 + "/api/webcolorbag/robcolorbag",
		dataType:"json",
		success:function(data){
			colorMess=data.msg;
		},
		error:function(){

		}
	})
}

//彩包详情借口
function xiangQingPort(){
	$.ajax({
		type:"POST",
		data:{
			"phone":telphone,
			"colorbagCode":colorbagCode[0]
		},
		url:url1 + "/api/webcolorbag/getcolorbaginfo",
		dataType:"json",
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success:function(data){

			totalPrice = data.data.colorbagLogoInfo.totalPrice;
			getPrice = data.data.colorbagLogoInfo.getPrice;
			lastPrice = data.data.colorbagLogoInfo.lastPrice;
			getNum = data.data.colorbagLogoInfo.getNum;
			totalNum = data.data.colorbagLogoInfo.totalNum;
			yvisColorbagLogos = data.data.colorbagLogoInfo.yvisColorbagLogos;//数组
			wares = data.data.colorbagLogoInfo.wares;//数组

			for(var i = 0;i<yvisColorbagLogos.length;i++){
				colorbagCodeArr.push(yvisColorbagLogos[i].colorbagCode);
				isLuckyArr.push(yvisColorbagLogos[i].isLucky);
				isDonationArr.push(yvisColorbagLogos[i].isDonation);
				wareIdArr.push(yvisColorbagLogos[i].wareId);
				wareNameArr.push(yvisColorbagLogos[i].wareName);
				wareImageArr.push(yvisColorbagLogos[i].wareImage);
				wareNumArr.push(yvisColorbagLogos[i].wareNum);
				customerIdArr.push(yvisColorbagLogos[i].customerId);
				warePriceArr.push(yvisColorbagLogos[i].warePrice);
				wareSkuidArr.push(yvisColorbagLogos[i].wareSkuid);
				createTimeArr.push(yvisColorbagLogos[i].createTime);
				userPhoneArr.push(yvisColorbagLogos[i].phone);
			}
			getColorInfo = [totalPrice,getPrice,lastPrice,getNum,totalNum,colorbagCodeArr,isLuckyArr,isDonationArr,wareIdArr,wareNameArr,wareImageArr,wareNumArr,customerIdArr,warePriceArr,wareSkuidArr,createTimeArr,userPhoneArr]
			var setColorInfo = JSON.stringify(getColorInfo);

			sessionStorage.setItem("setColorInfo",setColorInfo);



			for(var j = 0;j<wares.length;j++){
				waresIdArr.push(wares[j].id);
				waresWareNameArr.push(wares[j].wareName);
				waresImgPathArr.push(wares[j].imagePath);
				waresWareStateArr.push(wares[j].wareState);
				waresWarePriceArr.push(wares[j].warePrice);
				waresInterestRateArr.push(wares[j].interestRate);
				waresIntroductionArr.push(wares[j].introduction);
				waresProductAreaArr.push(wares[j].productArea);
				waresBrandIdArr.push(wares[j].brandId);
				waresImage1fileArr.push(wares[j].image1file);
				waresImage2fileArr.push(wares[j].image2file);
				waresImage3fileArr.push(wares[j].image3file);
				waresImage4fileArr.push(wares[j].image4file);
				waresImage5fileArr.push(wares[j].image5file);
				waresAuditStatusArr.push(wares[j].auditStatus);
				waresSupplierIdArr.push(wares[j].supplierId);
				waresSortArr.push(wares[j].sort);
				waresSupportArr.push(wares[j].support);
				waresLabelArr.push(wares[j].label);
				waresKeyWordsArr.push(wares[j].keyWords);
			}
			console.log("wares图片的数据----------"+waresImgPathArr)
			getColorWare = [waresIdArr,waresWareNameArr,waresImgPathArr,waresWareStateArr,waresWarePriceArr,waresInterestRateArr,waresIntroductionArr,waresProductAreaArr,waresBrandIdArr,waresImage1fileArr,waresImage2fileArr,waresImage3fileArr,waresImage4fileArr,waresImage5fileArr,waresAuditStatusArr,waresSupplierIdArr,waresSortArr,waresSupportArr,waresLabelArr,waresKeyWordsArr];
			setColorInfoWare = JSON.stringify(getColorWare);
			sessionStorage.setItem("setColorInfoWare",setColorInfoWare);
			getColorInfoSe = sessionStorage.getItem("setColorInfo");
			getColorInfoSe = JSON.parse(getColorInfoSe);
			getColorInfoWare = sessionStorage.getItem("setColorInfoWare");
			getColorInfoWare = JSON.parse(getColorInfoWare);
		},
		error:function(xhr,type,errorThrown){

		}
	})

}

//通过邀约码获取用户信息  成功
function userInformation(){
	$.ajax({
		type:"GET",
		data:{
			"invitationCode":invitationCode[0]
		},
		url:url1 + "/api/webcolorbag/customerinfo",
		dataType:"json",
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success:function(data){
			userName.innerText = data.data.customer.name;
			var getColorUserName = data.data.customer.name;
			getColorUserName = JSON.stringify(getColorUserName);
			sessionStorage.setItem("setColorUserName",getColorUserName)
		},
		error:function(xhr,type,errorThrown){

		}
	})
}

//领彩包流程
//点击按钮开抢
function clickOpen(){
	cunzai();
}
function getColor(){//点击1s之后   显示得到彩包的界面
	colorImgGetOne.style = "display:block;transform:scale(1);animation: one 1s linear;"
}


//得到的彩包的页面
function removeDom(){
	for(var i = 0;i<colorImgOnes.length;i++) {
		colorImgOnes[i].style = "transform: scale(0);transition: all 1s linear;"
	}
	document.getElementById("oneBox").style = "display:block;";
	document.getElementById("getColorImg").src = waresImgPathArr[0];
	document.getElementById("towBOx").style = "display:block;";
	document.getElementsByClassName("pText")[0].innerText = waresWareNameArr[0];
	document.getElementsByClassName("spanText")[0].innerText = waresWarePriceArr[0];
}

//彩头部分
//出现获得头彩的部分的处理
function getTouCai(){
	document.getElementById("clickOpen").style = "display:none;"//第一个页面的抢隐藏
	document.getElementById("oneBox").style = "display:none;";
	document.getElementById("getColorImg").src = "#";
	document.getElementById("towBOx").style = "display:none;";
	document.getElementsByClassName("pText")[0].innerText = "";
	document.getElementsByClassName("spanText")[0].innerText = "";
	//1、第一次得到的产品页面隐藏   2、头彩抢的页面显示出来   3、点击按钮层级变高
	colorImgGetOne.src = 'img/open_02.png';
	clickOpenTouCai.style = 'z-index:1000;';//彩头的抢显示
}
function clickOpenTcF() {
	getTouCaiProduct();
	setTimeout("jump()",2000);//跳转到详情页面
}
//彩头  得到的
function getTouCaiProduct(){//点击抢 之后调用该函数
	document.getElementById("clickOpenTouCai").style.display = "none";
	colorImgGetOne.src = "img/get_02.png";
	document.getElementById("oneBox").style = "display:block;width:36rem;height:28.5rem;left:13rem;top:28.5rem;";
	document.getElementById("getColorImg").src = imgUrl[0];

}

//动画
//页面动画及跳转   没有获得头彩时调用
function animation(){//得到彩包
	document.getElementById("colorImgCarOne").style = "animation:animationF 1s linear infinite;";
	document.getElementById("colorImgCarTwo").style = "animation:animationZ 1s linear infinite;";
	setTimeout("getColor()",1000);
	setTimeout("removeDom()",2000);//获得彩包的定时器
	//setTimeout("jump()",4000);//跳转到详情页面
}

//获得头彩时调用
function animationOne(){
	document.getElementById("colorImgCarOne").style = "animation:animationF 1s linear infinite;";
	document.getElementById("colorImgCarTwo").style = "animation:animationZ 1s linear infinite;";
	setTimeout("getColor()",1000);
	setTimeout("removeDom()",2000);//获得彩包的定时器
	//出现抢头彩的页面
	setTimeout("getTouCai()",3500);
}

//跳转到详情页面
//点击进入详情页面
document.getElementById("moreBtn").onclick = function(){
	jump()
}
function jump(){
	window.location.href = "detail.html"
}

//页面自动刷新事件
function zdshuaxin(){
	window.location.reload();
}






