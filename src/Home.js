import React from "react"
import styles from './home.module.css';



const Home = () => {
    return (

        <body className={styles.body}>

        <div className={styles.container}>
            <header className={styles.header}>
                <h4 className={styles.logo}>&nbsp;</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h3>Isaac Pearson&nbsp;</h3>
                    <img src="images/profile.png" alt="pic" className={styles.profile}/></div>
                <div className={styles.column}>
                    <h1> <strong>About Me</strong></h1>
                    <p>Hello, and welcome to my website! Below is some information about me.

                    </p>
                </div>
            </section>
            <div className={styles.gallery}>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>My Location</h4>
                    <p className={styles.tag}>Marion, IN, US</p>
                    <p className={styles.text_column}>Currently, I live in Marion, IN on the county line between Grant and Blackford
                        counties

                    </p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>Education</h4>
                    <p className={styles.tag}>Highschool & College</p>
                    <p className={styles.text_column}>
                        From kindergarten to 12th grade, I attended a private Christian school, The King's Academy, in Jonesboro, IN.
                        I graduated from there with honors.&nbsp;
                        For College I currently attend Ball State University in Muncie, Indiana. I will graduate this spring
                        with a Bachelors in Computer Science.
                    </p>
                </div>
                <div className={styles.thumbnail}><a href="#"><img src="images/bkg_06.jpg" alt="" width="2000" class={styles.cards}/></a>
                    <h4>Hobbies</h4>
                    <p className={styles.tag}>3D Modeling / 3D Printing /Photogrammetry / CNC / Coding projects </p>
                    <p className={styles.text_column}>


                    </p>
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