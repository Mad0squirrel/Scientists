


		$(document).on("scroll", function () {
			if($(window).scrollTop() === 0)
				$("header").removeClass("fixed");
			else
				$("header").attr("class", "fixed");
		});

				function readMore(i) {
			var dots = document.getElementById("dots"+i);
			var more = document.getElementById("more"+i);
			var btn = document.getElementById("btn"+i);

			if (dots.style.display === "none") {
				dots.style.display = "inline";
				btn.innerHTML = "Подробнее";
				more.style.display = "none";
			} else {
				dots.style.display = "none";
				btn.innerHTML = "Скрыть";
				more.style.display = "inline";
			}
		}