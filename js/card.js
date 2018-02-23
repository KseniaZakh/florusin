$(document).ready(function() {

	$("ul.gallery > li").click(function() {
		$("ul.gallery > li").removeClass("selected");
			$(this).addClass("selected");
			var image = $(this).html();
			$("div.card_photo > div:first-child").html(image);
		});

		$("ul.card_choiсe > li").click(function() {
			$(this).data("class");
			$("ul.card_choiсe > li").removeClass("selected");
			$(this).addClass("selected");
			$("div.card").hide();
			$("div." + $(this).data("class")).show();
		});

});
