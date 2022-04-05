import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'; 
import PlusIcon from "../../assets/images/plus.svg"


export default function CategoryCard(props) {
    const { id, name, image } = props.data;
    return (
        <Card className='kidney'>
            <Card.Body>
                <div>
                    <Link to={`sign-in?categoryId=${id}&categoryName=${name}`} >
                <Card.Img src={image} alt="here" />
                <Card.Img src={PlusIcon} alt="there" />
                    <Card.Title>
                    {name}
                    </Card.Title>
                    </Link>
                </div>
            </Card.Body>
        </Card> 
    );
}