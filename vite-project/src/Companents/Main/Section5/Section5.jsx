import React from 'react'
import './Section5.css'
import rasm1 from '../../../img/rasm1.png';
import rasm2 from '../../../img/rasm2.png';
import rasm3 from '../../../img/rasm3.png';
import rasm4 from '../../../img/rasm4.png';
import rasm5 from '../../../img/rasm5.png';
import rasm6 from '../../../img/rasm6.png';

import fram1 from '../../../img/Frame32.png';
import fram2 from '../../../img/Frame33.png';
import fram3 from '../../../img/Frame34.png';
import fram4 from '../../../img/Frame34.png';
import fram5 from '../../../img/Frame60.png';
import fram6 from '../../../img/Frame67.png';

const Section5 = () => {
  return (
    <>
      <section className="section5">
        <div className="container">
          <h1>Our All The Online Courses</h1>
          <p className='soz'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="cards">

            <div className="card">
              <img src={rasm6} alt="rasm" />
              <br />
              <img className='tun' src={fram1} alt="rasm" />
              <div className="chzu"></div>
              <div className="title">
                <h3>Development</h3>
                <p>$150</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>

            <div className="card">
              <img className='tun' src={rasm2} alt="rasm" />
              <br />
              <img src={fram2} alt="rasm" />
              <div className="chzu">.</div>
              <div className="title">
                <h3>Android Developer</h3>
                <p>$130</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>

            <div className="card">
              <img className='tun' src={rasm4} alt="rasm" />
              <br />
              <img src={fram3} alt="rasm" />
              <div className="chzu"></div>
              <div className="title">
                <h3>Java Script Course</h3>
                <p>$140</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>

            <div className="card">
              <img className='tun' src={rasm5} alt="rasm" />
              <br />
              <img src={fram3} alt="rasm" />
              <div className="chzu"></div>
              <div className="title">
                <h3>Android Developer</h3>
                <p>$120</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>

            <div className="card">
              <img className='tun' src={rasm3} alt="rasm" />
              <br />
              <img src={fram5} alt="rasm" />
              <div className="chzu"></div>
              <div className="title">
                <h3>Java Script Course</h3>
                <p>$120</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>

            <div className="card">
              <img className='tun' src={rasm1} alt="rasm" />
              <br />
              <img src={fram6} alt="rasm" />
              <div className="chzu"></div>
              <div className="title">
                <h3>Basic Marketing</h3>
                <p>$100</p>
              </div>
              <a href="#">Lorem ipsum dolor sit amet, consecte adipiscing elit. 
                Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</a>
            </div>
          </div>

          <button>View All Course</button>
        </div>
      </section>
    </>
  )
}

export default Section5