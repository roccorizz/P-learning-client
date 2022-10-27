import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegDotCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Coursecard from '../CourseCard/Coursecard';


const Category = () => {
    const cats = useLoaderData();
    const [categories, courseCategories] = useState([]);
    useEffect(() => {
        fetch('https://learning-platform-server-beige.vercel.app/course-categories')
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

                            categories.map(category => <h6 className='mb-3'><FaRegDotCircle className='me-2 far'></FaRegDotCircle> <Link to={`/category/${category.id}`}>{category.name}</Link></h6>)

                        }
                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                            {
                                cats.map(cat => <Coursecard key={cat._id} course={cat}></Coursecard>)
                            }

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Category;