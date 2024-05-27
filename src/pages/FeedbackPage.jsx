import React from 'react'
import "../styles/feedback.css"
function FeedbackPage() {
  return (
    <main className='feedback'>
      <div className="feedback__wrapper">
        <h3>Leave feedback</h3>
        <h5>Name</h5>
        <input type="text" />
        <h5>Email</h5>
        <input type="text" />
        <h5>Feedback</h5>
        <input type="text" />
        <button>send</button>
      </div>
    </main>
  )
}

export default FeedbackPage
