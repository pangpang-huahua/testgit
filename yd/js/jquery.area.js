


var province = 	["四川省"];
var city = 		[
					["成都市"]
				];
var district = ["锦江区", "青羊区", "金牛区", "武侯区", "成华区", "青白江区", "龙泉驿区", "新都区", "温江区", "双流区", "都江堰市", "彭州市", "崇州市", "邛崃市", "简阳市", "金堂县", "郫县", "大邑县", "蒲江县", "新津县"]
				


var expressArea, areaCont, areaList = $("#areaList"), areaTop = areaList.offset().top;

/*初始化省份*/
function intProvince() {
	expressArea = "成都市>";
	areaCont = "";
	for (var i=0; i<district.length; i++) {
		areaCont += '<li onClick="selectD(' + i + ');">' + district[i] + '</li>';
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	$("#backUp").removeAttr("onClick").hide();
}
intProvince();

/*选择区县*/
function selectD(d) {
	clockArea();
	expressArea += district[d];
	$("#expressArea input").val(expressArea);
}

/*关闭省市区选项*/
function clockArea() {
	$("#areaMask").fadeOut();
	$("#areaLayer").animate({"bottom": "-100%"});
	intProvince();
}

$(function() {
	/*打开省市区选项*/
	$("#expressArea").click(function() {
		$("#areaMask").fadeIn();
		$("#areaLayer").animate({"bottom": 0});
	});
	/*关闭省市区选项*/
	$("#areaMask, #closeArea").click(function() {
		clockArea();
	});
});