
document.getElementById("submit-button").addEventListener("click", function (event) {
event.preventDefault(); 
var userNameInput = document.getElementById("user-name");
var userEmailInput = document.getElementById("user-email");
var userMessageInput = document.getElementById("user-message");
   
   
if (userNameInput.value !== "" && userEmailInput.value !== "" && userMessageInput.value !== "") {
var contactPage = document.getElementById("contact-page");
var paragraphElement = document.createElement("p");
paragraphElement.textContent = "Your message has been received! Happy Gardener!";
paragraphElement.classList.add("user-message"); 
contactPage.innerHTML = ""; 
contactPage.appendChild(paragraphElement);
}
});
