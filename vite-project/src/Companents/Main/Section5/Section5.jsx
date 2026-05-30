import React from 'react'
import './Section5.css'

import img1 from '/src/img/course1.png'
import img2 from '/src/img/course2.png'
import img3 from '/src/img/course3.png'
import img4 from '/src/img/course4.png'
import img5 from '/src/img/course5.png'
import img6 from '/src/img/course6.png'

import authorImg from '/src/img/author.png' 

const Section5 = () => {
  const courses = [
    { id: 1, img: img1, title: 'Development', price: '$150', students: '5.8k', views: '69k', rating: '4.5' },
    { id: 2, img: img2, title: 'Android Developer', price: '$130', students: '5.8k', views: '69k', rating: '4.5' },
    { id: 3, img: img3, title: 'JavaScript Course', price: '$140', students: '5.8k', views: '69k', rating: '4.5' },
    { id: 4, img: img4, title: 'Android Developer', price: '$120', students: '5.8k', views: '69k', rating: '4.5' },
    { id: 5, img: img5, title: 'JavaScript Course', price: '$120', students: '5.8k', views: '69k', rating: '4.5' },
    { id: 6, img: img6, title: 'Basic Marketing', price: '$100', students: '5.8k', views: '69k', rating: '4.5' },
  ];

  return (
    <section className="section5">
      <div className="container">
        
        <div className="section5-header">
          <h2>Our Online Courses</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-img">
                <img src={course.img} alt={course.title} />
              </div>
              
              <div className="course-stats">
                <span><i className="far fa-user"></i> {course.students}</span>
                <span><i className="far fa-eye"></i> {course.views}</span>
                <span><i className="far fa-star"></i> {course.rating}</span>
                <img className="author-thumb" src={authorImg} alt="Mentor" />
              </div>

              <div className="course-body">
                <div className="course-title-row">
                  <h3>{course.title}</h3>
                  <span className="price">{course.price}</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consecte tuadipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="section5-footer">
          <button className="view-all-btn">View All Courses</button>
        </div>

      </div>
    </section>
  )
}

export default Section5