import { lookingForImages } from './js/pixabay-api.js';
import iziToast from "izitoast";
import groupSvg from "./img/group.svg"; 

const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".s-t-npt");

inputEl.addEventListener("click", () => {
    inputEl.style.borderColor = "#4E75FF";
    inputEl.style.color = "#2E2F42";
});

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    if (inputEl.value.trim() === "") {
        return;
    } else {
        lookingForImages(inputEl.value)
        .then(response => { return response.data.hits })
        .catch(error => {
        iziToast.show({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            messageColor: '#ffffff',
            messageSize: '16px',
            messageLineHeight: '88px',
            backgroundColor: '#EF4040',
            iconColor: '#ffffff',
            position: 'topRight',
            progressBarColor: '#B51B1B',
            maxWidth: '432px',
            iconUrl: groupSvg
        })
        return [];
        })
    }
});