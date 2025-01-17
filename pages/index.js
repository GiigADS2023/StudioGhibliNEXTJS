import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const api = "https://ghibliapi.vercel.app/films";
  
  const response = await fetch(api);
  const data = await response.json();

  if (!response.ok) {
    console.error("Failed to fetch movies");
    return { props: { movies: [] } };
  }

  return { props: { movies: data } };
}

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>STUDIO GHIBLI - Movies</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieItem}>
            <Link legacyBehavior href={`/movie/${movie.id}`}>
              <a className={styles.movieLink}>Ver detalhes</a>
            </Link>
            <Image src={movie.image} alt={`Poster do filme ${movie.title}`} width={200} height={300} />
          </li>
        ))}
      </ul>
    </div>
  );
}