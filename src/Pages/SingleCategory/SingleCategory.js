import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import './SingleCategory.css';

const SingleCategory = ({ category }) => {
    const { id, name, img } = category;
    return (

        <div className="col-md-4 col-sm-6 text-center mt-5 singlecategory">
            {id !== '7' && <Link to={`/category/${id}`}>
                <div className="card mb-5">
                    <div className='card-title mt-3 mb-3'>
                        <Image src={img} style={{ width: "100px", height: "80px" }}></Image>
                    </div>
                    <div className="card-body">
                        <h4>{name}</h4>
                    </div>

                </div>
            </Link>}
        </div>


    );
};

export default SingleCategory;