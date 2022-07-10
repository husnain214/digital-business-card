import React from "react"
import email from "../images/email-icon.svg"
import linkedin from "../images/linkedin-icon.svg"

export default function Main () {
    return (
        <main>
            <h1>Laura Smith</h1>
            <h6>Frontend Developer</h6>
            <p className= "subtitle">laurasmith.website</p>
            <button className="btn1">
                <img src={email} width= "16px" height="16px" alt="email"/>
                <span>Email</span>
            </button>
            <button className="btn2">
                <img src={linkedin} width= "16px" height="16px" alt="linkedin" />
                <span>LinkedIn</span>
            </button>

            <h2 className="first">About</h2>
            <p className="para">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

            <h2>Interests</h2>
            <p className="para">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </main>
    )
}