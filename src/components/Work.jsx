import React from 'react'
import "../styles/work.css"
import work1 from '../img/work1.png'
import work2 from '../img/work2.png'
import work3 from '../img/work3.png'
import work4 from '../img/work4.png'
function Work() {
  return (
    <section className='work'>
            <img className='work__pos' src={work4} alt="" />
      <div className="container">
        <div className="work__wrapper">
            <div className="work__top">
               <h3>How it works </h3> 
               <div className="work__cards">
                <div className="work__card">
                  <div className="img__box">
                    <img src={work1} alt="" />
                  </div>
                  <p>Keep an eye on your favourite animals online</p>
                </div>
                <div className="work__card">
                  <div className="img__box">
                    <img src={work2} alt="" />
                  </div>
                  <p>Become a part of the communtity</p>
                </div>
                <div className="work__card">
                  <div className="img__box">
                    <img src={work3} alt="" />
                  </div>
                  <p>Support animals with the donations</p>
                </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work
