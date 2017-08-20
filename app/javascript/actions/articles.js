import * as types      from './types';
import { getArticles, getArticle, getArticlePreview } from '../api';
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

export const fetchArticlePreview = (articleId) => {
  return (dispatch) => {
    getArticlePreview(articleId)
      .then(article => {
        dispatch(fetchArticlePreviewSuccess(articlePreview))
      })
      .catch(error => {
        dispatch(fetchArticlePreviewFailed(error))
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
