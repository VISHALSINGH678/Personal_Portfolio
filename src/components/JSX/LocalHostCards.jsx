import Card from "react-bootstrap/Card";

export default function LocalHostCards() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="11.svg" />
        <Card.Body>
          <Card.Title>Registration Form</Card.Title>
          <Card.Text>
            Using MERN Stack Technology.<br />
            Skills: Front-end with ReactJS,<br />
            Back-end Express.js.
          </Card.Text>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="12.jpg" />
        <Card.Body>
          <Card.Title>Shopping Cart</Card.Title>
          <Card.Text>
            Using Vite ReactJS Technology. <br />
            Skills: HTML, CSS, JavaScript & <br />
            React.js, Fetching Data.
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  );
}
