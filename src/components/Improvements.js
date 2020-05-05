import React from 'react'
import Animal from '../image/login.jpg';


function Improvements() {
    return (
        <div className="improve-wrapper">
            <div className='improve'>
                <div className='team_wrapper-image'>
                    <img
                        className='bioimg'
                        src={Animal}
                        alt=" "
                    />
                </div>
                <div className='improve_wrapper-text'>
                    <ul>
                        <li className="caption1">FURTHER IMPROVEMENTS</li>
                        <li><i class="far fa-check-square"></i> Integrate others tools (Zoom, Palet) into the page</li>
                        <li><i class="far fa-check-square"></i> Enhance strictly verification to avoid spam in contact form and comment section</li>
                        <li><i class="far fa-check-square"></i> Add more security features in term of users authentication</li>
                        <li><i class="far fa-check-square"></i> Develop new features in Materials page</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Improvements;
