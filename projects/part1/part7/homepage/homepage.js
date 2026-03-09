const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);

  if (formMessage) {
    formMessage.textContent = "Sending...";
    formMessage.className = "form-message";
  }

  try {
    const response = await fetch("https://formsubmit.co/ajax/nishantmc03@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("RESPONSE:", data);

    if (response.ok) {
      if (formMessage) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.className = "form-message success";
      }
      contactForm.reset();
    } else {
      if (formMessage) {
        formMessage.textContent = "Something went wrong.";
        formMessage.className = "form-message error";
      }
    }
  } catch (error) {
    console.log("ERROR:", error);

    if (formMessage) {
      formMessage.textContent = "Error sending message.";
      formMessage.className = "form-message error";
    }
  }
});