
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?genre=documentary&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(() => {
      getMovies();
    }, []);
    return (
      <div id={styles.mainContainer}>
        {loading ? (
          <div>
            <button className="btn btn-primary" type="button" disabled id={styles.loadingTime}>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          </div>
        ) : (
          <div className="row" id={styles.mainContainer}>
            <h1 className="text-center p-5">Latest Documentary Movies</h1>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
}

  export default Home;
