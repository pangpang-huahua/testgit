

//ajax 数据请求
// var baseUrl = "http://192.168.0.157:8080";
var baseUrl = "http://www.cdxskj.com.cn:8080/MyDigitallife";
//正式
//var appId = "wx16b0cc8be088487c" ;
//测试
var appId = "wx16b0cc8be088487c" ;
var dataArr ;
function getAjaxData (dataType,dataPara,dataUrl) {
	console.log("调用了")
	$.ajax({
		type:dataType,
		data:dataPara,
		async:false,//true：异步处理     false:同步处理
		traditional:true,//传递数组时必须加上    使其以传统的方式进行序列化
//		processData: false,
//		contentType: false,
		xhrFields: {
			withCredentials: true//解决跨域
		},
		url:baseUrl + dataUrl,
		success:function(data){
			dataArr = data ; 
		},
		error:function(err){
			console.log(err)
		}
	});
	return dataArr ; 
}


//获取url参数
function GetQueryString(name) {
   	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)","i");
   	var r = window.location.search.substr(1).match(reg);
   	if (r!=null) return unescape(r[2]); return null;
}

//提示按钮
function promptBtnFun(x) {
	$("#prompt").text(x)
	$("#prompt").fadeIn();

	setTimeout(function() {
		$("#prompt").fadeOut()
	}, 1500)
}

//精确计算减法
function floatSub(arg1,arg2){    
    var r1,r2,m,n;    
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}    
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}    
    m=Math.pow(10,Math.max(r1,r2));    
    //动态控制精度长度    
    n=(r1>=r2)?r1:r2;    
    return ((arg1*m-arg2*m)/m).toFixed(n);    
} 