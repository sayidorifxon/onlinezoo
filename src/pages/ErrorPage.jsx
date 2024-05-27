import React from 'react'
import { NavLink } from 'react-router-dom'
import bottom from '../img/bottomimg.png'
function ErrorPage() {
  return (
    <main className='errorpage'>
      <h1>404</h1>
      <p>Oops, the page you are looking for doesn’t exist.</p>
      <NavLink to="/">Back Home</NavLink>
      <div className="error__bottom">
        <img src={bottom} alt="" />
      </div>
    </main>
  )
}

export default ErrorPage
