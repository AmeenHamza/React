import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactStars from 'react-stars'
import CrouselProduct from './CrouselProduct';

function ProductModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.details.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <div>
                <CrouselProduct images={props.details.images} />
              </div>
            </div>
            <div className="col-md-6">
              <h1>{props.details.title}</h1>
              <h3>{props.details.brand}</h3>
              <p className='mt-3'>Price : <del>{props.details.price}</del> <ins>{props.details.discountPercentage}</ins></p>
              <p>Stock : {props.details.stock}</p>
              <p>Category : {props.details.category}</p>
              <p>Ratings :
                <ReactStars
                  count={props.details.rating}
                  value={props.details.rating}
                  edit={false}
                  size={24}
                  color2={'#ffd700'} />
              </p>
              <p>Description : {props.details.description}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add to cart</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductModal;