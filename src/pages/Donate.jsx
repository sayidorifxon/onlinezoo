import React, { useRef } from 'react'
import "../styles/donate.css"
import methods from '../img/methods.png'
import protect from '../img/protect.png'
function Donate() {
  let button1 = useRef()
  let button2 = useRef()
  let button3 = useRef()
  let button5 = useRef()
  let button10 = useRef()
  let button25 = useRef()
  function monthly(){
    button1.current.classList.toggle("bc")
    button2.current.classList.remove("bc")
  }
  function onetime(){
    button2.current.classList.toggle("bc")
    button1.current.classList.remove("bc")
  }
  function bt3(){
    button3.current.classList.toggle("bc")
    button5.current.classList.remove("bc")
    button10.current.classList.remove("bc")
    button25.current.classList.remove("bc")
  }
  function bt5(){
    button5.current.classList.toggle("bc")
    button3.current.classList.remove("bc")
    button10.current.classList.remove("bc")
    button25.current.classList.remove("bc")
  }
  function bt10(){
    button10.current.classList.toggle("bc")
    button3.current.classList.remove("bc")
    button5.current.classList.remove("bc")
    button25.current.classList.remove("bc")
  }
  function bt25(){
    button25.current.classList.toggle("bc")
    button3.current.classList.remove("bc")
    button5.current.classList.remove("bc")
    button10.current.classList.remove("bc")
  }
  return (
    <main className='donate'>
      <div className="donate__wrapper">
        <h2>Donate to volunteers</h2>
        <p>Support your favourite animals. It is as simple as buying a cup of coffee.</p>
        <h5>Choose an animal</h5>
        <input type="text" />
        <h5>Payments</h5>
        <div className="pays">
          <div className="monthly">
            <button ref={button1} onClick={monthly}>monthly</button>
          </div>
          <div className="one">
            <button ref={button2} onClick={onetime}>One-time</button>
          </div>
        </div>
        <div className="prices">
          <button ref={button3} onClick={bt3}>$3</button>
          <button ref={button5} onClick={bt5}>$5</button>
          <button ref={button10} onClick={bt10}>$10</button>
          <button ref={button25} onClick={bt25}>$25</button>
        </div>
        <h5>your name</h5>
        <input type="text" />
        <h5>your email</h5>
        <input type="text" />
        <div className="methods">
          <img src={methods} alt="" />
        </div>
        <input type="text" placeholder='Card Number' />
        <button className='donate__button'>send</button>
        <h6><img src={protect} alt="" />Your payment is protected</h6>
      </div>
    </main>
  )
}

export default Donate
