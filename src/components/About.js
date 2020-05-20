import React from "react";

function About() {
  return (
    <React.Fragment>
      <div className='About'>
        <h2>About</h2>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwow.gamepedia.com%2Fmedia%2Fwow.gamepedia.com%2F0%2F01%2FBackstab_Bindo_Gearbomb_TCG.jpg&f=1&nofb=1" alt="My true form" height="420" width="520"></img>
        <h3>Jack</h3>
        <p>I am a student at Epicodus and this is my Capstone Project. This app is a web scraper, web scrapers let users scrape DOM elements 
          from a website so that you can use that data however you want, it is kind of making your own api out of a webpage. This app is designed to scrape the Classic Wow wiki 
          for data on items/equipment that you can use in Classic World of Warcraft. This app will let people search and pick equipment scraped from the Wiki 
          and put them in their own lists. The App will have a calculator that will add all the Primary stats of the selected items and show them to the user.
          This functionality will hopefully help Classic WoW players make better decisions on what equipment they will use in game and hopefully help them perform
          better because of it.</p>
      </div>
    </React.Fragment>
  )
}

export default About;