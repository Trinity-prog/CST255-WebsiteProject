function toggleCareerDetails(detailsButton) {
const careerDetails = detailsButton.nextElementSibling;	
	if (careerDetails.style.display === "none" || careerDetails.style.display === "") {
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
function setFormMessage(text, type) {
	var el = document.getElementById('form-message');
	el.textContent = text;
	el.className = type === 'error' ? 'form-error' : 'form-success';
}

function validateContactForm() {
	var nameEl = document.getElementById('name');
	var emailEl = document.getElementById('email');
	var reasonEl = document.getElementById('reason');
	var messageEl = document.getElementById('message');

	[nameEl, emailEl, reasonEl, messageEl].forEach(function(i){ i.removeAttribute('aria-invalid'); });

	var name = nameEl.value.trim();
	var email = emailEl.value.trim();
	var reason = reasonEl.value.trim();
	var message = messageEl.value.trim();

	if (!name) { nameEl.setAttribute('aria-invalid','true'); setFormMessage('Please enter your name.', 'error'); nameEl.focus(); return false; }
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!email || !emailRegex.test(email)) { emailEl.setAttribute('aria-invalid','true'); setFormMessage('Please enter a valid email address.', 'error'); emailEl.focus(); return false; }
	if (!reason) { reasonEl.setAttribute('aria-invalid','true'); setFormMessage('Please select a reason.', 'error'); reasonEl.focus(); return false; }
	if (!message) { messageEl.setAttribute('aria-invalid','true'); setFormMessage('Please enter a message.', 'error'); messageEl.focus(); return false; }

	setFormMessage('Thank you — your message was sent.', 'success');
	setTimeout(function(){ document.getElementById('contact-form').reset(); }, 1600);
	return false;
}

// attach unobtrusive submit handler
document.addEventListener('DOMContentLoaded', function() {
	var form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			validateContactForm();
		});
	}
});



