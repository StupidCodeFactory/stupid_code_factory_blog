import 'whatwg-fetch';

export default class API {
  static fetchAPIarticles() {
    return fetch('http://localhost:3000/api/articles.json')
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      })
  }
}
