import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgBox = document.querySelector('.gallery');

const markup = galleryItems.map((galleryItem) => 
`<div class="gallery__item">
<a class="gallery__link" href="${galleryItem.original}">
  <img
    class="gallery__image"
    src="${galleryItem.preview}"
    data-source="${galleryItem.original}"
    alt="${galleryItem.description}"
  />
</a>
</div>` ).join('');

imgBox.innerHTML = markup;

imgBox.addEventListener('click', onGalleryItemClick)


function onGalleryItemClick(event) { 
    event.preventDefault();                    

        if(!event.target.classList.contains('gallery__image')) {
            return;
        } const urlOriginalImg = event.target.dataset.source;             
        
 makeInstance(urlOriginalImg);  
} 


function makeInstance(urlBigImg) {
  
    const instance = basicLightbox.create(
      `<img src="${urlBigImg}">`, 
      {onClose: () => {window.removeEventListener('keydown', onEscKeyPress)},
      onShow: () => {window.addEventListener('keydown', onEscKeyPress)},
      })

      instance.show(); 
    
    function onEscKeyPress (event) {
          console.log(event.code)
          if (event.code === 'Escape') {
            instance.close()            
          } 
        }  
}

console.log(galleryItems);