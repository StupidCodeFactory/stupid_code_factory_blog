import * as types from '../actions/types';

const updateState = (oldState, newSliceOfState) => {
    return Object.assign({}, oldState, newSliceOfState);
}

const initialState = {status: 'NOT_FETCHED', data: []};

const articles =  (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_ARTICLES:
            return updateState(state, { status: 'PENDING' });
        case types.ARTICLES_RECEIVED:
            return updateState(state, { status: 'FETCHED', data: action.articles });
        case 'CREATE_ARTICLE':
            return state.concat(action.article)
        default:
            return state;
    }
}
export default articles;
