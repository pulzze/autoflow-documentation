import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ThreadList from '../components/ThreadList';
import ThreadPage from '../components/ThreadPage';
import PostPage from '../components/PostPage';
import NewThreadPage from '../components/NewThreadPage';

function Forum() {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Router>
        <Switch>
          <Route exact path="/apiautoflow/Forum" component={ThreadList} />
          <Route path="/apiautoflow/Forum/thread/:id" component={ThreadPage} />
          <Route path="/apiautoflow/Forum/post/:id" component={PostPage} />
          <Route path="/apiautoflow/Forum/new" component={NewThreadPage} />
        </Switch>
      </Router>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Forum;
