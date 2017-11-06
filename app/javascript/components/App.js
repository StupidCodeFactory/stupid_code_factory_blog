import React, { PropTypes }               from 'react';
import {
  Link, Route, Switch
} from 'react-router-dom'


import Articles           from './Articles'
import Article                from '../components/Article';
import NewArticle             from '../components/NewArticle';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <Link to="/admin/articles/new" >
            new article
          </Link>
        </div>
        <div>
          <Link to="/admin" >
            articles
          </Link>
        </div>

        <Switch>
          <Route exact path="/admin" component={Articles} />
          <Route exact path="/admin/articles/new" component={NewArticle} />
          <Route path="/admin/articles/:id" component={Article} />
        </Switch>
      </div>
    )
  }
}
