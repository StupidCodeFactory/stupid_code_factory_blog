import * as types from '../actions/types';
import API from '../api';


const getArticle = (oldState, newSliceOfState) => {
    return Object.assign({}, oldState, newSliceOfState);
}

const initialState = {
    status: 'NOT_FETCHED',
    title: '',
    body: ''
};
const article = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_ARTICLE:
            return getArticle(state, {status: 'PENDING'});
        case types.ARTICLE_RECEIVED:
            return getArticle(state, {status: 'RECEIVED', ...action.payload});
        default:
            return state;
    }
}
export default article;
