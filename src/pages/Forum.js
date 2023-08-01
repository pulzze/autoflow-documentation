import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
import ThreadPage from '../components/ThreadPage';
import PostPage from '../components/PostPage';
import NewThreadPage from '../components/NewThreadPage'; // Adjust the path to match your file structure

function Forum() {
  return (
    <Router>
      <Switch>
        <Route exact path="/apiautoflow/Forum" component={ThreadList} />
        <Route path="/apiautoflow/Forum/thread/:id" component={ThreadPage} />
        <Route path="/apiautoflow/Forum/post/:id" component={PostPage} />
        <Route path="/apiautoflow/Forum/new" component={NewThreadPage} /> {/* New route */}
      </Switch>
    </Router>
  );
}
export default Forum;
