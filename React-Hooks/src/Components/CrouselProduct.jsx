import Carousel from 'react-bootstrap/Carousel';

function CrouselProduct(props) {
  return (
    <Carousel>

        {
            props.images.map((image)=> (
                <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={image}
          alt="First slide"
          style={{height: '50vh'}}
        />
      </Carousel.Item>
            ))
        }

      
     
    </Carousel>
  );
}

export default CrouselProduct;