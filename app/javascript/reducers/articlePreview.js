import * as types from '../actions/types';

const initialState = {
  status: 'NOT_FETCHED',
  articlePreview: ''
};

const articlePreview = (state = initialState, action) => {
  switch(action.type) {
    case types.ARTICLE_PREVIEW_RECEIVED:
      return Object.assign(state, action.payload);
    case types.ARTICLE_PREVIEW_FAILED:
      return Object.assign(state, action.payload.message);
    default:
      return state;
  }
}
export default articlePreview;
