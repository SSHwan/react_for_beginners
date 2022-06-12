import { useEffect, useState } from "react";
import Movie from "../movie_app/components/movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`);
    const data = await response.json();
    const movies = data.data.movies;
    console.log('data >> ', movies);
    setMovies(movies);
    setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            <h1>Movie App</h1>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.large_cover_image}
                        title={movie.title_long}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))
            )}
        </div>
    );
}

export default Home;