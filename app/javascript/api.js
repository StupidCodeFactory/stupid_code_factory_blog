import 'whatwg-fetch';
import Authentication from './authenticity';

export const getArticles = () => {
  return fetch('http://localhost:3000/api/articles.json')
    .then(res => res.json())
    .catch(err => { throw err })
}

export const getArticle = (articleId) => {
  return fetch(`/api/articles/${articleId}.json`)
    .then(res => res.json())
    .catch(err => { throw err })
}

export const getArticlePreview = (articleId, body) => {
  const headers    = {"Content-Type": "application/json"};
  const authHeader = Authentication.authenticityHeaders(headers);

  return fetch(
    `/api/articles/${articleId}/preview.json`,
    {
      method: 'POST',
      body: JSON.stringify({preview: body}),
      headers: authHeader
    })
    .then(res => res.json())
    .catch(err => {
      throw err
    })
}

export const updateArticle = (articleId, payload) => {
  const headers    = {"Content-Type": "application/json"};
  const authHeader = Authentication.authenticityHeaders(headers);
  return fetch(
    `/api/articles/${articleId}.json`,
    {
      method: 'PATCH',
      body: JSON.stringify(payload),
      headers: authHeader
    })
    .then(res => res.json())
    .catch(err => {
      throw err
    })
}

export const createArticle = (payload) => {
  const headers    = {"Content-Type": "application/json"};
  const authHeader = Authentication.authenticityHeaders(headers);
  return fetch(
    `/api/articles/new.json`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: authHeader
    })
    .then(res => res.json())
    .catch(err => {
      throw err
    })
}
