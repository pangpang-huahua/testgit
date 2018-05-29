$("#tijiao").click(function() {
					if($("#username").val() != "" && $("#usertel").val() != "") {
						$.ajax({
							type: "get",
							url: "/api/feedback/add",
							data: {
								name: $("#username").val(),
								phone: $("#usertel").val(),
								email: $("#useremail").val(),
								feedbackContent: $("#usermark").val()
							},
							dataType: "json",
							async: true,
							success: function() {
								$("#username").val("");
								$("#usertel").val("");
								$("#useremail").val("");
								$("#usermark").val("");
								$("#errotishibtn").text("成功");
								$("#errotishibtn").fadeIn();
								setTimeout(function() {
									$("#errotishibtn").fadeOut();
								}, 2000)
							},
							error: function() {

							}
						});
					} else {
						$("#errotishibtn").fadeIn();
						setTimeout(function() {
							$("#errotishibtn").fadeOut();
						}, 2000)
					}
				})