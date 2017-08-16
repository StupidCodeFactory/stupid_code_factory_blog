import React, {PropTypes} from 'react';
import { connect }        from 'react-redux';
import Header             from "./Header";
import Articles           from "./Articles";
import { fetchArticles }  from '../actions/articles';

class App extends React.Component {
    componentWillMount () {
        this.props.dispatch(fetchArticles())
    }

    render () {
        return (
            <div>
              <Header />
              <Articles articles={this.props.articles} />
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
