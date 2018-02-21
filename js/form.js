$(document).ready(function() {

	$("input[type=text]").on("propertychange change click keyup input paste", function() {
		var element = this;
		setTimeout(function () {
			if (!$(element).val()) {
				if ($(element).next("span").hasClass("selected")) {
					$(element).next("span").removeClass("selected");
					}
				}
			else {
				if (!$(element).next("span").hasClass("selected")) {
					$(element).next("span").addClass("selected");
					}
				}
			}, 100);
		});

	});
