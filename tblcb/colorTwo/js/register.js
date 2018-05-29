

		var prompt=document.getElementsByClassName("prompt");
		var phone=document.getElementById("phoneinput");//手机号码输入框
		var phoneVal;
		var verifycodeinput=document.getElementById("verifycodeinput");
		var prompttextarr=["手机号码有误!","验证码有误!"];
		var coverimg=document.getElementById("coverimg");
		var covertishi=document.getElementById("covertishi");
		var zhuanimg=document.getElementById("zhuanimg");
		var coverH=document.body.clientWidth +"px";//遮罩层宽高
		var coverW=document.body.clientHeight+"px";//遮罩层宽高
		var gainText=document.getElementById("gainText");
		var downloadBox=document.getElementById("downloadBox");
		var downLoadImg=document.getElementsByClassName("downLoadImg");
		var num;
		//获取验证码
		function verifycode() {
			phoneVal=phone.value;
			console.log(phoneVal)
			// 1、获取随机的四位数验证码
		    num=Math.floor(Math.random()*9000)+1000;
		    document.getElementById("num").innerText=num;
	        // 2、倒计时
	        var Tnum=5;
	        var myTimer=setInterval(daojishi,1000);
	        function daojishi(){
	            Tnum--;
	            //获取并替换提交按钮的value值
	            var verifycode=document.getElementById('verifycode');
	           	verifycode.value=Tnum+"s后请重新获取";
	            if(Tnum<1){
	                Tnum=0;
	                verifycode.value="请重新获取";
	                clearInterval(myTimer);
	            }
	            
	            //创建一个ajax
		        var xhr="";
		        if(window.XMLHttpRequest){
		            xhr=new XMLHttpRequest();
		        }else if(window.ActiveXObject){
		            xhr=new ActiveXObject("Microsoft.XMLHTTP");
		        }
		        xhr.onreadystatechange=function(){
//		        	console.log(xhr)
		            if(xhr.readyState==4&&xhr.status==200){
//						var data=xhr.responseText;
						var data=xhr.responseText;
						console.log(data)
		            }else{
		            	var data=xhr.responseText;
						console.log(data)
		            	console.log(xhr.readyState)
		            	console.log(xhr.status)
		            	console.log("有误")
		            }
		        }
		        xhr.open("post","http://120.76.246.189/api/login/getcode?phone="+phoneVal,true);
		        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");// 设置请求头
		        xhr.send("phoneNum="+num);
	       }
       	}



        	

		//提交事件
        function submitbtn(){
        	//移动端/pc端阻止页面滚动事件
        	browserRedirect();
			
			//弹出时改变遮罩层样式
			
        	document.getElementById("coverbao").style="width:coverW;height:coverH;position:fixed;top:0;left:0;display:block;"
        	var phoneV=phone.value;
//      	var myurl="html/receive.html"+"?"+"parm1="+phoneV; 
        	var phoneY=/^1\d{10}$/g;//验证手机号码格式
        	if(phone.value.match(phoneY)){
        		prompt[0].innerText='';
        	}else{
        		prompt[0].innerText=prompttextarr[0];	
        	}
        	if(verifycodeinput.value==num){
        		prompt[1].innerText='';
        	}else{
        		prompt[1].innerText=prompttextarr[1];
        	}
        	
        	if(prompt[0].innerText==""&&prompt[1].innerText==""){
        		coverimg.style="display:inline;"
        		zhuanimg.style="animation: animationtwo 1s linear;"
        		phoneVal=phone.value;
        		var promptVal=verifycodeinput.value;
	            var xhr="";
	            if(window.XMLHttpRequest){
	                xhr=new XMLHttpRequest();
	            }else if(window.ActiveXObject){
	                xhr=new ActiveXObject("Microsoft.XMLHTTP");
	            }
	            xhr.onreadystatechange=function(){
	                if(xhr.readyState==4&&xhr.status==200){
						
	                }
	            }
	            xhr.open("post","postzhuce",true);
	            xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");// 设置请求头
	            xhr.send("userphone="+phoneVal+"&prompt="+promptVal);
	        }else {
				covertishi.style.display="block";
	        }
        	
        }
        
        //马上去抢的点击事件
        function openPackage(){
        	downloadBox.style="display:block;"
        	zhuanimg.style="display:none";
        	downLoadImg[0].style="animation:animationimg 1s linear;"
        	
        }
        function showBtn(){
        	downLoadImg[1].style="display:block;"
        }
        function download(){
        	
        }
        
        
        
        
        //跳转到规则说明界面
        function jump(){
        	window.location.href="html/introduce.html"
        }
        

		//点击确定按钮关闭
		function closeBtn(){
			document.getElementById("coverbao").style.display="none";
			document.getElementById("covertishi").style.display="none";
			document.getElementById("coverimg").style.display="none";
		}
		
		//移动端实现点击时的动效
		function touchchange(id,class1,class2){
			document.getElementById(id).addEventListener("touchstart",function(){document.getElementById(id).className= class2;},false);
　　           		document.getElementById(id).addEventListener("touchend", function(){document.getElementById(id).className = class1;},false);
		}
		function touchchangeT(id,class1,class2){
			document.getElementById(id).addEventListener("touchstart",function(){document.getElementById(id).className= class2;},false);
　　           		document.getElementById(id).addEventListener("touchend", function(){document.getElementById(id).className = class1;},false);
		}
		touchchangeT("Receive","btnOne","btnOneN");
		touchchange("verifycode","btnOne","btnOneN")
		
		
		
//		判断设备为移动设备还是pc
		function browserRedirect() {
		    var sUserAgent = navigator.userAgent.toLowerCase();
		    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
		    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
		    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
		    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
		    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
		    var bIsAndroid = sUserAgent.match(/android/i) == "android";
		    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
		    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
		    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		        //满足条件则为移动设备
		        //移动端阻止页面滚动事件
		    	document.querySelector('body').addEventListener('touchmove', function (ev) {
				    event.preventDefault();
				});
		    } else {
		//    	改调价下为移动设备
		        disabledMouseWheel();
		    }
		}
		
		
		
		//监听鼠标滚动条事件   适用于pc端
		function disabledMouseWheel() {  
		if (document.addEventListener) {  
		    document.addEventListener('DOMMouseScroll', scrollFunc, false);  
		}//W3C  
		window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome  
		}  
		function scrollFunc(evt) {  
		evt = evt || window.event;  
		    if(evt.preventDefault) {  
		    // Firefox  
		      evt.preventDefault();  
		      evt.stopPropagation();  
		    } else {  
		      // IE  
		      evt.cancelBubble=true;  
		      evt.returnValue = false;  
		}  
		return false;  
		}  