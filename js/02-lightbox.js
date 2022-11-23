import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeGalleryItemEl = ({ preview, description, original }) => {
  return `<a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>`;
};

const galleryList = galleryItems.map(makeGalleryItemEl).join("");
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captoinsDelay: 250,
});






