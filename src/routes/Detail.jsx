import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css"

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  },[]);
    return (
      <div>
        {loading ? (
          <div>
            <div className="d-flex justify-content-center" id={styles.loadingTime}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <Link to={`${process.env.PUBLIC_URL}/`}><button className="btn btn-primary bi bi-arrow-bar-left" id={styles.btn}>   Back</button></Link>
            <h1>Details</h1>
            <img src={movie.large_cover_image} alt={movie.title} />
            <p><strong>Year: </strong>{movie.year}</p>
            <p><strong>Rating: </strong>{movie.rating}</p>
            <h3>Full Description</h3>
            <p className="text-justify" id={styles.description}>{movie.description_full}</p>
          </div>
          )}
      </div>
    );

  }

export default Detail;