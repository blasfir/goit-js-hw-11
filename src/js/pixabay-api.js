import axios from "axios";

const API_KEY = "49579277-0e5c9424e57356edf9014d49e";
const BASE_URL = "https://pixabay.com/api/";

export function lookingForImages(keyword) {
    return axios.get(BASE_URL, {
        params: {
            key: API_KEY,
            q: keyword,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    })
    .then(response => response.data.hits)
    .catch(error => {
        return [];
    });
}
