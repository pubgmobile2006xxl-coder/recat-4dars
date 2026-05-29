import React from 'react'
import "./Section3.css";

const Section3 = () => {
  return (
    <>
      <section className='section3'>
        <div className="container">
          <div className="cards">
            <div className="card_text">
              <h1>Find Your Course That Makes Bright Future</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ultricies at diam magnis faucibus et faucibus gravida.
                malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed.
                Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, </p>
              <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. </a>
              <br />
              <button>Learn More</button>
            </div>

            <div className="card_vd">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pzSv1uidzIw?si=y4XSRmuuvyv58vZb" 
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section3