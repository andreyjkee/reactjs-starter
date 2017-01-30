import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';
import { AboutComponent } from './screens/AboutComponent';

const App = React.createClass({
  render () {
    return (
      <div className="App">
        Main app component
        <div>
          <Link to={`${AboutComponent.path}`}>About</Link>        
        </div>
      </div>
    )
  }
})

const NotFound = React.createClass({
  render() {
    return <h2>Not found</h2>
  }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path={AboutComponent.path} component={AboutComponent} />
        <Route path="*" component={NotFound} />
    </Router>
  ), document.getElementById('root'));