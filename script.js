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
function validateContactForm() {
	var name = document.getElementByID("name").value.trim();
	var email = document.getElementByID("email").value.trim();
	var reason = document.getElementByID("reason").value.trim();
	var message = document.getElementByID("message").value.trim();
	var form-message = document.getElementByID("form-message").value.trim();
	if (name === "" || email === "" || reason === "" || message === "") {
	formMessage.textContent = "Please complete all fields before submitting.";
	formMessage.style.color = "Red";
	return false;
}
if (!email.includes("@")) {
		formMessage.textContent = "Please enter a valid email address.";
		formMessage.style.color = "Red";
		return false;
}
formMessage.textContent = "Thank You! Your form was completed successfully.";
formMessage.style.color = "Green";
document.getElementByID("contact-form").reset();
return false;
}



