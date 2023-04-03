import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// Assets
import { baseUrl } from '../shared/baseUrl'

export default function SignInPage() {

  const navigate = useNavigate()


    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = event => {
        event.preventDefault()
        // console.log(credentials)
        // alert(`Email:${credentials.email}  \nPassword:${credentials.password} \nThank for using our web site`)

        axios
        .post(`${baseUrl}/api/signIn`,
            credentials
        )
        .then(res => {
            alert(res.data)
            localStorage.setItem('JWT', res.data.token)
            navigate("/main/home")
        })
        .catch(err => {
            alert("Something Went Wrong ! Please Try Again")
        })
    }


  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-in form</h1>
        <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
            value={credentials.email}
            onChange={(event) => setCredentials({...credentials, email: event.target.value})}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
            value={credentials.password}
            onChange={(event) => setCredentials({...credentials, password: event.target.value})}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <hr className="my-4" />
          <Link to="/signUpPortal">Not Registered Yet ?</Link>
          <br />
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
        </form>
      </div>
    </div>
  </div>
  )
}
