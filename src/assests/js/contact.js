document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("appsheet-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbzt5ZMmkUYiKPVv6lGsF9e6rSAX_Z-eWiX9vyOmca9KeHhvgoTgApZeswnlEsk9Zys7cA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Details submitted successfully! Your form has been submitted.");
        form.reset();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again.");
      });
  });
});
