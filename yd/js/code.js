
function setcodeval (code) {
	alert("存储openid的函数")
	if(sessionStorage.getItem("useropenid")==null){
		alert("openid还没有存入")
		sessionStorage.setItem("useropenid",code)
	}else{
		console.log("存在")
		console.log(sessionStorage.getItem("useropenid"))
	}
}
