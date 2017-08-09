import { combineReducers } from 'redux';
import ArticlesReducer from './reducers/articles';

export const reducers  = combineReducers({
    articles: ArticlesReducer
});
