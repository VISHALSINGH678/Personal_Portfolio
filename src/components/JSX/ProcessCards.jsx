import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProcessCards() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="13.jpg" />
        <Card.Body>
          <Card.Title>Mange-Dairy-Farm</Card.Title>
          <Card.Text>
            Skills: Front-end with HTML, CSS & JavaScript, ReactJS <br />
            Back-end with NodeJS.
          </Card.Text>
          <Button disabled variant="primary">Coming soon</Button>
        </Card.Body>
      </Card>

  
    </>
  );
}
