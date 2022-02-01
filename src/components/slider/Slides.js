import React from "react";
import './Slider.css';

const slidesInfo = [
{
    src:  "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
    alt:  "Project 1",
    desc: "Project 1"
},
{
    src:  "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_960_720.jpg",
    alt:  "Project 2",
    desc: "Project 2"
},
{
    src:  "https://cdn.pixabay.com/photo/2017/06/04/20/23/binary-2372130_960_720.jpg",
    alt:  "Project 3",
    desc: "Project 3"
}
]

const slides = slidesInfo.map( slide =>(
    <div className="slide-container" >
        <img src={slide.src} alt="" />
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides; 