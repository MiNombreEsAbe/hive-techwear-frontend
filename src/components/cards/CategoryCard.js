import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'; 
import PlusIcon from "../../assets/images/plus.svg"


export default function CategoryCard(props) {
    const { id, name, image } = props.data;
    const urlDict = {
        "T-Shirts": "/tshirts",
        "Shirts": "/shirts",
        "Bottoms": "/bottoms",
        "Hats": "/hats"
    };

    return (
        <Card className='kidney'>
            <Card.Body>
                    <Link to={urlDict[name]} >
                    <div className='carditems'>
                <Card.Img src={image} className="imageC" alt="here" />
                <div className="void"></div>
                <Card.Img src={PlusIcon} className="plus" alt="there" />
                    <Card.Title className="nameC">
                    {name}
                    </Card.Title>
                    </div>
                    </Link>
            </Card.Body>
        </Card> 
    );
}