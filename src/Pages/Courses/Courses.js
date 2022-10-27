import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Coursecard from '../CourseCard/CoursCard';
import { Link } from 'react-router-dom';
import { FaRegDotCircle } from "react-icons/fa";
import './Courses.css';


const Courses = () => {
    const courses = useLoaderData();
    const [categories, courseCategories] = useState([]);
    useEffect(() => {
        fetch('https://plearning-server.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => courseCategories(data))
    }

        , [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 category'>
                        <h4 className='mb-4'>Course Categories</h4>
                        <hr style={{ width: '63%' }}></hr>
                        {

                            categories.map((category, index) => <h6 className='mb-3' key={index}><FaRegDotCircle className='me-2 far'></FaRegDotCircle> <Link to={`/category/${category.id}`}>{category.name}</Link></h6>)

                        }

                    </div>
                    <div className='col-md-8'>
                        <div class="row">
                            {
                                courses.map(course => <Coursecard key={course._id} course={course}></Coursecard>
                                )
                            }

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Courses;