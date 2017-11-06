import React     from 'react';
import PropTypes from 'prop-types'
import ListItem  from './ListItem';

class ArticleList extends React.Component {
  render() {
    const listItems = this.props.articles.data.map( (article) => {
      return <ListItem match={this.props.match} key={article.id} article={article} />
    })
    return (
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>published</th>
            <th>created at</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>

      </table>
    )
  }
}

/* ArticleList.propTypes = {
 *     articles: PropTypes.arrayOf(
 *         PropTypes.shape({
 *             id: PropTypes.string.isRequired,
 *             body: PropTypes.string.isRequired,
 *             published: PropTypes.bool.isRequired,
 *             updated_at: PropTypes.string.isRequired,
 *             created_at: PropTypes.string.isRequired,
 *         })
 *     )}
 *
 * */
export default ArticleList
