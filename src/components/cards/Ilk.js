import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap' 

function Ilk ({ kidney }) {
    return (
        <Card className='kidney'>
            <Card.Body>
                <div>
                    <Link to={kidney.url} >
                <Card.Img src={kidney.image} alt="here" />
                    <Card.Title>
                    {kidney.name}
                    </Card.Title>
                    </Link>
                </div>
            </Card.Body>
        </Card> 
    )
}

export default Ilk;
