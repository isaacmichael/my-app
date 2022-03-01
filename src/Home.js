import React from "react"
import styles from './home.module.css';



const Home = () => {
    return (

        <body>

        <div className={styles.container}>
            <header className={styles.header}>
                <h4 className={styles.logo}>&nbsp;</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h3>Isaac Pearson&nbsp;</h3>
                    <img src="images/profile.png" alt="" className={styles.profile}/></div>
                <div className={styles.column}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodd tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla</p>
                </div>
            </section>
            <div className={styles.gallery}>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className={styles.gallery}>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class="cards"/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class="cards"/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <footer id={styles.contact}>
                <p className={styles.hero_header}>GET IN TOUCH WITH ME</p>
                <div className={styles.button}>EMAIL ME</div>
            </footer>
            <div className={styles.copyright}>&copy;2021 - <strong>GRID</strong></div>
        </div>

        </body>
    );
}


export default Home