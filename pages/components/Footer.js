import Image from "next/image";

import styles from "../../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.paragraph_footer}>&copy;<span>AnimeNEXT.JS</span> - 2025</p>
            <div className={styles.social_media}>
                <div className={styles.social_media_icons}>
                    <a href="https://github.com/GiigADS2023" target="_blank" rel="noopener noreferrer">
                        <Image src="/img-social-media/github-social-media.png" alt="github-social-media" width="20" height="20" />
                    </a>
                    <a href="https://www.linkedin.com/in/giorgia-batista-schmidt-033b30258" target="_blank" rel="noopener noreferrer">
                        <Image src="/img-social-media/linkedin-social-media.png" alt="linkedin-social-media" width="20" height="20"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}