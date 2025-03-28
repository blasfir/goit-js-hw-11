import axios from 'axios';
/*функції для відображення елементів інтерфейсу (додавання, оновлення, очищення елементів галереї; відображення, приховування лоедера)*/

export function renderGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        const liEl = document.createElement('li');
        liEl.classList.add("gallery-item");
        const aEl = document.createElement('a');
        aEl.classList.add("gallery-link");
        const imgEl = document.createElement('img');
        imgEl.classList.add("gallery-image");
        aEl.addEventListener("click", (event) => event.preventDefault());
        imgEl.src = webformatURL;
        imgEl.alt = tags;
        imgEl.width = 360;
        imgEl.height = 200;
        liEl.style.listStyleType = 'none';
        liEl.append(aEl);
        aEl.append(imgEl);
        return liEl;
    });

};