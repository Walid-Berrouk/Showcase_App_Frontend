import React from 'react'

// Assets
import GooglePlayBadge from '../../assets/img/google-play-badge.png'
import AppleStoreBadge from '../../assets/img/app-store-badge.svg'
import { ReactComponent as BigCercle } from "../../assets/shapes/big-cercle.svg";
import { ReactComponent as Cross } from "../../assets/shapes/cross.svg";
import { ReactComponent as SmallCercle } from "../../assets/shapes/small-cercle.svg";

import DemoVideo from '../../assets/videos/demo-screen.mp4'

export default function Hero() {
  return (
    // <!-- Mashead header-->
    <header className="masthead">
        <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                    {/* <!-- Mashead text and app badges--> */}
                    <div className="mb-5 mb-lg-0 text-center text-lg-start">
                        <h1 className="display-1 lh-1 mb-3">Showcase your app beautifully.</h1>
                        <p className="lead fw-normal text-muted mb-5">Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
                        <div className="d-flex flex-column flex-lg-row align-items-center">
                            <a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" style={{height: 75}} src={GooglePlayBadge} alt="..." /></a>
                            <a href="#!"><img className="app-badge" src={AppleStoreBadge} alt="..." /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    {/* <!-- Masthead device mockup feature--> */}
                    <div className="masthead-device-mockup">
                            <BigCercle />
                            <Cross />
                            <SmallCercle />
                        <div className="device-wrapper">
                            <div className="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                <div className="screen bg-black">
                                    {/* <!-- PUT CONTENTS HERE:-->
                                    <!-- * * This can be a video, image, or just about anything else.-->
                                    <!-- * * Set the max width of your media to 100% and the height to-->
                                    <!-- * * 100% like the demo example below.--> */}
                                    <video muted="muted" autoPlay={true} loop={true} style={{maxWidth: "100%", height: "100%"}}>
                                        <source src={DemoVideo} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
