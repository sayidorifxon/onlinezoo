import React from 'react'
import "../styles/map.css"
import mapimg from '../img/Map.png'
import map1 from '../img/map1.png'
import map2 from '../img/map2.png'
import map3 from '../img/map3.png'
import map4 from '../img/map4.png'
import { NavLink } from 'react-router-dom'
function MapPage() {
  return (
    <main>
      <section className='map'>
        <div className="container">
          <div className="map__wrapper">
            <h2>Choose your favorite Animal</h2>
            <NavLink to="/eagle" className='map1'><img  src={map1} alt="" /></NavLink>
            <NavLink to="/gorilla" className='map2'><img  src={map2} alt="" /></NavLink>
            <NavLink to="/zoo" className='map3'><img  src={map3} alt="" /></NavLink>
            <NavLink to="/aligator" className='map4'><img  src={map4} alt="" /></NavLink>
            <img className='map__main' src={mapimg} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default MapPage
