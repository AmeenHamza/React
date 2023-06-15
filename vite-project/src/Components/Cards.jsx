import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css";

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }} className='col-md-3 my-5 ms-5'>
        <Card.Img variant="top" src={props.src}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary">{props.click}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;