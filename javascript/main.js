const images = document.querySelectorAll('.wrapper .image img');
const gallery = document.querySelector('.gallery');
const galleryShow = document.querySelector('.gallery .gallery-inner img');

const close = document.querySelector('.close');
const prev = document.querySelector('.control.prev');
const next = document.querySelector('.control.next');

let currentIndex = 0;

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    showGallery()
  })
})

function showGallery() {
  currentIndex == 0 ? prev.classList.add('hide') : prev.classList.remove('hide');
  currentIndex == images.length - 1 ? next.classList.add('hide') : next.classList.remove('hide');

  gallery.classList.add('show')
  galleryShow.src = images[currentIndex].src;
}

next.addEventListener('click', () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  showGallery();
})

prev.addEventListener('click', () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
})

close.addEventListener('click', () => {
  gallery.classList.remove('show')
})

document.addEventListener('keydown', (e) => {
  if(e.keyCode == 27) gallery.classList.remove('show');
})