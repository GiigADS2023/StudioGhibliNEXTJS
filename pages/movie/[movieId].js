import Image from "next/image";
import styles from "../../styles/MovieDetails.module.css";

export const getStaticPaths = async () => {
  const api = "https://ghibliapi.vercel.app/films";
  const response = await fetch(api);
  const data = await response.json();

  const paths = data.map((movie) => ({
    params: { movieId: movie.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const api = "https://ghibliapi.vercel.app/films";
  const response = await fetch(`${api}/${params.movieId}`);
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return { props: { movie: data } };
};

export default function MovieDetails({ movie }) {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={movie.movie_banner}
          alt={`Banner do filme ${movie.title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.details}>
        <div className={styles.poster}>
          <Image
            src={movie.image}
            alt={`Poster do filme ${movie.title}`}
            width={200}
            height={300}
            objectFit="cover"
          />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1> {/* Usando a classe "title" */}
          <p className={styles.description}>{movie.description}</p>
          <p className={styles.pText}><span className={styles.pTextStrong}>Director:</span> {movie.director}</p>
          <p className={styles.pText}><span className={styles.pTextStrong}>Producer:</span> {movie.producer}</p>
          <p className={styles.pText}><span className={styles.pTextStrong}>Release Date:</span> {movie.release_date}</p>
          <p className={styles.pText}><span className={styles.pTextStrong}>Running Time:</span> {movie.running_time} min</p>
          <p className={styles.pText}><span className={styles.pTextStrong}>Classification Rotten Tomatoes:</span> {movie.rt_score}%</p>
        </div>
      </div>
    </div>
  );
}
