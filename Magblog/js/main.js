window.onload = function() {
	var modalPane = document.querySelector(".modal");

	modalPane.addEventListener("click", function(event) {
		var event = event || window.event,
			target = event.target || event.srcElement;

		if (target.tagName === "BUTTON") {
			modalPane.style.display = "none";
		}
	}, true);
};