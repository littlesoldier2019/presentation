import React, { Component } from 'react'
import Emml from '../image/Emml.jpg';
import Anna from '../image/Anna.jpg';
import Oby from '../image/Oby.jpg';
import Cheaeh from '../image/Cheaeh.jpg';
import Helmi from '../image/Helmi.jpg';

const annaText = (<ul>
    <li className="caption1">Anna Riazantseva (Team leader)</li>
    <li><i class="far fa-check-square"></i> Set up layout for the workshop and groupwork</li>
    <li><i class="far fa-check-square"></i> Made routing for blog/blog details</li>
    <li><i class="far fa-check-square"></i> Created system of contexts and reducers for fetching data</li>
    <li><i class="far fa-check-square"></i> Search and tags in blog section, random and latest workshops on main page</li>
    <li><i class="far fa-check-square"></i> Search on materials page</li>
    <li><i class="far fa-check-square"></i> Project management, creating tasks in Jira, debugging and code refactoring in general</li>
</ul>)

const helmi =( <ul>
    <li className="caption1">Nguyen Hong Ngoc (Helmi)</li>
    <li><i class="far fa-check-square"></i> Worked with client to convert requirements into website structure.</li>
    <li><i class="far fa-check-square"></i> Shared ⅕ of all components, gathered components for the blog page and test.</li>
    <li><i class="far fa-check-square"></i> Created the sliders in hero images and testimonials</li>
    <li><i class="far fa-check-square"></i> User authentication using Firebase; users can sign up, login, logout, forget password.</li>
    <li><i class="far fa-check-square"></i> Created public/private under users context API</li>
    <li><i class="far fa-check-square"></i> Added transition between pages. </li>
</ul>)

const chaeah = ( <ul>
    <li className="caption1">Chaeah Park</li>
    <li><i class="far fa-check-square"></i> Set up the layout and styles for the About page</li>
    <li><i class="far fa-check-square"></i> Customized the style on the accordion.</li>
    <li><i class="far fa-check-square"></i> Created the counters.</li>
    <li><i class="far fa-check-square"></i> Tested the mobile version. </li>
    <li><i class="far fa-check-square"></i> Fixed the style for the shared components in mobile version.</li>
    <li><i class="far fa-check-square"></i> Worked with Firebase for the Comments component.</li>
</ul>)

const oby = ( <ul>
    <li className="caption1">Oby Manyando</li>
    <li><i class="far fa-check-square"></i> Set up the layout and styles for the Main page.</li>
    <li><i class="far fa-check-square"></i> Created routes on main page.</li>
    <li><i class="far fa-check-square"></i> Created Features section on Main page.</li>
    <li><i class="far fa-check-square"></i> Created the Contact form (Firebase and Cloud Functions)</li>
    <li><i class="far fa-check-square"></i> Project management tasks in Jira</li>
    <li><i class="far fa-check-square"></i> General testing and debugging</li>
</ul>)

const emml = ( <ul>
    <li className="caption1">Emmanuel Bugyei</li>
    <li><i class="far fa-check-square"></i> Converted and connected relevant HTML pages from original theme to React.js components</li>
    <li><i class="far fa-check-square"></i> Created an accordion for the ToggleQA component</li>
    <li><i class="far fa-check-square"></i> Created Context API for Workshop and Groupwork components</li>
    <li><i class="far fa-check-square"></i> Created content model and content in contenful for Workshop and Groupwork post</li>
    <li><i class="far fa-check-square"></i> Linked contentful data to Workshop and Groupwork components</li>
    <li><i class="far fa-check-square"></i> Testing and general bug fixes</li>
</ul>)

const animals = [
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
        animals
    };

    Next = () => {
        if (this.state.index < this.state.animals.length - 1) {
            this.setState({ index: this.state.index + 1 });
        } else {
            this.setState({ index: 0 });
        }
    }


    render() {

        return (
            <>
                <div className="team-slider">
                    <div className='team_wrapper-image'><img className='bioimg' src={this.state.animals[this.state.index].image} alt=" " /></div>
                    <div className='team_wrapper-text'>{this.state.animals[this.state.index].text}</div>
                </div>
                <button className='btns' onClick={this.Next}><i class="fas fa-angle-double-right"></i> </button>
            </>

        );

    }

}
export default Slider;
