import React from 'react';
import fa from 'fontawesome';
export default class ListItem extends React.Component {
    render() {
        console.log(fa('check'))
        return(
            <tr>
              <td>{this.props.article.title}</td>
              <td>{fa('check')}</td>
              <td>{this.props.article.created_at}</td>
            </tr>
        )
    }
}
