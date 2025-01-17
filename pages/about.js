import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About the project</h1>
            <p>
                This project was developed to learn about the Next.js framework,
                using the API from the <a href="https://ghibliapi.vercel.app/films" target="_blank" rel="noopener noreferrer">Studio Ghibli</a>.
                The application consumes real data from Studio Ghibli films, such as titles, descriptions, and images.
            </p>
            <Image
                src="/images/totoro-studio-ghibli.png"
                alt="Totoro"
                width={200}
                height={225}
            />
            <p>
                Here you can explore information about the films, including directors, producers, and even the runtime of each work.
                The goal of this project is to put into practice concepts such as:
            </p>
            <ul>
                <li>Routing and navigation in Next.js;</li>
                <li>Consuming APIs on the server or client;</li>
                <li>Modular styling with CSS Modules.</li>
            </ul>
        </div>
    );
}