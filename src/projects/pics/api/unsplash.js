import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID C7tFlmGzrT_9duhcOJKrtS-7WZbGq67N-BOMYpAQAYM'
    }
})




