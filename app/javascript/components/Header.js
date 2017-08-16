import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render () {
    return (
      <div id="top">
        <nav id="brand">
          <Link className="upper" to="/admin">Stupid Code Factory's Blog Admin</Link>
        </nav>
      </div>
    )
  }
}
