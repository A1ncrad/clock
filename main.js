const secondHand = document.getElementById("seconds");
const minuteHand = document.getElementById("minutes");
const hourHand = document.getElementById("hours");
const clockSound = document.getElementById("clock-sound");
const message = document.getElementById("message");

let canplay = false;

function enableSound() {
	message.hidden = true;
	canplay = true;
}


function rotate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secondsDegree = seconds / 60 * 360 + 90;
	const minutesDegree = minutes / 60 * 360 + 90;
	const hoursDegree = hours / 12 * 360 + 90;


	if (secondsDegree == 444) {
		secondHand.style.transition = "none";
		setTimeout(() => secondHand.style.transition = ".3s cubic-bezier(0.77, -0.93, 0.38, 2.44)", 1300);
	}

	if (minutesDegree == 444) {
		minuteHand.style.transition = "none";
		setTimeout(() => minuteHand.style.transition = ".3s cubic-bezier(0.77, -0.93, 0.38, 2.44)", 1300);
	}

	if (hoursDegree == 444) {
		hourHand.style.transition = "none";
		setTimeout(() => hourHand.style.transition = ".3s cubic-bezier(0.77, -0.93, 0.38, 2.44)", 1300);
	}

	secondHand.style.transform = `rotate(${secondsDegree}deg)`;
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`;
	hourHand.style.transform = `rotate(${hoursDegree}deg)`;

	if (canplay) {
		clockSound.currentTime = 0;
		clockSound.play();
	}
}


rotate();
setInterval(rotate, 1000);