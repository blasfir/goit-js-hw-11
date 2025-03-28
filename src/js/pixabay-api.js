import axios from 'axios';
import "izitoast/dist/css/iziToast.min.css";

/*функції для HTTP-запитів*/

const API_KEY = "49579277-0e5c9424e57356edf9014d49e";
const BASE_URL = "https://pixabay.com/api/";

export function lookingForImages(keyword) {
    return axios.get(BASE_URL, {
            params: {
		        key: API_KEY,
                q: keyword,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true
	        }
        }
    )
    .then(response => { return response.data.hits })
    .catch(error => {
        return [];
    });
}