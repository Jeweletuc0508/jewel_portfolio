
console.log("Welcome to Jewel Heart Geronimo's Portfolio!");

const images = document.querySelectorAll(".project-card img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// Kapag pinindot ang image
images.forEach((img, index) => {
  img.style.cursor = "pointer"; // para alam na clickable
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
    currentIndex = index;
  });
});

// Close modal
closeBtn.onclick = () => { modal.style.display = "none"; };

// Next
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
};

// Previous
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  caption.innerHTML = images[currentIndex].alt;
};

// Para kapag nag-click sa labas ng image, magsara
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
