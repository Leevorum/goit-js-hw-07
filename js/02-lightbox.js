import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
// 1)Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryDivElem = document.querySelector(".gallery");
console.log(galleryDivElem);
// делаем рендер галереии
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
                <a class="gallery__item" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>`;
    })
    .join("");
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryDivElem.insertAdjacentHTML("beforeend", galleryMarkup);
// Добавляем модалку с подписями из библиотеки
new SimpleLightbox(".gallery a", {
  // Задержка появления подписи
  captionDelay: 250,
  captionSelector: "img",
  //   Берем подпись из альта картинки
  captionsData: "alt",
  //   Ставим подпись вниз картинки
  captionPosition: "bottom"
});
