import * as types from '../actions/types';
import API from '../api';

const initialState = {status: 'NOT_FETCHED', data: []};

const articles =  (state = initialState, action) => {

    switch(action.type) {
        case types.FETCH_ARTICLES:
            return Object.assign(
                {}, state, { status: 'PENDING' }
            );
        case types.ARTICLES_RECEIVED:
            return Object.assign(
                {}, state, { status: 'FETCHED', data: action.articles }
            );
        case 'CREATE_ARTICLE':
            return state.concat(action.article)
        default:
            return state;
    }
}
export default articles;
