function toggleCareerDetails(detailsButton) {
const careerDetails = detailsButton.nextElementSibling;	
	if (careerDetails.style.display === "none") {
	careerDetails.style.display = "block";
	detailsButton.textContent = "Hide Career Details";
} else {
	careerDetails.style.display = "none";
	detailsButton.textContent = "Show Career Details";
	}
}
function showCareerMessage() {
	alert("Thank you for visisting my career goals website!");
}

