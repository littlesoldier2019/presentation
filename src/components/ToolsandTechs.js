import React from 'react'

function ToolsandTechs() {

    return (

        <div>
            <div className="caption">Explaining choices: Tools and Technologies. </div>
            <div className='team_wrapper' >
                <ol style={{ fontSize: '25px', paddingLeft: '100px', marginTop: '10px' }}>
                    <li><span style={{ fontSize: '25px', fontWeight: 'bold', borderBottom: '2px #eca92b solid', color: '#335083' }}>Styling:</span>
                        <ul>
                            <li> <p><span style={{ fontSize: '18px', lineHeight: '1.25' }}> Bootstrap framework and our own custom css styles.</span></p></li>
                        </ul>
                    </li>

                    <li><span style={{ fontSize: '25px', fontWeight: 'bold', borderBottom: '2px #eca92b solid', color: '#335083' }}>Frontend:</span>
                        <ul>
                            <li><p><span style={{ fontSize: '18px', lineHeight: '1.25', wordBreak: 'breakall' }}>We chose to work with pure React, because it was a familiar technology for us and we want to learn it deeper.</span></p></li>

                            <li><p><span style={{ fontSize: '18px', lineHeight: '1.25', wordBreak: 'breakall' }}>We used modern version of React, functional components with hooks, context Api and React Router.</span></p></li>

                            <li><p><span style={{ fontSize: '18px', lineHeight: '1.25', wordBreak: 'breakall' }}> We Also used a lot of different plugins and packages for sliders, accordions, counters, animations and e.c.</span></p></li>
                        </ul>
                    </li>

                    <li> <span style={{ fontSize: '25px', fontWeight: 'bold', borderBottom: '2px #eca92b solid', color: '#335083' }}>Backend and database:</span>
                        <ul><li><p><span style={{ fontSize: '18px' }}>We used Contentful as CMS so our client can control the content for blogs, materials, workshops and groupworks.</span></p></li>
                            <li><p><span style={{ fontSize: '18px', wordBreak: 'breakall' }}>    Also we used Firebase to do authentication with it, comments section and contacts page.</span></p></li>
                            <li><p><span style={{ fontSize: '18px', wordBreak: 'breakall' }}> Final version was deployed to Firebase too. We wanted to try Firebase because it’s a popular tool and we needed real-time database. </span></p></li>

                        </ul>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default ToolsandTechs
