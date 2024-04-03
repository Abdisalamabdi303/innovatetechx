import React from 'react';
import './Section2.css';
import backgroundImage from '../../assets/frameimg.jpg'; 
function Section2() {
    return (
        <div className="frame-part">
            <div className="text-section">
                <div className="mission">
                    <h2>Mission</h2>
                    <p>Your IT mission is a concise and specific statement that describes what you do as an IT organization, how you do it, and why you do it. It should reflect your IT core functions, capabilities, and services, as well as your value proposition and differentiation.</p>
                </div>
                <div className="vision">
                    <h2>Vision</h2>
                    <p>A vision statement provides a brief description of a company's long-term goals. It's typically ambitious and communicates how the company plans to make a difference in the world. Think of it as a roadmap for making decisions that align with your company's philosophy and objectives.</p>
                </div>
            </div>
            <div className="image-section">
                <div className="circle-overlay">
                    <img src={backgroundImage} alt="Circle Background" className="circle-image" />
                </div>
            </div>
        </div>
    );
}

export default Section2;
