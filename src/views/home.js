import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Hackathon Website</title>
        <meta property="og:title" content="Hackathon Website" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">A PROJECT BY KEONA AND MARY</span>
        <h1 className="home-text1">
          Food Insecurity is an issue that affects millions of people daily.
        </h1>
        <Link to="/game-page" className="home-navlink button">
          Click here to learn more.
        </Link>
      </div>
    </div>
  )
}

export default Home
