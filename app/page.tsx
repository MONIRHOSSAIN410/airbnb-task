import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Carousal from './components/Carousal.jsx'
import Service from './components/Service.jsx'
import Airbn from './components/Airnbn.jsx'
import Tools from './components/Tools.jsx'
import GettingStarted from './components/GettingStarted.jsx'
import Reasons from './components/Reasons.jsx'
import Clients from './components/Clients.jsx'
import Frequently from './components/Frequently.jsx'
import Question from './components/Question.jsx'
import Footer from './components/Footer.jsx'

const page = () => {
  return (
    <div>
   <Header/>
   <Hero/>
   <Carousal/>
   <Service/>
   <Airbn/>
   <Tools/>
   <GettingStarted/>
  <Reasons/>
   <Clients/>
   <Frequently/>
   <Question/>
   <Footer/>
    </div>
  )
}

export default page;


