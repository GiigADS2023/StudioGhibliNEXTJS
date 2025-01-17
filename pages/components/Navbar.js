import Link from "next/link";
import Image from "next/image";

import styles from "../../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div>
                <Image src="/images/studio-ghibli-title.png" alt="studio-ghibli-title" width="250" height="75"/>
            </div>
            <ul className={styles.link_section}>
                <li>
                    <Link legacyBehavior href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link legacyBehavior href="/about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
    );
}