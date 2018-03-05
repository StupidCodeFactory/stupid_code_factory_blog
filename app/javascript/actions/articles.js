import * as types      from './types';
import {
  getArticles,
  getArticle,
  getArticlePreview,
  updateArticle,
  postArticle
} from '../api';
import _ from 'lodash';

export const fetchArticles = () => {
  return (dispatch) => {
    getArticles()
      .then(articles => {
        dispatch(fetchArticlesSuccess(articles))
      })
      .catch(error => {
        throw error
      })
  }
}

export const fetchArticle = (articleId) => {
  return (dispatch) => {
    getArticle(articleId)
      .then(article => {
        dispatch(fetchArticleSuccess(article))
      })
      .catch(error => {
        throw error
      })
  }
}

export const fetchArticlePreview = (articleId, body) => {
  return (dispatch) => {
    getArticlePreview(articleId, body)
      .then(articlePreview => {
        dispatch(fetchArticlePreviewSuccess(articlePreview.article_preview))
      })
      .catch(error => {
        dispatch(fetchArticlePreviewFailed(error))
      })
  }
}

export const saveArticle = (articleId, payload) => {
  return (dispatch) => {
    updateArticle(articleId, payload)
      .then(article => {
        dispatch(fetchArticleSuccess(article))
      })
      .catch(error => {
        throw error
      })
  }
}

export const createArticle = (payload) => {
  console.log(payload)
  return (dispatch) => {
    postArticle(payload)
      .then(article => {
        dispatch(fetchArticleSuccess(article))
      })
      .catch(error => {
        throw error
      })
  }
}

export const fetchArticlesSuccess = articles => {
  return { type: types.ARTICLES_RECEIVED, articles: _.values(articles) }
}

export const fetchArticleSuccess = article => {
  return { type: types.ARTICLE_RECEIVED, payload: article }
}

export const fetchArticlePreviewSuccess = articlePreview => {
  return { type: types.ARTICLE_PREVIEW_RECEIVED, payload: articlePreview }
}

export const fetchArticlePreviewFailed = err => {
  return { type: types.ARTICLE_PREVIEW_FAILED, payload: err }
}
