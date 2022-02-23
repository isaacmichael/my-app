import isaac from './isaac.jpg';
import './App.css';


function App() {
    return (

        <body>
        <header>
            <section className="profileHeader">

                <div className="profilePhoto">
                    <img src={isaac} alt={"Profile Photo"} height={250}/>
                </div>
                <h1>Isaac Pearson&nbsp;</h1>
                <h3>Junior Software Developer&nbsp;</h3>
                <hr></hr>
                    <p>
                        Motivated Computer Science student seeking internship or employment in Software
                        Development to gain hands-on experience. Skilled in developing, optimizing, and reworking
                        systems to meet specific customer requirements.
                    </p>
            </section>

        </header>
        <section className="mainContent">
            <section className="section1">
                <h2 className="sectionTitle">Contact Information&nbsp;</h2>
                    <hr></hr>
                        <div className="section1Content">
                            <p className="contact"><span>Email :</span> isaacmichael9@gmail.com</p>
                            <p className="contact"><span>Phone :</span> 765-667-5113</p>
                            <p className="contact"><span>Address :</span> Marion IN, United States</p>
                        </div>
            </section>

            <section className="section1">
                <h2 className="sectionTitle">Programming Languages&nbsp;</h2>
                    <hr></hr>
                        <div className="section1Content">
                                 <p className={"floatLeft"}>
                                     <p className="languages">
                                        Java - C# - Python - Ruby - .NET - HTML - Javascript - CSS - React - PHP
                                     </p>
                                     <p className="languages"> Experienced with Agile Methodologies</p>
                                     <p className="languages">&nbsp;Analytical Thinking and Problem Solving</p>
                                     <p className="languages">&nbsp;Source and Version Control: Git, GitHub</p>
                                 </p>

                            <p className="floatRight">
                                <p>
                                    Java - C# - Python - Ruby - .NET - HTML - Javascript - CSS - React - PHP
                                </p>
                                     <p className="languages">&nbsp;Software Documentation Control</p>
                                     <p className="languages">&nbsp;Web Programming</p>
                                     <p className="languages">&nbsp;Eagerness to Learn New Technologies</p>
                            </p>

                        </div>
            </section>

            <section className="section2">
                <h2 className="sectionTitle">Experience&nbsp;</h2>
                    <hr></hr>
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
                                                      title="Linked-In Link">LINKED-IN</a></div>
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
