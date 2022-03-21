import React from "react"
import styles from "./CssModules/modeling.module.css"
import elevationPic from "./Pictures/extras/wiseman height 2d profile.JPG"
import hobby from "./Pictures/hobby.png";

const Modeling = () => {
    return (
        <body>

        <div className="container">

            <header className={styles.header}>
                <h4 className={styles.logo}>GRID</h4>
            </header>

            <section className={styles.intro}>
                <div className={styles.column}>
                    <h3>3D MODELING - IN PROGRESS</h3>

                    <div className={styles.column}>
                        <p>Here's where I will share by hobbies. I enjoy creating 3D reconstructions of terrain using a DJI Phantom 4 Pro Drone,
                            carving intricate designs into wood with my Shapeoko 3 XL, and other random things that I find interesting.
                        </p>
                        <p></p>
                    </div>
                </div>
            </section>

            <div className={styles.gallery}>
                <div className={styles.thumbnail}>
                    <iframe className={styles.threeD} width="500" height="300" src="https://www.youtube.com/embed/5hgq2SEYpa0"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                    <h4>Best-One Tire Upland, IN</h4>
                    <p className={styles.tag}>Made with OpenDroneMap</p>
                    <p className={styles.text_column}>A model of Best-One Tire upland. Taken With a Phantom 4 Pro Drone
                    Crosshatch survey consisting of ~500 photos for better 3D imaging.
                        Mainly, I created this map for fun, but I also find it important to preserve the state of a given location with something
                        more substantial than a photo. If a picture is worth a thousand words, I wonder what a 3D model is worth?

                    </p>
                </div>

                <div className={styles.thumbnail}><a>
                    <div className="sketchfab-embed-wrapper">
                        <iframe className={styles.threeD} title="Andersontile2020" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking"
                                xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered
                                web-share
                                src="https://sketchfab.com/models/9f871c53335b4b10bda56d19f14fb7e8/embed?autospin=1&autostart=1&preload=1"></iframe>
                       <p className={styles.text_column}> Above is an interactive 3D model, try it out!</p>
                        <img src={elevationPic} alt="elevation Picture"  className={styles.picture} />
                    </div>

                </a>
                    <h4>3D model of crops</h4>
                    <p className={styles.tag}>Made in OpenDroneMap</p>
                    <p className={styles.text_column}>
                        Orthomosaic above was made in an open source project known as OpenDroneMap.
                        This model took about ~700 photos to get important elevation maps and GLI maps.

                        Below the model, using a dense cloud, the image shows the elevation change as it goes over a house and a portion of a field.
                        This could be useful for planning where to put in drainage tiles. For instance, a farmer could put markers in the field
                        where they expect the lowest spots are. After, a drone could survey and create a map like the one above. Drawing lines
                        from one flag to the other will show if there are any spots where a trencher would need to compensate for unwanted changes in height or if
                        a new line should be plotted.
                    </p>
                    <p>
                    </p>
                </div>

                <div className={styles.thumbnail}>
                    <iframe className={styles.threeD} title="odm_textured_model_geo" frameBorder="0" allowFullScreen mozallowfullscreen="true"
                            webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                            execution-while-out-of-viewport execution-while-not-rendered web-share
                            src="https://sketchfab.com/models/4bcc4fc75afa4e35827e3910e035100e/embed"></iframe>
                    <h4>3D Model Of Crops</h4>
                    <p className={styles.tag}>Processed in Agisoft Metashape</p>




                    <p className={styles.text_column}>Compiled # photos for this...</p>
                </div>
                <div className={styles.thumbnail}>
                    <iframe className={styles.threeD} width="500" height="300" src="https://www.youtube.com/embed/Zz_SgvYye8Y"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    <h4>Shapeoko 3XL - CNC</h4>
                    <p className={styles.tag}>Last Supper Relief Carving</p>
                    <p className={styles.text_column}>Here's a sped up version of my Shapeoko carving out a last supper scene.
                    The .OBJ file for the project was taken from Etsy and the GRBL files were created using Vectric Vcarve.
                        Total time to produce was around 6hrs with 4 bit changes.
                    </p>
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