import React from "react"
import isaac from "./isaac.png";
import styles from './resume.module.css';


const Resume = () => {
    return(
    <body className={styles.body}>
    <header className={styles.header}>
        <div className={styles.profilePhoto}>
            <img src={isaac} alt={"Profile Photo"} height={250}/>
        </div>

        <section className={styles.profileHeader}>
            <h1 className={styles.h1}>Isaac Pearson&nbsp;</h1>
            <h3 className={styles.h3}>Junior Software Developer&nbsp;</h3>
            <hr></hr>
            <p className>
                Motivated Computer Science student seeking internship or employment in Software
                Development to gain hands-on experience. Skilled in developing, optimizing, and reworking
                systems to meet specific customer requirements.
            </p>
        </section>
    </header>
    <section className={styles.mainContent}>
        <section className={styles.section1}>
            <h2 className={styles.sectionTitle}>Contact Information&nbsp;</h2>
            <hr></hr>
            <div className={styles.section1Content}>
                <p className={styles.contact}><span>Email :</span> isaacmichael9@gmail.com</p>
                <p className={styles.contact}><span>Phone :</span> 765-667-5113</p>
                <p className={styles.contact}><span>Address :</span> Marion IN, United States</p>
            </div>
        </section>

        <section className={styles.section1}>
            <h2 className={styles.sectionTitle}>Programming Languages&nbsp;</h2>
            <hr></hr>
            <div className={styles.section1Content}>
                <p className={styles.floatLeft}>
                    <p className={styles.languages}>
                        Java - C# - Python - Ruby - .NET - HTML - Javascript - CSS - React - PHP
                    </p>
                    <p className={styles.languages}> Experienced with Agile Methodologies</p>
                    <p className={styles.languages}>&nbsp;Analytical Thinking and Problem Solving</p>
                    <p className={styles.languages}>&nbsp;Source and Version Control: Git, GitHub</p>
                </p>

                <p className={styles.floatRight}>
                    <p className={styles.languages}>&nbsp;Software Documentation Control</p>
                    <p className={styles.languages}>&nbsp;Web Programming</p>
                    <p className={styles.languages}>&nbsp;Eagerness to Learn New Technologies</p>
                </p>

            </div>
        </section>

        <section className={styles.section2}>
            <h2 className={styles.sectionTitle}>Experience&nbsp;</h2>
            <hr></hr>
            <article className={styles.section2Content}>
                <h2 className={styles.experienceHeaders}>Capstone Project - Software Developer Internship&nbsp;</h2>
                <h3 className={styles.sectionContentSubTitle}>Intern Software Developer
                    @ <strong>LeadSigma</strong> / Aug 2021 - May 2022 / Muncie, IN&nbsp;&nbsp;</h3>
                <p className={styles.sectionContent}> Part of a Capstone Team at Ball State University, involved with
                    creating or modifying a Ruby on Rails API / React UI for onboarding users and establishing
                    automated payment processes through Stripe services . &nbsp; </p>
            </article>
            <article className={styles.section2Content}>
                <h2 className={styles.experienceHeaders}> Best-One Tire Upland&nbsp;</h2>
                <h3 className={styles.sectionContentSubTitle}>Service Technician / Aug&nbsp; 2018 - Aug 2020 / Uplan,
                    IN&nbsp;</h3>
                <ul className={styles.unorderedLists}>
                    <li>Completed preventive maintenance and unscheduled service needs to keep vehicles in
                        optimal condition.
                    </li>
                    <li>Setup and operated mechanical and manual servicing equipment.</li>
                    <li>Followed established job site safety rules, OSHA guidelines and company safety
                        policies and procedures.
                    </li>
                    <li>Performed Oil changes, tire repairs/rotations/changes.</li>
                    <li>Experienced with basic Auto Services</li>
                </ul>
            </article>
            <article className={styles.section2Content}>
                <h2 className={styles.experienceHeaders}> Pearson Brothers Farms&nbsp;</h2>
                <h3 className={styles.sectionContentSubTitle}>Farm Hand / May 2016 - May 2020 / Hartford City,
                    IN&nbsp; &nbsp;&nbsp;</h3>
                <ul className={styles.unorderedLists}>
                    <li>Plowed and tilled fields to prepare soil for crop planting.&nbsp;</li>
                    <li>Maintained and repaired farming equipment to provide consistent usability, prime
                        operational condition and alleviate downtime.&nbsp; </li>
                    <li>Cultivated soil on designated areas of land to refine and prepare for planting.</li>
                    <li>Checked fields for rocks or other obstacles to prepare land for tilling and physical
                        preparation for spring planting.
                    </li>
                </ul>
            </article>
        </section>
        <aside className={styles.externalResourcesNav}>
            <span className={styles.stretch}></span>
            <div className={styles.externalResources}><a href="https://www.linkedin.com/in/isaac-pearson-6bba271a2/"
                                                  title="Linked-In Link">LINKED-IN</a></div>
            <span className={styles.stretch}></span>
            <div className={styles.externalResources}><a href="https://github.com/isaacmichael"
                                                  title="Github Link">GITHUB</a></div>
        </aside>
    </section>
    <footer className={styles.footer}>
        <hr className={styles.hr}></hr>
        <p className={styles.footerDisclaimer}>2022</p>
        <p className={styles.footerNote}>Isaac Pearson</p>
    </footer>
    </body>
    );
}

export default Resume