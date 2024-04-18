import React from "react";


export default function MainContent(){
    return(
        <div className="container">
        <div className="main">
            <div className="main-name">
                    <h1>
                Quoc Viet
                    </h1>
                    <h2>Frontend Developer</h2>
                    <p className="small-text"> laurasmith.website</p>
                    <div className="main-btn">
                        <button className="white">Email</button>
                        <button className="blue">LinkedIn</button>
                    </div>
            </div>
            <section>
                <h3>About</h3>
                <p className="small-text">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </section>
            <section>
                <h3>Interests</h3>
                <p className="small-text">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </section>
        </div>
        </div>
    )
}