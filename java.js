document.addEventListener("DOMContentLoaded", () => {
  // Function to open the popup with title and details
  function openPopup(title, details) {
      document.getElementById("popupTitle").textContent = title;
      document.getElementById("popupDetails").textContent = details;
      document.getElementById("popupModal").style.display = "flex";
  }

  // Function to close the popup
  function closePopup() {
      document.getElementById("popupModal").style.display = "none";
  }

  // Add click event to each vehicle image
  document.querySelectorAll(".vehicle").forEach(img => {
      img.addEventListener("click", () => {
          const title = img.getAttribute("data-title");
          const details = img.getAttribute("data-details");
          openPopup(title, details);
      });
  });

  
  document.querySelector(".close_btn").addEventListener("click", closePopup);

  
  window.addEventListener("click", function(event) {
      const modal = document.getElementById("popupModal");
      if (event.target === modal) {
          closePopup();
      }

 });
});
function filterCars() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementsByClassName('car-card');
    for (let card of cards) {
      let title = card.querySelector('h3').innerText.toLowerCase();
      card.style.display = title.includes(input) ? 'block' : 'none';
    }
  }
  function submitForm() {
    alert("Thank you for contacting us!");
    return false; // prevent real submit
  }
  let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel .car-card');
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + document.querySelectorAll('.carousel .car-card').length) % document.querySelectorAll('.carousel .car-card').length;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % document.querySelectorAll('.carousel .car-card').length;
  showSlide(slideIndex);
}