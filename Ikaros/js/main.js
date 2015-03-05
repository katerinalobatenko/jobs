window.onload = function() {
	initCarousel();
}

window.onresize = function() {
	initCarousel();
}

function initCarousel() {
	var holder = document.querySelector(".carousel-holder"),
		ul = holder.querySelector("ul.carousel"),
		item = document.querySelectorAll(".carousel li"),
		img = item[0].querySelector("img"),
		imgWidth = parseInt( window.getComputedStyle(img).width );

	ul.style.marginLeft = "0";
	var ulWidth = setListWidth(ul, imgWidth);

	for (var i = item.length; i--; ) {
		item[i].style.width = imgWidth + "px";
	}

	holder.onclick = function(event) {
		var event = event || window.event,
			target = event.target || event.srcElement,
			currMarg = parseInt( ul.style.marginLeft );

		if ( ~target.className.search(/next/) ) {

			if ( Math.abs(currMarg) < ( ulWidth - imgWidth ) ) {
				ul.style.marginLeft = currMarg - imgWidth +"px";
			}
		}

		if ( ~target.className.search(/prev/) ) {

			if (Math.abs(currMarg) != 0) {
				ul.style.marginLeft = parseInt( ul.style.marginLeft )  + imgWidth +"px";
			}

		}

		return false;
	}

	function setListWidth(list, imgWidth) {
		var count = list.getElementsByTagName("LI").length;
		return imgWidth * count;
	}
}