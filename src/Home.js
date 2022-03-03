import React from "react"
import styles from './home.module.css';

import location from './location.png'
import cap from './cap.png'
import hobby from './hobby.png'
import work from './work.png'


const Home = () => {
    return (

        <body className={styles.body}>

        <div className={styles.container}>
            <header className={styles.header}>
                <h4 className={styles.logo}>&nbsp;</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h1 className={styles.isaacPearson}>Isaac Pearson&nbsp;</h1>
                    <p className={styles.smallIsaacPearson}>
                        [ˈīzək] - A Computer Science student, obsessed with automating everything.
                    </p>
                </div>

            </section>
            <div className={styles.gallery}>
                <div className={styles.thumbnail}><a><img src={location} alt="location-pic"  class={styles.cards}/></a>
                    <h4>My Location</h4>
                    <p className={styles.tag}>Marion, IN, US</p>
                    <p className={styles.text_column}>
                        Currently, I live in Marion, IN with my fantastic wife, Victoria
                    </p>
                </div>
                <div className={styles.thumbnail}><a><img src={cap} alt="" width="2000" class={styles.cards}/></a>
                    <h4>Education</h4>
                    <p className={styles.tag}>Highschool & College</p>
                    <p className={styles.text_column}>
                        From kindergarten to 12th grade, I attended a private Christian school, The King's Academy, in Jonesboro, IN.
                        I graduated from there with honors.
                        For College I currently attend Ball State University in Muncie, Indiana. I will graduate this spring
                        with a Bachelors in Computer Science.
                    </p>
                </div>
                <div className={styles.thumbnail}><a><img src={hobby} alt="" width="2000" class={styles.cards}/></a>
                    <h4>Hobbies</h4>
                    <p className={styles.tag}>3D Modeling / 3D Printing / Photogrammetry / CNC </p>
                    <p className={styles.text_column}>
                        My focus seems to gravitate towards 3D applications. Whether it be collecting images with
                        a drone to create 3D models of landscapes, houses, or parts of a town, or milling a complex
                        design into walnut boards to create a bas-relief, I really enjoy 3D applications.
                    </p>&nbsp;
                    <p>
                        You can see more of my 3D productions by selecting the 3D models in the menu above.
                    </p>
                </div>
                <div className={styles.thumbnail}><a><img src={work} alt="" width="2000" class={styles.cards}/></a>
                    <h4>Work</h4>
                    <p className={styles.tag}>FarmHand, Maintenance Technician</p>
                    <p className={styles.text_column}>
                        For work, my family's businesses keep me occupied. Whether Im helping my grandpa's farm
                        dig a trench to find broken tile in a field,
                        or doing oil changes at my dad's shop, I'm usually keeping busy.

                    </p>
                </div>
            </div>


            <footer id={styles.contact}>
                <p className={styles.hero_header}>SEND ME AN EMAIL</p>
                <div className={styles.button}>EMAIL ME</div>
            </footer>
            <div className={styles.copyright}>3.2.2022 - <strong>Pearson</strong></div>
        </div>

        </body>
    );
}


export default Home