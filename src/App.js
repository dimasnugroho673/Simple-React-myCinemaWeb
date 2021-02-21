import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {
  Route,
  // HashRouter,
  BrowserRouter
} from 'react-router-dom';

import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import ListContent from './components/ListContent';
import HomePage from './pages/Home/HomePage';
import WatchlistPage from './pages/Watchlist/WatchlistPage';
import TvPage from './pages/Tv/TvPage';


class App extends Component {

  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {

    return (
      <>
        <BrowserRouter>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/watchlist" component={WatchlistPage} />
          <Route exact path="/tv" component={TvPage} />
        </BrowserRouter>

      </>
    )

  }

}

export default App;
