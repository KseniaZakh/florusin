function resize () {
	if ($("div.container > nav").length!=0 &&
	$("header > div > ul").length!=0) {
		if ($("div.container > nav").hasClass("opened") &&
		 $("header > div > ul").hasClass("opened")) {
					$("div.container > nav").removeClass("opened");
					$("header > div > ul").removeClass("opened");
			}
		}

		if ($("div.container > footer").length!=0) {
			var footer_height = $("div.container > footer").outerHeight();
			$("div.container").css({"padding-bottom" : footer_height + 70 + "px"});
		}
	}

$(document).ready(function() {
	$("header > div > ul").click(function() {
		if ($("div.container > nav").length!=0) {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$("div.container > nav").removeClass("opened");
			}
		else {
			$(this).addClass("opened");
			$("div.container > nav").addClass("opened");
			}
			}
		});
		$("div.container > nav").click(function() {
			if ($(this).hasClass("opened")) {
				$(this).removeClass("opened");
				$("header > div > ul").removeClass("opened");
				}
		});
		return false;
	});
