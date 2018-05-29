window.onload = function() {
//	alert("执行")
				var div2 = document.getElementById("div2");
				var div1 = document.getElementById("div1");
				var kdazAdz = document.getElementById("kdazAdz");
				div2.onclick = function() {
					div1.className = (div1.className == "close1") ? "open1" : "close1";
					div2.className = (div2.className == "close2") ? "open2" : "close2";
					div2.innerText = (div2.className == "close2") ? "无" : "有";
					kdazAdz.style.display = (div2.className == "close2") ? "none" : "block";
				}
			}