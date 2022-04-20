import React from "react"
import styles from './CssModules/drone.module.css';

const Drone = () => {
    return (
        <body className={styles.main}>
            <div className={styles.picture}>
                <h1 className={styles.droneTitle}>
                    4-19-22
                </h1>
                <h2 className={styles.droneInfo}>
                    FARMING WITH A DRONE
                </h2>
            </div>
        <section className={styles.section1}>
            <p className={styles.firstPara}>
                Ever Wonder What Drones Can Do For You?<br></br>
                <strong><br></br></strong>
                THIS SECTION IS IN PROGRESS
            </p>
        </section>
        </body>
    );
}

export default Drone