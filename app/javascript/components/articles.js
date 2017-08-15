import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import ArticleList            from './articles/list'

class Articles extends React.Component {
    render() {
        console.log(this.store)
        return (
            <ArticleList articles={this.props.articles}/>
        );
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Articles);
