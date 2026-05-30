import React from 'react'
import './Section4.css'
import onli from '/src/img/online-learning1.png'
import note from '/src/img/notes1.png'
import choi from '/src/img/choices1.png'
import tech from '/src/img/technical-support1.png'

const Section4 = () => {
  return (
    <>
      {/* 1. Katta S harfli teg kichik harfli standart <section> ga o'zgartirildi */}
      <section className="section4">
        <div className="container">
          <h1>How It Work</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </p>
          <div className="cards">
            <div className="card">
             <img src={onli} alt="Online Courses" />
             <h3>Learn More Online</h3>
             <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
            </div>

            <div className="card">
             <img src={note} alt="Online Courses" />
             <h3>Writing Notes</h3>
             <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
            </div>

            <div className="card">
             <img src={choi} alt="Online Courses" />
             <h3>Interactive Sessions</h3>
             <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
            </div>

            <div className="card">
             <img src={tech} alt="Online Courses" />
             <h3>Life Time Support</h3>
             <p>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Aliquam et hendrer it eui smod fusce sit.</p>
            </div>
          </div>
        </div>
      </section> {/* 2. Bu yer ham yopildi */}
    </>
  )
}

export default Section4