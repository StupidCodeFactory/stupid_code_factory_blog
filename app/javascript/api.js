import 'whatwg-fetch';

export const fectchAPIArticles = (url, options) => {
    return fetch(url, options).then(response => {
        if(!response.ok) {
            const error  = new Error(response.statusText);
            error.response = response;
            throw error;
        }
        return response.json();
    })
}
