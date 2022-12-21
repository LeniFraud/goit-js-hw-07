import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const makeGalleryItemsMarkup = (images) =>
  images
    .map(
      ({ preview, original, description }) => `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
          />
        </a>
      </div>
    `
    )
    .join("");

galleryRef.insertAdjacentHTML("beforeend", makeGalleryItemsMarkup(galleryItems));

galleryRef.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImgRef = event.target.classList.contains("gallery__image");
  const imageSource = event.target.dataset.source;

  if (!isImgRef) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
`);

  instance.show();

  if (instance.visible()) {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        instance.close();
      }
    });
  }
}
