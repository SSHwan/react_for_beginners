import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const getMovie = async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const data = await response.json();
        const movie = data.data.movie;
        console.log('movie >> ', movie);
        setMovie(movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>{movie.title_long}</h1>
            <img src={movie.large_cover_image} alt="" />
            <div>
                Rating : {movie.rating}
            </div>
            <p>{movie.description_full}</p>
        </div>
    );
}

export default Detail;