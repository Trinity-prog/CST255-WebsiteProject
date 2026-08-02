documnet.addEventListener("DOMContentLoaded", function() {
const detailsButton = document.getElementById("details-button");
const careerDetails = document.getElementById("career-button");
const messageButton = document.getElementById("message-button");

detailsButton.addEventListener("click", function() {
	if (careerDetails.style.display === "none") {
	careerDetails.style.display = "block";
	detailButton.textContent = "Hide Career Details";
} else {
	careerDetails.style.display = "none";
	detailButton.textContent = "Show Career Details";
	}
});

messageButton.addEventListener("click", function() {
	alert("Thank you for visisting my career goals website!");
});
});
