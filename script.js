var myNumber = "918287735448";

var form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
  // stop the page from reloading
  event.preventDefault();

  // get the values from the form
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // make the message that will come on whatsapp
  var text =
    "*New message from my portfolio*\n\n" +
    "*Name:* " + name + "\n" +
    "*Email:* " + email + "\n" +
    "*Message:* " + message;

  // make the whatsapp link (encodeURIComponent keeps spaces and symbols safe)
  var url = "https://wa.me/" + myNumber + "?text=" + encodeURIComponent(text);

  // open whatsapp in a new tab
  window.open(url, "_blank");

  // clear the form
  form.reset();
});
