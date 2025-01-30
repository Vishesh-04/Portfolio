function hidePreloader() {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    // Delay before fading out (e.g., show preloader for 3 seconds)
    setTimeout(() => {
      preloader.style.opacity = "0";

      // Give time for fade-out animation, then remove it
      setTimeout(() => {
        preloader.style.display = "none";
      }, 1000); // Adjust this time to match the fade-out effect
    }, 3000); // 3-second delay before starting fade-out
  }
}

window.addEventListener("load", hidePreloader);

document.addEventListener("DOMContentLoaded", () => {
  const typedItems = document
    .querySelector("#typed")
    .dataset.typedItems.split(", ");
  new Typed("#typed", {
    strings: typedItems,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
});