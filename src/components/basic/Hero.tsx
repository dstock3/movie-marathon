import React from 'react'
import '../../style/hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-top-container">
            <h1 className="main-head">FilmStack</h1>
            <div className="login-container">
                <div>Login</div>
                <div>Sign Up</div>
            </div>
        </div>
        <div className="intro-container">
            <div className="intro-text">Our movie marathon application makes it easy to plan and schedule long movie marathons with your friends. Simply choose the movies you want to watch, invite your friends to join, and let our application handle the rest. With our intuitive interface and easy-to-use features, you can quickly and easily plan a month-long movie marathon that will keep you and your friends entertained for hours on end. So why wait? Start planning your epic movie marathon today!
            </div>
        </div>
        <div className="hero-bottom-container">
            <div className="pitch">
            Here, you can write reviews, join discussions, and connect with other fans to share your passion for cinema. Whether you're a seasoned critic or simply a casual viewer, we invite you to join the conversation and share your love of movies with others. 
            </div>
            <div className="benefits-container">
                <span>Watching a variety of movies and expanding your cinematic tastes can have many benefits. Some of the key benefits include:</span>
                <ul className="benefits-list">
                    <li className="benefit-list-item">By watching movies from different genres, countries, and time periods, you can broaden your horizons and gain new insights into the world around you. This can help you develop a more open and curious mind, and can also make you more empathetic and understanding of people from different backgrounds and cultures.</li>
                    <li className="benefit-list-item">Expanding your cinematic tastes can also make watching movies more enjoyable and rewarding. By trying out new genres and styles of film, you can discover hidden gems and hidden talents that you may have never known about otherwise.</li>
                    <li className="benefit-list-item">Improved critical thinking skills: Watching a wide variety of movies can help you become a more critical and discerning viewer. By examining the themes, symbols, and techniques used in different films, you can develop a better understanding of what makes a movie good or bad.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero