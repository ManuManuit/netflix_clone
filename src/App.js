import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import requests from './requests';

//Components
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route path="/movie-details/:id">
              <MovieDetails />
            </Route>
            <Route path="/">
              <Nav />
              <Banner />
              <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow="true" />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
              <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
              <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
              <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
