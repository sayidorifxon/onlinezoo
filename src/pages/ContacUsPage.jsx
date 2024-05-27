import React from 'react'
import "../styles/feedback.css"

function ContacUsPage() {
  return (
    <main className='feedback'>
      <div className="feedback__wrapper">
        <h3>Contact us</h3>
        <h5>Name</h5>
        <input type="text" />
        <h5>Email</h5>
        <input type="text" />
        <h5>Your Message</h5>
        <input type="text" />
        <button>send</button>
      </div>
    </main>
  )
}

export default ContacUsPage
