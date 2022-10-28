import React from 'react'
import Basic from '../components/home/Basic'
import CallToAction from '../components/home/CallToAction'
import Features from '../components/home/Features'
import GetApp from '../components/home/GetApp'
import Hero from '../components/home/Hero'
import Testimonials from '../components/home/Testimonials'

//Styles

import '../styles/Home.css'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <Testimonials />
        <Features />
        <Basic />
        <CallToAction />
        <GetApp />
    </div>
  )
}
