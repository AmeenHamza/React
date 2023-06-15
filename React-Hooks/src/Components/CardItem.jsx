import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductModal from './ProductModal';

import React from 'react'

export default function CardItem(props) {

    console.log(props.data);

    return (
        <div className="col-md-3 my-5">
            <Card style={{height: '65vh'}}>
                <Card.Img variant="top" src={props.data.thumbnail} style={{ width: '100%', height: '30vh' }} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>
                        {props.data.description.length > 50 ?
                            `${props.data.description.substring(0, 50)} ...` : props.data.description
                        }
                    </Card.Text>
                    <ProductModal details={props.data} />
                </Card.Body>
            </Card>
        </div>
    );
}
