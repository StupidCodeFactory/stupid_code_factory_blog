import React    from 'react';
import PropTypes from 'prop-types'
import ListItem from './listItem';


class ArticleList extends React.Component {
    render() {
        console.log('ArticleList', this.props)
        const listItems = this.props.articles.map( (article) => {
            return <ListItem key={article.id} article={article} />
        })
        return (
            <ul>
              {listItems}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired,
            published: PropTypes.bool.isRequired,
            updated_at: PropTypes.string.isRequired,
            created_at: PropTypes.string.isRequired,
        })
    )}


export default ArticleList
