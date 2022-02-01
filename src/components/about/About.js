import React from 'react';
import './About.css'

const About = () => {
    return <div className="about-container">
        <div className="about-desc">
            <h3>Let me tell you something about me</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et velit nec purus scelerisque efficitur sed vel diam. Nam a urna convallis, eleifend quam eu, lacinia massa. Sed vitae velit felis. Sed aliquam feugiat velit et sodales.</p>
        </div>
        <div className="about-img">
            <img src="https://cdn.pixabay.com/photo/2016/08/29/08/55/work-1627703_960_720.jpg" alt="about" ></img>

        </div>
    </div>;
};

export default About;
