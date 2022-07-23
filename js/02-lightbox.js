import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgBox = document.querySelector('.gallery');

const markup = galleryItems.map((galleryItem) => 
`<a class="gallery__item" href="${galleryItem.original}" >
  <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
</a>`).join('');

imgBox.innerHTML = markup;


let gallery = new SimpleLightbox('.gallery a', 
    {captions: true, 
    captionsData: 'alt', 
    captionDelay: 250});