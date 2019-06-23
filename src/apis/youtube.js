import axios from 'axios';

const KEY = 'AIzaSyDWann34gk_J13ljBOc7gFmXUfXLkDsSDs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});