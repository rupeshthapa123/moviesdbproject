import React, { useState, useEffect } from "react";
import Axios from 'axios';
import NowPlaying from "./nowPlaying";
import { HomeWrapper } from "./style";

export default function HomePage() {
    const [nowPlaying, setnowPlaying] = useState([]);
    const [popularMovies, setpopularMovies] = useState([]);
    const [TopRated, setTopRated] = useState([]);

    useEffect(() => {
        getAllMovies()
    }, [])
    const getAllMovies = async () => {
        let apiKey = '0f0148921332f43435e0b0d0de008fd2'
        const allMovies = await Axios.all([
            Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`),
            Axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        ]);
        setnowPlaying(allMovies[0].data.results)
        setpopularMovies(allMovies[1].data.results)
        setTopRated(allMovies[2].data.results)
    };
    return (
        <HomeWrapper>
            <NowPlaying movie={nowPlaying}></NowPlaying>
        </HomeWrapper>
    )
}