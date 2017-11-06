import React                  from 'react';
import { bindActionCreators } from 'redux';
import ArticleList            from './Articles/List'
import { connect }            from 'react-redux';
import { fetchArticles }      from '../actions/articles';

class Articles extends React.Component {
    componentDidMount () {
        this.props.fetchArticles()
    }

    render() {
        return (
          <ArticleList {...this.props}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps, {fetchArticles})(Articles);
