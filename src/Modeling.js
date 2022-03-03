import React from "react"
import styles from "./home.module.css"

const Modeling = () => {
    return (
        <body>

        <div className="container">

            <header className={styles.header}>
                <h4 className={styles.logo}>GRID</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h3>JOHN DOE</h3>

                    <div className={styles.column}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla</p>
                    </div>
                </div>
            </section>

            <div className={styles.gallery}>
                <div className={styles.thumbnail}><a href="#"><img
                    src="file:///C|/Users/isaac/AppData/Roaming/Adobe/Dreamweaver 2021/en_US/Configuration/Temp/Assets/eam292C.tmp/images/bkg_06.jpg"
                    alt="" width="2000" className="cards"/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img
                    src="file:///C|/Users/isaac/AppData/Roaming/Adobe/Dreamweaver 2021/en_US/Configuration/Temp/Assets/eam292C.tmp/images/bkg_06.jpg"
                    alt="" width="2000" className="cards"/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className={styles.thumbnail}>
                    <iframe title="odm_textured_model_geo" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/4bcc4fc75afa4e35827e3910e035100e/embed"></iframe>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img
                    src="file:///C|/Users/isaac/AppData/Roaming/Adobe/Dreamweaver 2021/en_US/Configuration/Temp/Assets/eam292C.tmp/images/bkg_06.jpg"
                    alt="" width="2000" className={styles.cards}/></a>
                    <h4>TITLE</h4>
                    <p className={styles.tag}>HTML, CSS, JS, WordPress</p>
                    <p className={styles.text_column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <footer id="contact">
                <p className={styles.hero_header}>GET IN TOUCH WITH ME</p>
                <div className={styles.button}>EMAIL ME</div>
            </footer>

            <div className={styles.copyright}>2022 - <strong>PEARSON</strong></div>
        </div>
        </body>


    );
}

export default Modeling