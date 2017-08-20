import React                                 from 'react';
import PropTypes                             from 'prop-types';
import { connect }                           from 'react-redux';
import { fetchArticle, fetchArticlePreview } from '../actions/articles';

class Article extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title:   this.props.article.title,
      body:    this.props.article.body,
      preview: this.props.articlePreview,

    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
  }

  componentWillReceiveProps(props) {
    console.log(props)

    this.setState({
      title:   props.article.title,
      body:    props.article.body,
      preview: props.articlePreview
    });
  }
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onBodyChange(event) {
    this.setState({body: event.target.value});
    this.props.fetchArticlePreview(this.props.match.params.id, this.state.body);
  }

  render() {
    const article = this.props.article

    if (article.status == 'PENDING') {
      return (
        <h4>fetching article...</h4>
      )
    }

    return (
      <div className="row">
        <div className="col col-6">
          <h2>
            Edit {this.props.article.title}
          </h2>

          <form>
            <fieldset>
              <label htmlFor="articleTitle">Title</label>
              <input id="articleTitle" type="text" onChange={this.onTitleChange} value={this.state.title}/>
              <label htmlFor="articleBody">Body</label>
              <textarea id="articleBody" value={this.state.body} onChange={this.onBodyChange}>
              </textarea>
            </fieldset>
          </form>
        </div>
        <div className="col col-6">
          {/* {this.state.preview} */}
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

export default connect(mapStateToProps, {fetchArticle, fetchArticlePreview})(Article);
