import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <body>
        <header>
            <div className="profileLogo"></div>
            <div className="profilePhoto"></div>

            <section className="profileHeader">
                <h1>Isaac Pearson&nbsp;</h1>
                <h3>Junior Software Developer&nbsp;</h3>
                <hr></hr>
                    <p>Motivated Computer Science student seeking internship or employment in Software
                        Development to gain hands-on experience. Outgoing and friendly with strong drive to succeed
                        and be involved in daily activities.
                        In-depth knowledge of Java, JavaScript, Python, C# and Ruby. Skilled in developing,
                        optimizing, and reworking systems to meet specific customer requirements.
                    </p>

            </section>

        </header>
        <section className="mainContent">
            <section className="section1">
                <h2 className="sectionTitle">Contact Information&nbsp;</h2>
                <hr className="sectionTitleRule"></hr>
                    <hr className="sectionTitleRule2"></hr>
                        <div className="section1Content">
                            <p><span>Email :</span> isaacmichael9@gmail.com</p>
                            <p><span>Phone :</span> 765-667-5113</p>
                            <p><span>Address :</span> Marion IN, United States</p>
                        </div>

            </section>

            <section className="section1">
                <h2 className="sectionTitle">Programming Languages&nbsp;</h2>
                <hr className="sectionTitleRule"></hr>
                    <hr className="sectionTitleRule2"></hr>
                        <div className="section1Content">
                            <p>
                                <ul className="unorderedLists">
                                    <li className="languages">
                                        Java - C# - Python - Ruby - .NET - HTML - Javascript - CSS - React - PHP

                                    </li>

                                    <li className="languages"> Experienced with Agile Methodologies</li>
                                    <li className="languages">&nbsp;Analytical Thinking and Problem Solving</li>
                                    <li className="languages">&nbsp;Source and Version Control: Git, GitHub</li>
                                    <li className="languages">&nbsp;Software Documentation Control</li>
                                    <li className="languages">&nbsp;Web Programming</li>
                                    <li className="languages">&nbsp;Eagerness to Learn New Technologies</li>
                                </ul>
                            </p>
                        </div>
            </section>

            <section className="section2">
                <h2 className="sectionTitle">Experience&nbsp;</h2>
                <hr className="sectionTitleRule"></hr>
                    <hr className="sectionTitleRule2"></hr>

                        <article className="section2Content">
                            <h2 className="experienceHeaders">Capstone Project - Software Developer Internship&nbsp;</h2>
                            <h3 className="sectionContentSubTitle">Intern Software Developer
                                @ <strong>LeadSigma</strong> / Aug 2021 - May 2022 / Muncie, IN&nbsp;&nbsp;</h3>
                            <p className="sectionContent"> Part of a Capstone Team at Ball State University, involved with
                                creating or modifying a Ruby on Rails API / React UI for onboarding users and establishing
                                automated payment processes through Stripe services . &nbsp; </p>
                        </article>
                        <article className="section2Content">
                            <h2 className="experienceHeaders"> Best-One Tire Upland&nbsp;</h2>
                            <h3 className="sectionContentSubTitle">Service Technician / Aug&nbsp; 2018 - Aug 2020 / Uplan,
                                IN&nbsp;</h3>
                            <ul className="unorderedLists">
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
                        <article className="section2Content">
                            <h2 className="experienceHeaders"> Pearson Brothers Farms&nbsp;</h2>
                            <h3 className="sectionContentSubTitle">Farm Hand / May 2016 - May 2020 / Hartford City,
                                IN&nbsp; &nbsp;&nbsp;</h3>
                            <ul className="unorderedLists">
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
            <aside className="externalResourcesNav">
                <span className="stretch"></span>
                <div className="externalResources"><a href="https://www.linkedin.com/in/isaac-pearson-6bba271a2/"
                                                      title="Behance Link">LINKED-IN</a></div>
                <span className="stretch"></span>
                <div className="externalResources"><a href="https://github.com/isaacmichael"
                                                      title="Github Link">GITHUB</a></div>
            </aside>
        </section>
        <footer>
            <hr></hr>
                <p className="footerDisclaimer">2022</p>
                <p className="footerNote">Isaac Pearson</p>
        </footer>
        </body>

);
}

export default App;
