import React from 'react'

import TNWLogo from "../../assets/img/tnw-logo.svg"

export default function Testimonials() {
  return (
    // <!-- Quote/testimonial aside-->
    <aside className="text-center bg-gradient-primary-to-secondary">
        <div className="container px-5">
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-8">
                    <div className="h2 fs-1 text-white mb-4">"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</div>
                    <img src={TNWLogo} alt="..." style={{height: "3rem"}} />
                </div>
            </div>
        </div>
    </aside>
    )
}
