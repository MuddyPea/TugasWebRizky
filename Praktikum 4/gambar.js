const images = document.querySelectorAll('.slider img');
let idx = 0;

function run() {
  idx++;
  if (idx > images.length - 1) {
    idx = 0;
  }
  images.forEach(img => img.classList.remove('active'));
  images[idx].classList.add('active');
}

setInterval(run, 2000);
