import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Loading from './Components/Loading/Loading';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  if (loading) {
    return <Loading />
  } else {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <main className="App__main">
            <Switch>
              <Route exact path={'/'} component={About} />
              <Route path={'/projects'} component={Projects} />
              <Route path={'/contact'} component={Contact} /> 
            </Switch>
          </main>
        </div>
        <footer>© Balay Aydemir 2020</footer>
      </BrowserRouter>
    );
  }
}

export default App;
