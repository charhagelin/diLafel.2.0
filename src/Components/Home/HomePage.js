import React from "react";
import { Carousel } from "react-bootstrap";
// import { diLafel } from '../Images/diLafel.jpg';
// import Carousel from './Carousel';
import "../../Styles/Home.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <Carousel>
        <Carousel.Item>
          <img
            alt="900x500"
            src="http://res.cloudinary.com/charhagelin/image/upload/v1520100665/herbs_lbu5os.jpg"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="900x500"
            src="http://res.cloudinary.com/charhagelin/image/upload/v1520101147/cilantro-header_qgihs6.jpg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="900x500"
            src="http://res.cloudinary.com/charhagelin/image/upload/v1520101132/garlic_jmcznm.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p className="desc-home">
        One morning, when Gregor Samsa woke from troubled dreams, he found
        himself transformed in his bed into a horrible vermin. He lay on his
        armour-like back, and if he lifted his head a little he could see his
        brown belly, slightly domed and divided by arches into stiff sections.
        The bedding was hardly able to cover it and seemed ready to slide off
        any moment. His many legs, pitifully thin compared with the size of the
        rest of him, waved about helplessly as he looked. "What's happened to
        me?" he thought. It wasn't a dream. His room, a proper human room
        although a little too small, lay peacefully between its four familiar
        walls. A collection of textile samples lay spread out on the table -
        Samsa was a travelling salesman - and above it there hung a picture that
        he had recently cut out of an illustrated magazine and housed in a nice,
        gilded frame. It showed a lady fitted out with a fur hat and fur boa who
        sat upright, raising a heavy fur muff that covered the whole of her
        lower arm towards the viewer. Gregor then turned to look out the window
        at the dull weather. Drops
      </p>
    </div>
  );
};

export default HomePage;
