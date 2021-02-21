import React, { Component } from 'react';
import Axios from 'axios';

class SearchPanel extends Component {

    constructor(props) {
        super(props);

        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.requestSearchAPI = this.requestSearchAPI.bind(this);


    }

    requestSearchAPI(keyword) {


        Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=41bb8e52f83dcd40459b52b839030842&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => this.props.onSearching(response.data))
            .then(response => this.props.isLoading(false))
    }

    handleSearchClick() {

        this.props.isLoading(true)

        this.requestSearchAPI(document.getElementById('input-keyword').value)
    }

    render() {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h3>Search Everything...</h3>

                    <div class="input-group mb-3">
                        <input type="text" id="input-keyword" class="form-control" placeholder="Keywords" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-dark" type="button" id="button-addon2" onClick={this.handleSearchClick}>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



// function SearchPanel() {

//     function requestSearchAPI(keyword) {
//         Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=41bb8e52f83dcd40459b52b839030842&language=en-US&query=${keyword}&page=1&include_adult=false`).then(response =>  console.log(response.data))
//     }


//     function handleClick(e) {
//         e.preventDefault();

//         requestSearchAPI(document.getElementById('input-keyword').value)
//     }


//     return (
//         <div class="jumbotron jumbotron-fluid">
//             <div class="container">
//                 <h3>Search Everything...</h3>

//                 <div class="input-group mb-3">
//                     <input type="text" id="input-keyword" class="form-control" placeholder="Keywords" aria-describedby="button-addon2" />
//                     <div class="input-group-append">
//                         <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleClick}>Search</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


export default SearchPanel;