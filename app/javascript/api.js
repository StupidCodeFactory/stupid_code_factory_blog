import 'whatwg-fetch';

export const getArticles = () => {
  return fetch('http://localhost:3000/api/articles.json')
    .then(res => res.json())
    .catch(err => { throw err })
}

export const getArticle = (articleId) => {
    return fetch(`http://localhost:3000/api/articles/${articleId}.json`)
        .then(res => res.json())
        .catch(err => { throw err })
}

export const getArticlePreview = (articleId, body) => {
    return fetch(
        `http://localhost:3000/api/articles/${articleId}/preview.json`,
        {
            method: 'POST',
            body: JSON.stringify({article_preview: body}),
            headers: {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .catch(err => {
            throw err
        })
}
