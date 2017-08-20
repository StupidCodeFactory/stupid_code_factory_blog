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
import 'font-awesome/scss/font-awesome.scss';
import React                       from 'react';
import ReactDOM                    from 'react-dom';
import { Provider }                from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App   from '../components/App';
import Articles from "../components/Articles";
import Article  from '../components/Article';
import Header   from "../components/Header";

import store  from '../store';


document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app-container')
  if (appContainer) {
    ReactDOM.render((
      <Provider store={store}>
        <Router>
          <App>
            <Header />
            <Route exact path="/admin" component={Articles} />
            <Route path="/admin/articles/:id" component={Article}/>
          </App>
        </Router>
      </Provider>
    ), appContainer)
  }

})
