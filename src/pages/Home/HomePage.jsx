import React, { Component } from 'react'
import { Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Header from '../../components/Header';
import SearchPanel from '../../components/SearchPanel';
import ListContent from '../../components/ListContent';
import WatchlistPage from '../Watchlist/WatchlistPage';

class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            movieList: [],
            isLoading: null,
        }
    }

    handleSearching = (movieData) => {
        this.setState({ movieList: movieData })
    }


    render() {


        return (
            <>
                <Header />
                <SearchPanel onSearching={(value) => this.handleSearching(value)} isLoading={(value) => this.setState({ isLoading: value })} />

                {this.state.isLoading == true ? <h1>Loading</h1> : null}
                {this.state.movieList.length < 1 ? <div className="container"><h6>Belum ada</h6></div> : <ListContent dataMovies={this.state.movieList} />}



            </>
        )

    }

}

export default HomePage;