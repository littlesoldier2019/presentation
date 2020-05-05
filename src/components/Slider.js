import React, { Component } from 'react'
import Emml from '../image/Emml.jpg';
import Anna from '../image/Anna.jpg';
import Oby from '../image/Oby.jpg';
import Cheaeh from '../image/Cheaeh.jpg';
import Helmi from '../image/Helmi.jpg';

const annaText = (<ul>
    <li className="caption1">Anna (Team leader)</li>
    <li>Set up layout for the workshop and groupwork</li>
    <li>Made routing for blog/blog details</li>
    <li>Created system of contexts and reducers for fetching data</li>
    <li>Search and tags in blog section, random and latest workshops on main page</li>
    <li>Search on materials page</li>
    <li>Project management, creating tasks in Jira, debugging and code refactoring in general</li>
</ul>)

const helmi =( <ul>
    <li className="caption1">Nguyen Hong Ngoc (Helmi)</li>
    <li> I worked with client at the first stage to get their requirements and converted them into structure of the website.</li>
    <li>I shared ⅕ of all components, then I gathered components together for the blog page and test it.</li>
    <li>For functionality, I created the sliders; user authentication using Firebase so that users can sign up, login, logout, forget password; and the header generates content accordingly.</li>
    <li>Created content model and content in contenful for Workshop and Groupwork post</li>
    <li>I made the route into public and private ones under users context API, and added transition between pages. </li>
</ul>)

const chaeah = ( <ul>
    <li className="caption1">Chaeah</li>
    <li>Set up the layout and styles for the About page</li>
    <li>Customized the style on the accordion.</li>
    <li>Created the counters.</li>
    <li>Tested the mobile version. </li>
    <li>Fixed the style for the shared components in mobile version.</li>
    <li>Worked with Firebase for the Comments component.</li>
</ul>)

const oby = ( <ul>
    <li className="caption1">Oby</li>
    <li>Converted and connected relevant HTML pages from original theme to React.js components</li>
    <li>Created an accordion for the ToggleQA component</li>
    <li>Created Context API for Workshop and Groupwork components</li>
    <li>Created content model and content in contenful for Workshop and Groupwork post</li>
    <li>Linked contentful data to Workshop and Groupwork components</li>
    <li>Testing and general bug fixes</li>
</ul>)

const emml = ( <ul>
    <li className="caption1">Emmanuel</li>
    <li>Converted and connected relevant HTML pages from original theme to React.js components</li>
    <li>Created an accordion for the ToggleQA component</li>
    <li>Created Context API for Workshop and Groupwork components</li>
    <li>Created content model and content in contenful for Workshop and Groupwork post</li>
    <li>Linked contentful data to Workshop and Groupwork components</li>
    <li>Testing and general bug fixes</li>
</ul>)

const teamdata = [
    {
        name: 'Anna',
        image: Anna,
        text: annaText
    },
    {

        name: 'Helmi',
        image: Helmi,
        text: helmi
    },
    {
        name: 'Chaeah',
        image: Cheaeh,
        text: chaeah
    },
    {
        name: 'Oby',
        image: Oby,
        text:oby
    },
    {
        name: 'Emml',
        image: Emml,
        text: emml
    }
]


class Slider extends Component {

    state = {
        index: 0,
        teamdata
    };

    Next = () => {
        if (this.state.index < this.state.teamdata.length - 1) {
            this.setState({ index: this.state.index + 1 });
        } else {
            this.setState({ index: 0 });
        }
    }


    render() {

        return (
            <>
                 <div className="caption">Introduction of Team members and their Roles </div>
                <div className="slider">
                    {/* <div style={{ margin: '20px' }}>{this.state.teamdata[this.state.index].name}</div> */}
                    <div className='team_wrapper-image'><img className='bioimg' src={this.state.teamdata[this.state.index].image} alt=" " /></div>
                    <div className='team_wrapper-text'>{this.state.teamdata[this.state.index].text}</div>
                </div>
                <button className='btns' onClick={this.Next}> Next </button>
            </>

        );

    }

}
export default Slider;
