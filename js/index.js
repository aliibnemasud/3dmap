const popup = document.querySelector("#popup-container");

function showPopup(data) {
  popup.innerHTML = data;
  popup.style.display = "block";
}

function hidePopup() {
  popup.style.display = "none";
  document.removeEventListener("click", hidePopupOnClickOutside);
}

function hidePopupOnClickOutside(event) {
  if (!popup.contains(event.target)) {
    hidePopup();
  }
}
