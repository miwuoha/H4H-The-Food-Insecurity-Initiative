import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './resources.css'

const Resources = (props) => {
  return (
    <div className="resources-container">
      <Helmet>
        <title>Resources - Hackathon Website</title>
        <meta property="og:title" content="Resources - Hackathon Website" />
      </Helmet>
      <div className="resources-banner">
        <h1 className="resources-text">
          Contribute to Solving Food Insecurity Today!
        </h1>
      </div>
      <div className="resources-container1">
        <img
          alt="image"
          src="/screenshot%202024-02-17%20at%204.02.18%C3%A2%C2%80%C2%AFpm-200h.png"
          className="resources-image"
        />
        <h1 className="resources-text1">Volunteer</h1>
        <span className="resources-text2">
          <span>
            There are many places where you are able to volunteer to combat food
            insecurity. Some of them include the following:
          </span>
          <br></br>
          <br></br>
        </span>
        <a
          href="https://localfoodbank.org/volunteer/?gad_source=1&amp;gclid=Cj0KCQiAz8GuBhCxARIsAOpzk8xZNKzzyFj3nOHeuHETPM1Lf4NcQsUcmjlf_mHemuzivcspLSU7JgkaAhjNEALw_wcB"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link"
        >
          Second Harvest Food Bank (in the Bay Area)
        </a>
        <a
          href="https://www.sfmfoodbank.org/volunteer/"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link1"
        >
          SF Marin Food Bank
        </a>
        <a
          href="https://www.sfmfoodbank.org/volunteer/"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link2"
        >
          Loaves and Fishes Community Kitchen
        </a>
      </div>
      <div className="resources-container2">
        <img
          alt="image"
          src="/download-1-200h.jpg"
          className="resources-image1"
        />
        <h1 className="resources-text6">Donate</h1>
        <span className="resources-text7">
          There are many organizations you can donate to help combat food
          insecurity. Here are a few suggestions.
        </span>
        <a
          href="https://thp.org/?utm_source=ggfundproblemenvironment&amp;utm_medium=cpc&amp;utm_campaign=SEMFundraising&amp;gad_source=1&amp;gclid=Cj0KCQiAz8GuBhCxARIsAOpzk8zAB9nWw-NsKeI6gxQB-jBX1hwwqxBK91ZNSZIgDDKbp90QamYYU68aAkm2EALw_wcB"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link3"
        >
          The Hunger Project
        </a>
        <a
          href="https://www.feedingamerica.org/programs-services"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link4"
        >
          Feeding America
        </a>
        <a
          href="https://www.actionagainsthunger.org/who-we-are/about/"
          target="_blank"
          rel="noreferrer noopener"
          className="resources-link5"
        >
          Action Against Hunger
        </a>
      </div>
      <div className="resources-container3">
        <h1 className="resources-text8">
          Thank you for participating in this activity. Your time is greatly
          appreciated.
        </h1>
        <Link to="/" className="resources-navlink button">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default Resources
