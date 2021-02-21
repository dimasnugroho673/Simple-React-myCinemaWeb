import React, { Component } from 'react';
import Axios from 'axios';

class ListContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            dataReady: false,
            genreBase: [],
        }

        this.render = this.render.bind(this);
        this.handleWatchlistClick = this.handleWatchlistClick.bind(this);

    }

    // checkValueWatchlist(idMovieWantCehck, idMovieFromStorage) {
    //     if (idMovieWantCehck == idMovieFromStorage ) {
    //         return false;
    //     }
    // }

    // checkWatchlist(idMovieWantCehck) {

    //     let i;

    //     for (i = 0; i < localStorage.length; i++) {
    //         this.checkValueWatchlist(idMovieWantCehck, localStorage.getItem(localStorage.key(i)));
    //     }

    // }

    handleWatchlistClick = (e, idMovie) => {
        // handleWatchlistClick(idMovie, e) {
        // e.preventDefault()

        alert("berhasil ditambahkan ke watchlist")

        localStorage.setItem("id_movie_" + idMovie, idMovie);

        // alert(idMovie)

        // 
    }

    generateGenre(ids) {

        // Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=41bb8e52f83dcd40459b52b839030842&language=en-US`).then(response => this.setState({ genreBase: response.data }))

        let genreOnItem = JSON.stringify(ids);

        return genreOnItem;


    }

    render() {

        const movies = this.props.dataMovies.results;

        if (this.props.dataMovies.total_results < 1) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h6>Film tidak ditemukan!</h6>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">

                        {movies.map((movie, index) =>
                            <div className="col-md-4">
                                <div class="card mb-4 shadow-sm">
                                    <img class="card-img-top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                                    {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                    <div class="card-body">
                                        <p className="card-title">{movie.original_title}</p>
                                        <p class="card-text">Rating {movie.vote_average}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button type="button" class="btn btn-sm btn-outline-secondary" onClick={(e, i) => this.handleWatchlistClick(e, movie.id)}>Add to Watchlist</button>
                                                {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                                            </div>
                                            <small class="text-muted">{movie.release_date}</small>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        {this.generateGenre(movie.genre_ids)}
                                    </div>
                                </div>
                            </div>
                            // <div className="col-md-4"><small>{movie.title}</small></div>
                        )}

                    </div>
                </div>

                // <small>{JSON.stringify(this.props.dataMovies.results)}</small>
            );
        }






    }

}

// function ListContent(props) {

//     const items = props.dataMovies.results;

//     return (


//         <div>{items.map((item, index) =>
//             <small>{item.title}</small>
//         )}</div>


//         // <small>{JSON.stringify(props.dataMovies.results)}</small>
//     );
// }


export default ListContent;