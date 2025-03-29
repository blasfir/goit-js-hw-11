import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { lookingForImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import groupSvg from "./img/group.svg";

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".s-t-npt");

inputEl.addEventListener("click", () => {
    inputEl.style.borderColor = "#4E75FF";
    inputEl.style.color = "#2E2F42";
});

formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = inputEl.value.trim();

    if (!query) return;

    clearGallery();
    showLoader();

    lookingForImages(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.show({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    messageColor: '#ffffff',
                    backgroundColor: '#EF4040',
                    iconColor: '#ffffff',
                    position: 'topRight',
                    progressBarColor: '#B51B1B',
                    maxWidth: '432px',
                    iconUrl: groupSvg
                });
            } else {
                renderGallery(images);
            }
        })
        .finally(() => {
            hideLoader();
        });
});
