function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

document.getElementById("emailForm").addEventListener("submit", function(event) {
  const nameInput = document.getElementById("name");
  const surnameInput = document.getElementById("surname")
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value;
  const surname = surnameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    event.preventDefault();
  } else {
    alert("Thank you for contacting us, we will get back to you soon!");

     // Save form data to a text file
const formData = `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nMessage: ${message}`;
const blob = new Blob([formData], { type: "text/plain" });
const a = document.createElement("a");
a.href = URL.createObjectURL(blob);
a.download = "formData.txt";
a.style.display = "none";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
  }
});
</script>
</body>
</html>