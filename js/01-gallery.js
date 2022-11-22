import { galleryItems } from './gallery-items.js';

const makeGalleryItemEl = ({ preview, description, original }) => {
    return `<div class = "gallery__item"><a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>`;
};

const galleryList = galleryItems.map(makeGalleryItemEl).join("");

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", galleryList);
console.log(galleryItems);

gallery.addEventListener("click", ImageClick);

const galleryItem = document.querySelector(".gallery__item");


function ImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
      return;
    }
    const instance = basicLightbox.create(
      `<img src="${e.target.dataset.source}" width="800" height="600">`,
    );
    instance.show();

    gallery.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            instance.close();
        }
    });
};

//--------------------------------------
/* gallery.addEventListener("click", (e) => {

    if (e.target.nodeName === "IMG") {
       return;
    }
}); */

/* const instance = basicLightbox.create(
  `<img src="${e.target.dataset.source}" width="800" heigth="600">`,
);
instance.show();
function onEscapeButton(e) {
  if (e.key === "Escape") {
    instance.close();
  }
}; */
//--------------------------------------------


/*   {
    onShow: (instance) => {
      gallery.addEventListener("keydown", onEscapeButton);
    },
    onClose: (instance) => {
      gallery.removeEventListener("keydown", onEscapeButton);
    },
  } */


/* import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`);

instance.show(); */

