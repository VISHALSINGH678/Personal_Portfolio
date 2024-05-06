import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="2.png" />
        <Card.Body>
          <Card.Title>MERN Stack Developer</Card.Title>
          <Card.Text>
            Oops InfoSolution Institute. <br />
            Skills: Front-end with HTML, CSS & JavaScript, ReactJS, NodeJS, Express.js, Git .
          </Card.Text>
          <Button disabled variant="primary">Click here</Button>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"12rem"}} src="5.svg" />
        <Card.Body>
          <Card.Title>Python Programming</Card.Title>
          <Card.Text>
          Tech World Institute. <br />
          Gain Basic knowledge of Python Programming such as array, tuple, Dist, etc.
          </Card.Text>
          <Button disabled variant="primary">Click here</Button>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"12rem"}} src="6.svg" />
        <Card.Body>
          <Card.Title>Civil Architecture</Card.Title>
          <Card.Text>
            I can create building stuctures with helps of Sketup Pro Building Modeling software and Rendering with 3D Design .
          </Card.Text>
          <Button href="https://sketchup.com/" variant="primary">Click here</Button>
        </Card.Body>
      </Card>
    </>
  );
}
