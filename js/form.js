function isName(name) {
	var regex = new RegExp(/^([а-яА-Яa-zA-Z _.-]{3,30})+$/);
	return regex.test(name);
}

function isEmail(email) {
	var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return regex.test(email);
}

$(document).ready(function() {

	$(".field").on("blur", function() {
		if (!$(this).val()) {
			if ($(this).prev("span").hasClass("selected")) {
				$(this).prev("span").removeClass("selected");
				}
			}
		else {
			if (!$(this).prev("span").hasClass("selected")) {
				$(this).prev("span").addClass("selected");
				}
			}
		});

	$(".field").on("propertychange change click keyup input paste", function() {
		var element = this;
		if (!$(element).prev("span").hasClass("selected")) {
			$(element).prev("span").addClass("selected");
			}
		setTimeout(function () {
			if (!$(element).val()) {
				if ($(element).hasClass("error")) {
					$(element).removeClass("error");
					}
				if ($(element).hasClass("success")) {
					$(element).removeClass("success");
					}
				}
			else {
				if ($(element).parent("li").hasClass("required")) {
					if ($(element).attr("name") == "username") {
						var result = isName($(element).val());
						}
					if ($(element).attr("name") == "user_email") {
						var result = isEmail($(element).val());
						}
					if (!result) {
						if (!$(element).hasClass("error")) {
							$(element).removeClass("success").addClass("error");
							}
						}
					else {
						if (!$(element).hasClass("success")) {
							$(element).removeClass("error").addClass("success");
							}
						}
					}
				}

				if ($(".required > input").length != $(".required > input.success").length) {
					if ($("button.submit").hasClass("active")) {
						$("button.submit").removeClass("active");
						}
					}
					else {
						if (!$("button.submit").hasClass("active")) {
							$("button.submit").addClass("active");
						}
					}
			}, 100);

		});

	$("span.checkbox").on ("click",function() {
		if (!$(this).hasClass("checked")) {
				$(this).addClass("checked");
				if ($(this).prev("input").length!=0) {
					$(this).prev("input").prop("checked", true);
					$(this).prev("input").addClass("success");
				}
			}
			else {
				$(this).removeClass("checked");
				if ($(this).prev("input").length!=0) {
					$(this).prev("input").prop("checked", false);
				}
			}
		});

	});
