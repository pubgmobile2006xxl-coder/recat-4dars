import React from 'react';
import "./Section2.css";
import lec from "/src/img/lecture_1.png";
import ins from "/src/img/instructor1.png";
import suc from "/src/img/success1.png";

const Section2 = () => {
    return (
        <>
            <section className="section2">
                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <img src={lec} alt="Online Courses" />
                            <div className="text">
                                <h1>1400 +</h1>
                                <p>Online Courses</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={ins} alt="Online Courses" />
                            <div className="text">
                                <h1>1100+</h1>
                                <p>Expert Instructors</p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={suc} alt="Online Courses" />
                            <div className="text">
                                <h1>800+</h1>
                                <p>Success Stories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Section2;