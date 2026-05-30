import React from 'react'
import './Section4.css'
import onli from '/src/img/online-learning1.png'
import note from '/src/img/notes1.png'
import choi from '/src/img/choices1.png'
import tech from '/src/img/technical-support1.png'

const Section4 = () => {
  return (
    <>
      <section className="section4">
        <div className="container">
          <h1>How It Work</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>

          <div className="cards">

            <div className="card">
              <img src={onli} alt="rasm"/>
              <h3>Learn More Online</h3>
              <a href="#">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. 
                Aliquam et hendrer it eui smod fusce sit.</a>
            </div>

            <div className="card">
              <img src={note} alt="rasm"/>
              <h3>Writing Notes</h3>
              <a href="#">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. 
                Aliquam et hendrer it eui smod fusce sit.</a>
            </div>

            <div className="card">
              <img src={choi} alt="rasm"/>
              <h3>Interactive Sessions</h3>
              <a href="#">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. 
                Aliquam et hendrer it eui smod fusce sit.</a>
            </div>

            <div className="card">
              <img src={tech} alt="rasm"/>
              <h3>Life Time Support</h3>
              <a href="#">Lorem ipsum dolor sit amet, consecte tur adipiscing elit. 
                Aliquam et hendrer it eui smod fusce sit.</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section4