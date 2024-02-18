import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './game-page.css'

const GamePage = (props) => {
  return (
    <div className="game-page-container">
      <Helmet>
        <title>Game-Page - Hackathon Website</title>
        <meta property="og:title" content="Game-Page - Hackathon Website" />
      </Helmet>
      <div className="game-page-container1">
        <h1 className="game-page-heading1">
          Play the Minigame Below to Learn More:
        </h1>
        <div className="game-page-container2">
          <div className="game-page-container3">
            <Script
              html={`<iframe width="500" 
height="820"
style="border: 0px;""
src="https://studio.code.org/projects/applab/tsRqZ1fB8_4HbJX-lc2jlEqmrE5gYNM6xoHxh7PUWLs/embed?nosource"></iframe>`}
            ></Script>
          </div>
        </div>
        <Link to="/map-of-the-us" className="game-page-navlink button">
          Click here to continue.
        </Link>
      </div>
    </div>
  )
}

export default GamePage
