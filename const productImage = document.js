const productImage = document.getElementById("product-image");
const popup = document.getElementById("popup");

// Rotate on mouse move
let rotation = 0;
productImage.addEventListener("mousemove", (e) => {
  rotation = (e.clientX / window.innerWidth) * 360;
  productImage.style.transform = rotateY(${rotation}deg);
});

// Zoom on wheel
productImage.addEventListener("wheel", (e) => {
  e.preventDefault();
  let scale = parseFloat(productImage.style.scale || 1);
  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(0.5, scale), 2); // limit zoom
  productImage.style.scale = scale;
});

// Show popup on click
productImage.addEventListener("click", () => {
  popup.classList.toggle("visible");
});