import axios from 'axios';
const KEY = 'AIzaSyB8EEpxcGhgp5kH743SMtH5uBxUrU7hgVw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})