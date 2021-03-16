import React from 'react';

// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import TaskList from './components/TaskList'
import NewTask from './components/NewTask'

import { TaskProvider } from "./components/TaskContext"

function App() {
  return (
    <TaskProvider>
      <Router>

        <Navbar />

        <Switch>
          <Route path="/react-apps-firststeps/" exact component={HomePage} />
          <Route path="/react-apps-firststeps/new-task" component={NewTask} />
          <Route path="/react-apps-firststeps/:cat" component={TaskList} />
        </Switch>

      </Router>
    </TaskProvider>

  );
}

export default App;
