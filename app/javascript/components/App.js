import React, {PropTypes} from 'react';
import { fa } from "fontawesome";
console.log(fa)
class App extends Reac.component {
    render () {
        return (
            <div id="top">
              <nav id="brand">
                <a className="upper" href="">Stupid Code Factory's Blog Admin</a>
              </nav>
              <nav>
                <ul>
                  <li>
                    <a href="#articles">

                      articles
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
        )
    }
}
