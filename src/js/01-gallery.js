import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox)
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const listObj = {images: document.querySelector(".gallery")};
const newEl = galleryItems.reduce((acc, picture) => acc + `
<a class="gallery__item" href="${picture.original}">
  <img class="gallery__image" src="${picture.preview}" alt="${picture.description}" title="${picture.description}"/>
</a>`,``)
listObj.images.insertAdjacentHTML(`beforeend`, newEl);
 const arrGallery = document.querySelector(".gallery")
 console.log(arrGallery);

 var lightbox = new SimpleLightbox('.gallery a', { captionsData : `alt`,
    captionPosition: `bottom`,
    captionDelay: 250,
    navText:['<','>'],
    close: false,
    animationSpeed: 300,
    })

 arrGallery.addEventListener("click", showGallery);
 function showGallery (evt){
   evt.preventDefault(); 
}