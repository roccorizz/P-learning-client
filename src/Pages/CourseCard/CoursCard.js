import React from 'react';
import Image from 'react-bootstrap/Image';
import './CourseCard.css';
import { Link } from 'react-router-dom';

const Coursecard = ({ course }) => {
    const { _id, title, instructor, course_hours, price, image_url } = course;
    return (

        <div className='col-md-6 coursecard'>
            <div className='card mb-5'>
                <div className='card-title'>
                    <Image src={image_url} className="img" style={{ width: '100%', height: '140px' }}></Image>
                </div>
                <div className='card-body'>
                    <h5 className='w-100' style={{ height: '60px' }}>{title}</h5>
                    <p>Instructor: {instructor}</p>
                    <div className='d-flex justify-content-between'>
                        <p>Duration : {course_hours} hours</p>
                        <p>Price: {price} Dollar</p>
                    </div>
                    <Link to={`/course/${_id}`} className='btn'>Course Details</Link>
                </div>

            </div>
        </div>


    );
};

export default Coursecard;