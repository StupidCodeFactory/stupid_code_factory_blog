import * as types from './types';
import API        from '../api';
import _ from 'lodash';
export function fetchArticles() {
    return (dispatch) => {
        return API.fetchAPIarticles().then(articles => {
            dispatch(fetchArticlesSuccess(articles))
        }).catch(error => {
            throw error;
        })
    }
}

export function fetchArticlesSuccess(articles) {
    return { type: types.ARTICLES_RECEIVED, articles: _.values(articles) }
}
