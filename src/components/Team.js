import React from 'react'
import Emml from '../image/Emml.jpg';
import Anna from '../image/Anna.jpg';
import Oby from '../image/Oby.jpg';
import Cheaeh from '../image/Cheaeh.jpg';
import Helmi from '../image/Helmi.jpg';


function Team() {
    return (
        <div className='team'>
            <div className="caption">Introduction of Team members and their Roles </div>
            <div className='team_wrapper'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Anna}
                        alt=" "
                    />
                </div>
                <div className='team_wrapper-text'>
                    <ul>
                        <li className="caption1">Anna (Team leader)</li>
                        <li>Set up layout for the workshop and groupwork</li>
                        <li>Made routing for blog/blog details</li>
                        <li>Created system of contexts and reducers for fetching data</li>
                        <li>Search and tags in blog section, random and latest workshops on main page</li>
                        <li>Search on materials page</li>
                        <li>Project management, creating tasks in Jira, debugging and code refactoring in general</li>
                    </ul>
                </div>
            </div>
            <div className='team_wrapper'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Helmi}
                        alt=" "
                    />
                </div>
                <div className='team_wrapper-text'>
                    <ul>
                        <li className="caption1">Nguyen Hong Ngoc (Helmi)</li>
                        <li>Worked with client to get requirements and converted them into website structure.</li>
                        <li>Created ⅕ of all components, then I gathered components together for the blog page and test it.</li>
                        <li>Created header generates content accordingly to user status</li>
                        <li>Created the sliders</li>
                        <li>Created user authentication using Firebase so that users can sign up, login, logout, forget password</li>
                        <li>Created route into public and private ones under users context API</li>
                        <li>added transition between pages. </li>
                    </ul>
                </div>
            </div>
            <div className='team_wrapper'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Cheaeh}
                        alt=" "
                    />
                </div>
                <div className='team_wrapper-text'>
                    <ul>
                        <li className="caption1">Chaeah</li>
                        <li>Set up the layout and styles for the About page</li>
                        <li>Customized the style on the accordion.</li>
                        <li>Created the counters.</li>
                        <li>Tested the mobile version. </li>
                        <li>Fixed the style for the shared components in mobile version.</li>
                        <li>Worked with Firebase for the Comments component.</li>
                    </ul>
                </div>
            </div>
            <div className='team_wrapper'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Oby}
                        alt=" "
                    />
                </div>
                <div className='team_wrapper-text'>
                    <ul>
                        <li className="caption1">Oby</li>
                        <li>Converted and connected relevant HTML pages from original theme to React.js components</li>
                        <li>Created an accordion for the ToggleQA component</li>
                        <li>Created Context API for Workshop and Groupwork components</li>
                        <li>Created content model and content in contenful for Workshop and Groupwork post</li>
                        <li>Linked contentful data to Workshop and Groupwork components</li>
                        <li>Testing and general bug fixes</li>
                    </ul>
                </div>
            </div>
            <div className='team_wrapper'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Emml}
                        alt=" "
                    />
                </div>
                <div className='team_wrapper-text'>
                    <ul>
                        <li className="caption1">Emmanuel</li>
                        <li>Converted and connected relevant HTML pages from original theme to React.js components</li>
                        <li>Created an accordion for the ToggleQA component</li>
                        <li>Created Context API for Workshop and Groupwork components</li>
                        <li>Created content model and content in contenful for Workshop and Groupwork post</li>
                        <li>Linked contentful data to Workshop and Groupwork components</li>
                        <li>Testing and general bug fixes</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team
