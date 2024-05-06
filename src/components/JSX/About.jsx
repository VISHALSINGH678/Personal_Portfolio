import Carousel from 'react-bootstrap/Carousel';
import NavBar from '../JSX/NavBar'
import '../CSS/About.css'
import Card from 'react-bootstrap/Card';
import Footer from './Footer'


export default function About() {
  return (
    <>
    <NavBar/>
    <Carousel fade>
      <Carousel.Item>
        <img className='imgA1' src='2.jpg' text="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imgA1' src='3.jpg' text="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='imgA1' src='4.jpg' text="Third slide" />
      </Carousel.Item>
    </Carousel>

    <h1 className='AboutH1'>About My Qualifications</h1>



    <div className='divA1'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="14.svg" />
      <Card.Body>
        <Card.Title>Bachelor of Science</Card.Title>
        <Card.Text>
          (Information Technology)
        </Card.Text>
      </Card.Body>
    </Card>
<br />
<br />
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="15.svg" />
      <Card.Body>
        <Card.Title>Secondary</Card.Title>
        <Card.Text>
          (Science)
        </Card.Text>
      </Card.Body>
    </Card>
<br />
<br />
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="16.jpg" />
      <Card.Body>
        <Card.Title>Matrix</Card.Title>
        <Card.Text>
          (PSEB)
        </Card.Text>
      </Card.Body>
    </Card>
<br />
    </div>
    <div className="divA2">
      <div className='divA3'>
      <div>
        <h2>About Me</h2>
        <p>Hi, My name is Vishal Singh, <br />
        Recently i have completed my <br />
        Full Stack Web Development <br />
        courses from Oops InfoSolution <br />
        Institute, Chandigarh.</p>
      </div>
    <div>
      <h2>ADDRESS</h2>
      <p>City: 144, <br /> sector 22A Chandigarh, <br />Pin 160022, <br /> Chandigarh</p>
    </div>
    <div>
      <h2>CONTACT INFO</h2>
      <p>Phone: 91+6283070566 <br />
      Gmail: vishalsingh00808@gmail.com <br />
      Github: VISHALSINGH678
      </p>
      </div>
    </div>
    </div>
<Footer/>    
    </>
  );
}