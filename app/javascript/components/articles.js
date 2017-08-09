import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import ArticleList            from './articles/list'

class Articles extends React.Component {
    render() {
        return (
            <ArticleList articles={this.props.articles}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(Articles);
