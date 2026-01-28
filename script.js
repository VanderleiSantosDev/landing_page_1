document.getElementById("cta-btn").addEventListener("click", function() {
  document.getElementById("custom-alert").classList.remove("hidden");
});

document.getElementById("close-alert").addEventListener("click", function() {
  document.getElementById("custom-alert").classList.add("hidden");
});

