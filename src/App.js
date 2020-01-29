import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <main className="App__main">
          <Switch>
            <Route exact path={'/about'} component={About} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/contact'} component={Contact} /> 
          </Switch>
        </main>
      </div>
      <footer>© Balay Aydemir 2020</footer>
    </BrowserRouter>
  );
}

export default App;
