import React    from 'react';
import ListItem from './listItem';
export default class ArticleList extends React.Component {
    render() {
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