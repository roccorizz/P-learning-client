import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';

import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on:</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

        </div>
    );
};

export default RightSideNav;