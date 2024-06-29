const colorInputs = document.querySelectorAll("input[type=color]");
colorInputs.forEach((input) => {
	input.addEventListener("input", (e) => {
		const [elementId, value] = [e.target.getAttribute("id"), e.target.value];
		if (elementId === "firstClr") {
			document.documentElement.style.setProperty("--bg-gradient-clr-1", value);
		} else if (elementId === "secondClr") {
			document.documentElement.style.setProperty("--bg-gradient-clr-2", value);
		}
	});
});
