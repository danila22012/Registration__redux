import React, { Component } from 'react';
import styles from "./styles.scss";
export default class AboutMe extends Component {

    render() {
        return (
            <div className="About-me">
                <h2 className="About-me__Name" >Danylo sadychenko</h2>
                <div className="Paragraph About-me__Contacts">
                    <h3>Contacts</h3>
                    <p><b>E-mail:</b>  danila222@ua.fm | danilasad2001@gmail.com</p>
                    <p> <b> Skype:</b> danila4600</p>
                    <p><b>LinkedIn:</b> <a className="About-me__Link" href="https://www.linkedin.com/in/danylo-sadychenko-8597971a7/">https://www.linkedin.com/in/danylo-sadychenko-8597971a7/</a> </p>
                    <p><b> Phone:</b> 098 491-26-93</p>
                    <p><b> GitHub:</b> <a className="About-me__Link" href="https://github.com/danila22012?tab=repositories">https://github.com/danila22012?tab=repositories</a> </p>
                </div>
                <div className="Paragraph About-me__Summary">
                    <h3>Summary of Qualifications</h3>
                    <p>Freshman in It-sphere, goal-oriented, want to grow up as a web-developer.
                    I`m goal-oriented person and have abilities to self-education, and I`m ready to join your team as a trainee.
                    I consider myself to be a team-player, communicating with people isn`t a big deal for me.
                    </p>
                </div>

                <div className="Paragraph About-me__Skills">
                <h3>Skills</h3>
                    <ul className="About-me__Skills-list">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>SCSS</li>
                        <li>Git</li>
                        <li>Technical Documentation</li>
                        <li>Sass</li>
                        <li>WebPack</li>
                        <li>React</li>
                        <li>REST api</li>
                        <li>English - upper intermediate</li>
                    </ul>
                </div>
            </div>
        );
    }
}