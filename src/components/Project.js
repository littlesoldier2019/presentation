import React from 'react'

function Project() {
    
    return (
        <div>
            <div className="caption">Introduce your project: Client and Outcome.</div>
            <div className='team_wrapper'>
                <ol style={{ fontSize: '25px', paddingLeft: '100px' }}>
                    <li><p><span style={{ fontSize: '25px', fontWeight: 'bold' }}>Client:</span></p>
                        <ul>
                            <li><span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Location: Vietnam</span></li>
                            <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Industry: Education </span></li>
                            <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Business: ESL(English as a Second Language) academy </span></li>
                            <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Business Target Audiences: Students(children) and parents</span></li>
                            <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Purpose of the website: </span>
                                <ol> <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>To share learning materials with students</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>To update upcoming events in the academy</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>To use as a marketing tools (introduce the academy and share blogs)</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>To get a contact from potential customers (?)</span></li>
                                </ol></li>
                        </ul>
                    </li>

                    <li><p><span style={{ fontSize: '25px', fontWeight: 'bold' }}>Outcome:</span></p>
                        <ul>
                            <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Website design:  </span>
                                <ol> <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>The final design has ended up as the earlier design prototype that the client agreed on.</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Given the target audiences (children), vivid color schemes and the simple UI were applied.</span></li>
                                </ol>
                            </li>

                            <li>
                                <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Development:  </span>
                                <ol> <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Right technology was chosen to meet both the client’s needs and the website’s functionalities. (Details in the next chapter)</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>The structure of components was planned out by taking into account any updates in the future.</span></li>
                                </ol>
                            </li>

                            <li>
                                <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Testing: </span>
                                <ol> <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>The website (tablet, pc, and mobile) works responsively in various devices (tablet, pc, and mobile).</span></li>
                                    <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Contentful and Firebase works without any bugs. </span></li>
                                </ol>
                            </li>
                            <li>
                                <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>Delivering:</span>
                                <ol> <li> <span style={{ fontSize: '18px', lineHeight: '2.0rem' }}>The website will be delivered to the client on 8th May as a final product.</span></li>
                                </ol>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Project
