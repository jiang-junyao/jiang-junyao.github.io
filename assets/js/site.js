const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
  });
}

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryCards = document.querySelectorAll(".gallery-card");
const gallerySections = document.querySelectorAll("[data-category-section]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    galleryCards.forEach((card) => {
      const visible = filter === "all" || card.dataset.category === filter;
      card.hidden = !visible;
    });

    gallerySections.forEach((section) => {
      const visible = filter === "all" || section.dataset.categorySection === filter;
      section.hidden = !visible;
    });
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxTitle = document.querySelector(".lightbox-caption strong");
const lightboxPlace = document.querySelector(".lightbox-caption span");
const lightboxClose = document.querySelector(".lightbox-close");

function closeLightbox() {
  if (!lightbox) return;
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-active");
  if (lightboxImage) lightboxImage.src = "";
}

document.querySelectorAll(".gallery-open").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxPlace) return;
    lightboxImage.src = button.dataset.full;
    lightboxImage.alt = button.dataset.title || "Expanded gallery image";
    lightboxTitle.textContent = button.dataset.title || "";
    lightboxPlace.textContent = button.dataset.place || "";
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-active");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
