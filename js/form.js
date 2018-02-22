$(document).ready(function() {

	$("input[type=text]").on("propertychange change click keyup input paste", function() {
		var element = this;
		setTimeout(function () {
			if (!$(element).val()) {
				if ($(element).prev("span").hasClass("selected")) {
					$(element).prev("span").removeClass("selected");
					}
				}
			else {
				if (!$(element).prev("span").hasClass("selected")) {
					$(element).prev("span").addClass("selected");
					}
				}
			}, 100);
		});

		$("div.message > textarea").on("propertychange change click keyup input paste", function() {
			var element = this;
			setTimeout(function () {
				if (!$(element).val()) {
					if ($(element).prev("span").hasClass("selected")) {
						$(element).prev("span").removeClass("selected");
						}
					}
				else {
					if (!$(element).prev("span").hasClass("selected")) {
						$(element).prev("span").addClass("selected");
						}
					}
				}, 100);
			});


	});
