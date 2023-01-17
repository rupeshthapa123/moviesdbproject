import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SingleMoviesPage() {
    const params = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/movie/${params.id}?api_key=0f0148921332f43435e0b0d0de008fd2&language=en-US`
        )
            .then(res => setMovie(res.data))
            .catch(err => console.error(err));
    });
    return (
        <Container className="mt-5">
            <Row>
                <Col md="6">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                </Col>
                <Col md="6">
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <ul>
                        <li>Revenue : {movie.revenue}$</li>
                        <li>Popularity : {movie.popularity} </li>
                        <li>Original Language : {movie.original_language} </li>
                        <li>Genres : {Array.isArray(movie.genres) && movie.genres.map(el => <span className='me-2'>{el.name}</span>)}</li>
                        <li>Release Date: {movie.release_date}</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}