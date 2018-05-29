window.onload=function(){
	    var re=1000/750;
		rem=document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/13*re+'px';
		rem=parseInt(rem);
		document.getElementsByName('html').fontSize=rem+"px";
}
/*------页面拉伸-------*/
window.onresize=function(){
		var re=1000/750;
		rem=document.getElementsByTagName('html')[0].style.fontSize=document.documentElement.clientWidth/13*re+'px';
		rem=parseInt(rem);
		document.getElementsByName('html').fontSize=rem+"px";
		document.getElementsByName('html').minWidth=320+"px";
		document.getElementsByName('html').overFlow="auto";
	}
