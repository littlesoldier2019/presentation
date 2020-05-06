/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Happy Readers</h2>
            <ul>
                <li><a href="/"><i className="fas fa-home"></i>Home</a></li>
                <li>< a href="/slider"><i className="fas fa-user"></i>Team</a></li>
                <li><a href="/aboutproject"><i className="fas fa-tasks"></i>About Project</a></li>
                <li><a href="/toolsandtechs"><i className="fas fa-digital-tachograph"></i>Tools & Techs</a></li>
                <li><a href="/designs"><i className="fas fa-project-diagram"></i>Designs</a></li>
                <li><a href="https://happyreaders.vn/" target="_blank"><i className="fas fa-blog"></i>Demo</a></li>
                <li><a href="/improvements"><i className="fas fa-map-pin"></i>Improvements</a></li>
            </ul>
        </div >
    )
}

export default Sidebar
