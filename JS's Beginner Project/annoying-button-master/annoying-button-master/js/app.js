console.clear();

const unsubscribeContainer = document.getElementById("unsubscribe--container");
const optionsContainer = document.getElementById("options--container");
const unsubscribeBtn = document.getElementById("unsubscribe-btn");
const acceptBtn = document.getElementById("accept-btn");
const rejectBtn = document.getElementById("reject-btn");
const unsubscribedMessage = document.getElementById("unsubscribed--message");

unsubscribeBtn.addEventListener("click", () => {
	optionsContainer.classList.remove("hidden");
	unsubscribeContainer.classList.add("hidden");
});

const onAccept = () => {
	unsubscribedMessage.classList.remove("hidden");
	unsubscribeContainer.classList.add("hidden");
	optionsContainer.classList.add("hidden");
};

const onReject = () => {
	x = 0;
	y = 0;
	optionsContainer.classList.add("hidden", "relative");
	acceptBtn.removeAttribute("style");
	acceptBtn.style.transform = "none";
	unsubscribeContainer.classList.remove("hidden");
};

const onMouseMove = (e) => {
	if (!optionsContainer.classList.contains("hidden")) {
		optionsContainer.classList.remove("relative");
		acceptBtn.style.transform = `translate(-50%, -50%)`;
		updateBtnPosition(e);
	}
};

let x = 0,
	y = 0,
	angle = 0,
	segLength = 80;

function updateBtnPosition(e) {
	let dx = e.x - x;
	let dy = e.y - y;
	angle = Math.atan2(dy, dx);
	x = e.x - Math.cos(angle) * segLength;
	y = e.y - Math.sin(angle) * segLength;

	acceptBtn.style.left = `${x}px`;
	acceptBtn.style.top = `${y}px`;
}

acceptBtn.addEventListener("click", onAccept);
rejectBtn.addEventListener("click", onReject);
window.addEventListener("mousemove", onMouseMove);

const getPropertyValue = (el, property) => window.getComputedStyle(el)[property];
