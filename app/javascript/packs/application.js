// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


import "babel-polyfill";
import 'imperavi-kube/dist/css/kube';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute } from 'react-router';
import { Provider} from 'react-redux';
import Articles from '../components/articles';
import store from '../store';

import { fetchArticles } from '../actions/articles'

/*
 * let unsubscribe = store.subscribe(() =>
 *
 *     console.log('Global DEBUD:', store.getState())
 * )
 * */
store.dispatch(fetchArticles())
document.addEventListener('DOMContentLoaded', () => {
    const articlesId = document.getElementById('articles');
    if (articlesId) {
        ReactDOM.render(
            <Provider store={store}>
                <Articles />
            </Provider>,
            articlesId
        )

    }
})
/* unsubscribe()*/
