document.querySelectorAll(".carousel-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const track = btn.parentElement.querySelector(
      ".carousel-track, .testimonial-track"
    );
    const scrollAmount = 250;
    if (btn.classList.contains("next")) {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } else {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  });
});

const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".nav-btn.left");
const rightBtn = document.querySelector(".nav-btn.right");

leftBtn.addEventListener("click", () => {
  track.scrollBy({ left: -320, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  track.scrollBy({ left: 320, behavior: "smooth" });
});
