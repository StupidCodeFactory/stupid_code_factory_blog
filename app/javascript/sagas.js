import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import { fectchAPIArticles } from './api';


function* fetchArticles(action) {
    try {
        const response = yield call(fectchAPIArticles, '/api/articles')
        yield put({type: 'ARTICLE_RECEIVED', articles: response})
    } catch(e) {

    }
}

export default function* rootSaga() {
    yield takeLatest("FETCH_ARTICLES", fetchArticles)
}
