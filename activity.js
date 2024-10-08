let btn = document.querySelector("button");
btn.addEventListener("click", function () {
	let random = randomColor();
	let h1 = document.querySelector("h1");
	h1.innerText = random;
	let div = document.querySelector("div");
	div.style.backgroundColor = random;
	console.log("color updated");
});

function randomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let random = `rgb(${red},${green},${blue})`;
	return random;
}
