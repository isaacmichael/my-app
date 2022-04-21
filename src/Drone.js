import React from "react"
import styles from './CssModules/drone.module.css';

const Drone = () => {
    return (
        <body className={styles.main}>
            <div className={styles.picture}>
                <h2 className={styles.droneTitle}>
                    FARMING WITH A DRONE
                </h2>
            </div>
            <div className={styles.div2}>
                <p className={styles.paragraph}>
                    Drone Operations Will Transform The Industry
                </p>
            </div>
            <div className={styles.cards}>
                <p className={styles.paragraph}>
                    Item 1 <br></br>
                    slkdhal;skjdlk;asjlkd;jkls;djlk;;lkjsdl;kjsa<br></br>
                    sl;kdjla;skjd;lksajd;lksajd;kljsak;ldjasdjkl
                </p>
                <p className={styles.paragraph}>
                    Item 2
                </p>

            </div>

        </body>
    );
}

export default Drone