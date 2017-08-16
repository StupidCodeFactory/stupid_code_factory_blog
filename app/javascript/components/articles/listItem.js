import React from 'react';
import { Link } from 'react-router-dom'

export default class ListItem extends React.Component {
    render() {
        return(
            <tr>
              <td>{this.props.article.created_at}</td>
              <td>
                <Link className="small" to={`/admin/articles/${this.props.article.id}`} >
                  {this.props.article.title}
                  </Link>
                  </td>
                  <td>
                  <button className="button small">
                  <i className="fa fa-check"/>
                  Unpublish
                  </button>

                  </td>
                  </tr>
        )
    }
}
