import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './map-of-the-us.css'

const MapOfTheUS = (props) => {
  return (
    <div className="map-of-the-us-container">
      <Helmet>
        <title>Map-of-the-US - Hackathon Website</title>
        <meta property="og:title" content="Map-of-the-US - Hackathon Website" />
      </Helmet>
      <div className="map-of-the-us-container1">
        <img
          alt="image"
          src="/map_450px-700w.png"
          className="map-of-the-us-image"
        />
      </div>
      <div className="map-of-the-us-banner">
        <h2 className="map-of-the-us-heading">
          As we saw in the mini simulation, there is a direct correlation with
          the states that have lower minimum wage and a higher food insecurity
          rate. 
        </h2>
      </div>
      <div className="map-of-the-us-container2">
        <img
          alt="image"
          src="/map_of_us_minimum_wage_by_state.svg-500h.png"
          className="map-of-the-us-image1"
        />
      </div>
      <div className="map-of-the-us-container3">
        <Link to="/resources" className="map-of-the-us-button button">
          Click here to continue.
        </Link>
      </div>
    </div>
  )
}

export default MapOfTheUS
