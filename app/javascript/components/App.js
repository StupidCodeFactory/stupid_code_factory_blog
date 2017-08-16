import React, {PropTypes} from 'react';
import { connect }        from 'react-redux';
import { Route }          from 'react-router-dom';
import { fetchArticles }  from '../actions/articles';

import Articles           from "./Articles";
import Article            from "./Article";
import Header from "../components/Header";


class App extends React.Component {
    componentWillMount () {
        this.props.dispatch(fetchArticles())
    }

    render () {
        return (
            <div>
              <Header />
              <Route exact path="/admin" component={Articles}/>
              <Route exact path="/admin/articles:id" component={Article}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(App);
