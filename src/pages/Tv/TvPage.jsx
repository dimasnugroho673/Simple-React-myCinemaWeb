
import React, { Component } from "react";
import Header from "../../components/Header";
import Axios from "axios";

class TvPage extends Component {


    componentWillMount() {
        Axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key=41bb8e52f83dcd40459b52b839030842&language=en-US&page=1').then(response => console.log(response.data))
    }

    render() {
        return (
            <>
                <Header />

                <p>Ini adalah halaman TV </p>
            </>
        );
    }
}

export default TvPage;
