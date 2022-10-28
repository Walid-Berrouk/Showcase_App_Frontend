import React from 'react'

// Assets
import GooglePlayBadge from '../../assets/img/google-play-badge.png'
import AppleStoreBadge from '../../assets/img/app-store-badge.svg'

export default function GetApp() {
  return (
    // <!-- App badge section-->
        <section className="bg-gradient-primary-to-secondary" id="download">
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" style={{height: 75}} src={GooglePlayBadge} alt="..." /></a>
                <a href="#!"><img className="app-badge" src={AppleStoreBadge} alt="..." /></a>
                </div>
            </div>
        </section>
  )
}
