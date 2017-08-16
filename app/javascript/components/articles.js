import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import ArticleList            from './articles/list'

class Articles extends React.Component {
    render() {
        return (
            <ArticleList articles={this.props.articles.data}/>
        );
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Articles);
