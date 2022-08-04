const images = document.querySelectorAll(".images img");
const captions = document.querySelectorAll(".images figcaption");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

images.forEach((image, index) => {
    image.addEventListener("click", () => {
      modalImg.src = image.src;
      modalTxt.innerHTML = image.alt;
      modal.classList.add("appear");

      let imageIndex = index;
      let next = imageIndex++;
      let prev = imageIndex--;

      window.addEventListener("keyup", (e) => {
        if (next >= images.length) {
                next = 0;
              } else if (prev < 0) {
                prev = images.length - 1;
              }
  
        if (e.keyCode === 37) {
          modalImg.src = images[prev].src;
          modalTxt.innerHTML = images[prev].alt;
          prev--;
          next = prev + 2;
        } else if (e.keyCode === 39) {
          modalImg.src = images[next].src;
          modalTxt.innerHTML = images[next].alt;
          next++;
          prev = next - 2;
        } else if (e.keyCode === 27) {
          modal.classList.remove("appear");
        }
      });

      prevBtn.addEventListener("click", () => {
        modalImg.src = images[prev].src;
        modalTxt.innerHTML = images[prev].alt;
        prev--;
        next = prev + 2;
        if (prev < 0) {
          prev = images.length - 1;
        }
      });
  
      nextBtn.addEventListener("click", () => {
        modalImg.src = images[next].src;
        modalTxt.innerHTML = images[next].alt;
        next++;
        prev = next - 2;
        if (next >= images.length) {
          next = 0;
        }
      });
  
      close.addEventListener("click", () => {
        modal.classList.remove("appear");
      });
    });
  });

captions.forEach((caption, index) => {
    caption.addEventListener("click", () => {
      currentImg = document.querySelector(".images img").src;
      modalImg.src = currentImg;
      modalTxt.innerHTML = caption.innerHTML;
      modal.classList.add("appear");

      let captionIndex = index;
      let next = captionIndex++;
      let prev = captionIndex--;

      window.addEventListener("keyup", (e) => {
        if (next >= captions.length) {
                next = 0;
              } else if (prev < 0) {
                prev = captions.length - 1;
              }
  
        if (e.keyCode === 37) {
          modalImg.src = captions[prev].src;
          modalTxt.innerHTML = captions[prev].innerHTML;
          prev--;
          next = prev + 2;
        } else if (e.keyCode === 39) {
          modalImg.src = captions[next].src;
          modalTxt.innerHTML = captions[next].innerHTML;
          next++;
          prev = next - 2;
        } else if (e.keyCode === 27) {
          modal.classList.remove("appear");
        }
      });

      prevBtn.addEventListener("click", () => {
        modalImg.src = captionss[prev].src;
        modalTxt.innerHTML = captions[prev].innerHTML;
        prev--;
        next = prev + 2;
        if (prev < 0) {
          prev = captions.length - 1;
        }
      });
  
      nextBtn.addEventListener("click", () => {
        modalImg.src = captions[next].src;
        modalTxt.innerHTML = captions[next].innerHTML;
        next++;
        prev = next - 2;
        if (next >= captions.length) {
          next = 0;
        }
      });
  
      close.addEventListener("click", () => {
        modal.classList.remove("appear");
      });
    });
  });