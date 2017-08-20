import { combineReducers } from 'redux';
import articles            from './reducers/articles';
import article             from './reducers/article';
import articlePreview      from './reducers/articlePreview';

export const reducers  = combineReducers({
    articles,
    article,
    articlePreview
});
