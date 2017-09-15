require ('prismjs/themes/prism-okaidia.css');
import React       from 'react';
import PropTypes   from 'prop-types';
import { connect } from 'react-redux';
import Prism       from 'prismjs';

import {
  fetchArticle,
  fetchArticlePreview,
  saveArticle
} from '../actions/articles';

class Article extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      title:   this.props.article.title,
      body:    this.props.article.body,
      preview: this.props.articlePreview.body,
      autoPreview: false
    }

    this.onTitleChange  = this.onTitleChange.bind(this);
    this.onBodyChange   = this.onBodyChange.bind(this);
    this.onSubmit       = this.onSubmit.bind(this);
    this.onFetchPreview = this.onFetchPreview.bind(this);
  }

  componentWillReceiveProps(props) {
    const newState = {};
    if (_.isEmpty(this.state.body)) {
      newState['body'] = props.article.body;
    }

    if (_.isEmpty(this.state.title)) {
      newState['title'] = props.article.title;
    }

    newState['preview'] = props.articlePreview.body
    this.setState(newState);

  }
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onBodyChange(event) {
    this.setState({body: event.target.value})

    if(this.state.autoPreview) {
      this.props.fetchArticlePreview(this.props.match.params.id, {body: event.target.value});
    }

  }

  onSubmit(event) {
    event.preventDefault();
    this.props.saveArticle(
      this.props.article.id, {article: {title: this.state.title , body: this.state.body}}
    );
  }

  onFetchPreview(event) {
    event.preventDefault();
    this.setState({autoPreview: true})
    this.props.fetchArticlePreview(this.props.match.params.id, {body: this.state.body});
  }
  render() {
    const article = this.props.article

    if (article.status == 'PENDING') {
      return (
        <h4>fetching article...</h4>
      )
    }

    return (
      <div className="row gutters">
        <div className="col col-6 col">
          <h4>
            Edit {this.state.title}
          </h4>
          <button onClick={this.onFetchPreview}>preview</button>
          <form className="form" onSubmit={this.onSubmit}>
            <fieldset>
              <div className="form-item">
                <label htmlFor="articleTitle">Title</label>
                <input id="articleTitle" type="text" onChange={this.onTitleChange} value={this.state.title}/>
              </div>
              <div className="form-item">
                <label htmlFor="articleBody">Body</label>
                <textarea id="articleBody" onChange={this.onBodyChange} value={this.state.body} >
                </textarea>
              </div>
              <div className="form-item">
                <input type="submit" value="Save" className="button"/>
              </div>

            </fieldset>
          </form>
        </div>
        <div className="col col-6">
          <div className="group">
            <h4>Article Preview</h4>
          </div>

          <div dangerouslySetInnerHTML={{__html: this.state.preview}}/>
        </div>

      </div>
    )
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  })
}
const mapStateToProps = (state) => {
  return {
    article: state.article,
    articlePreview: state.articlePreview
  }
}

export default connect(
  mapStateToProps, {
    fetchArticle,
    fetchArticlePreview,
    saveArticle
  }
)(Article);
