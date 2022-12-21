import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const makeGalleryItemsMarkup = (images) =>
  images
    .map(
      ({ preview, original, description }) => `
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      `
    )
    .join("");

galleryRef.insertAdjacentHTML("beforeend", makeGalleryItemsMarkup(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
});
