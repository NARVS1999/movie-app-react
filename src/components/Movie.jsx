import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from "./Movie.module.css"

function Movie({ id, coverImg, title, summary, genres }) {
    return (
      <div className="col-xl-6" id={styles.cardMain}>
        <div className="card mb-3 p-2 border border-secodary border-2 bg-info" id={styles.card}>
            <div className="row g-0">
            <div className="col-md-4" id={styles.containerImage}>
              <img src={coverImg} className="img-fluid rounded coverImage" alt={title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title"><Link to={`/movie/${id}`}>{title}</Link></h5>
                <p className="card-text">{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <p className="card-text">
                  {genres.map((g) => (<small className="text-muted" key={g}>{g}, </small>))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  export default Movie;
