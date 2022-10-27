import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from './slider1.png';
import slider2 from './slider2.jpg';
import slider3 from './slider3.jpg';
import './Home.css';
import { useLoaderData } from 'react-router-dom';

import { FaGraduationCap, FaChalkboardTeacher } from "react-icons/fa";
import SingleCategory from '../SingleCategory/SingleCategory';

const Home = () => {
    const allcategories = useLoaderData();

    return (

        <div>
            <div className="mb-5">
                <AwesomeSlider className="slider">
                    <div data-src={slider2} />
                    <div data-src={slider3} />
                    <div data-src={slider1} />
                </AwesomeSlider>
            </div>
            <div className='container'>
                <div className="about">
                    <div className='row'>
                        <div className='col-md-7 col-sm-12 mt-5'>
                            <h2>TryCatch | Best IT Training Institute in Bangladesh</h2>
                            <p>TryCatch is recognized as one of Bangladesh's best global skill development and IT training centres. The journey of TryCatch started in 2014 with a big dream to bring applied education to the mass population at an affordable cost. The main purpose of TryCatch is to facilitate the underprivileged, disadvantaged people, especially youth and women, with the best IT-related skills.</p>

                        </div>
                        <div className='col-md-5 col-sm-12 mt-5 text-light'>
                            <div className="d-flex justify-content-between">

                                <div className='card text-center'>
                                    <div className='card-tittle'>
                                        <FaGraduationCap className="fs-1 mt-3"></FaGraduationCap>
                                    </div>
                                    <div className="card-body">
                                        <h3>10K+</h3>
                                        <h6 className="w-100 mt-3">Graduate Students</h6>
                                    </div>

                                </div>
                                <div className='card text-center'>
                                    <div className='card-tittle'>
                                        <FaChalkboardTeacher className="fs-1 mt-3"></FaChalkboardTeacher>
                                    </div>
                                    <div className="card-body">
                                        <h3>200+</h3>
                                        <h6 className="mt-3">Expert Mentors</h6>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>
            <div className="departments">
                <div className='container'>
                    <h2 className="text-center mt-5">Departments</h2>

                    <div className="row">
                        {
                            allcategories.map((category) =>

                                <SingleCategory key={category.id} category={category}></SingleCategory>
                            )
                        }
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Home;