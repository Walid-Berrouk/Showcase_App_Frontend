import React from 'react'

import { ReactComponent as BigCercle } from "../../assets/shapes/big-cercle.svg";
import { ReactComponent as Cross } from "../../assets/shapes/cross.svg";
import { ReactComponent as SmallCercle } from "../../assets/shapes/small-cercle.svg";

import DemoVideo from '../../assets/videos/demo-screen.mp4'

export default function Features() {
  return (
    // <!-- App features section-->
        <section id="features">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div className="container-fluid px-5">
                            <div className="row gx-5">
                                <div className="col-md-6 mb-5">
                                    {/* <!-- Feature item--> */}
                                    <div className="text-center">
                                        <i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Device Mockups</h3>
                                        <p className="text-muted mb-0">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    {/* <!-- Feature item--> */}
                                    <div className="text-center">
                                        <i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Flexible Use</h3>
                                        <p className="text-muted mb-0">Put an image, video, animation, or anything else in the screen!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    {/* <!-- Feature item--> */}
                                    <div className="text-center">
                                        <i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Free to Use</h3>
                                        <p className="text-muted mb-0">As always, this theme is free to download and use for any purpose!</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {/* <!-- Feature item--> */}
                                    <div className="text-center">
                                        <i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 className="font-alt">Open Source</h3>
                                        <p className="text-muted mb-0">Since this theme is MIT licensed, you can use it commercially!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 order-lg-0">
                        {/* <!-- Features section device mockup--> */}
                        <div className="features-device-mockup">
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
        </section>
  )
}
