import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './Course.css';
import { FaUserAlt, FaBusinessTime, FaMoneyBillAlt, FaArrowRight, FaBook, FaHandPointRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ReactToPdf from "react-to-pdf";
import { jsPDF } from "jspdf";
const Course = () => {
    const ref = React.createRef();
    const options = new jsPDF({
        orientation: 'landscape',
        unit: 'in',
        format: [4, 2]
    });
    const course = useLoaderData();
    const { course_module, requirements, title } = course;
    return (
        <div className="coursedetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card card1 mb-5">
                            <div className="card-title">
                                <Image src={course.image_url} style={{ width: '100%', height: '150px', borderRadius: '10px 10px 0px 0px' }}></Image>
                            </div>
                            <div className='card-body'>
                                <p><FaUserAlt className='me-2 cd'></FaUserAlt> Instructor: {course.instructor}</p>
                                <p><FaBusinessTime className="me-2 cd"></FaBusinessTime> Duration: {course.course_hours} hours</p>
                                <p><FaMoneyBillAlt className="me-2 cd"></FaMoneyBillAlt> Price: {course.price}</p>

                            </div>
                            <Link to={`/course-checkout/${course._id}`} className='btn cdBtn'>Get Premium Access <FaArrowRight className='ms-2'></FaArrowRight></Link>
                        </div>

                    </div>
                    <div className="col-md-8">
                        <div ref={ref} className='card card2 p-2 mb-4'>
                            <div className='card-title p-2'>
                                <div className='d-flex justify-content-between'>
                                    <h2 style={{ fontWeight: '600' }}>{course.title}</h2>
                                    <p className='price'>৳ {course.price}</p>
                                </div>
                            </div>
                            <div className='card-body'>
                                <p>{course.description}</p>
                                <Image src={course.image_url} style={{ width: '100%' }} headers={{ "Cache-Control": "no-cache" }}></Image>

                                <div className="d-flex justify-content-between mt-4">
                                    <h5>Instructor: {course.instructor}</h5>
                                    <h5>Duration: {course.course_hours} hours</h5>
                                </div>
                                <div className='mt-3'>
                                    <h3>Course Module</h3>
                                    {
                                        course_module.map((cm, index) => <p key={index}><FaBook className='me-2 fab'></FaBook> {cm}</p>)
                                    }
                                </div>
                                <div className='mt-3'>
                                    <h3>Course Requirements</h3>
                                    {
                                        requirements.map((req, index) => <p key={index}><FaHandPointRight className='me-2 fab'></FaHandPointRight> {req}</p>)
                                    }
                                </div>

                            </div>


                        </div>
                        <div>
                            <ReactToPdf targetRef={ref} filename={title} options={options} x={.5} y={.5} scale={0.8}>
                                {({ toPdf }) => (
                                    <button onClick={toPdf} className='btn btn-secondary text-light mb-5'>Download Course Details</button>
                                )}
                            </ReactToPdf>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Course;