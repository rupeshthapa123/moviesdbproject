import React from "react";
import styled from "styled-components";
import Axios from 'axios';

export default function HomePage() {

    const getAllMovies = () => {
        Axios.all([
            Axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1"),
            Axios.get(""),
            Axios.get("")
        ])
    }
    return (
        <h1>HomePage</h1>
    )
}