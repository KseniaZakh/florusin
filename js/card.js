$(document).ready(function() {

	$("ul.gallery > li").click(function() {
		$("ul.gallery > li").removeClass("selected");
			$(this).addClass("selected");
			var image = $(this).html();
			$("div.card_photo > div:first-child").html(image);
		});

		$("ul.card_choiсe > li").click(function() {
			$("ul.card_choiсe > li").removeClass("selected");
			$(this).addClass("selected");
				if ($("ul.card_choiсe > li:first-child").hasClass("selected")) {
				$("div.price").hide();
				$("div.description").show();
			}
			if ($("ul.card_choiсe > li:last-child").hasClass("selected")) {
				$("div.description").hide();
				$("div.price").show();
			}
		});

		// $("form ul span").click(function() {
		// 	$(this).addClass("selected");
		// 	$("form ul > li").removeClass("required").addClass("required2");
		// });
});
