import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function LiveProjects() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="17.jpg" />
        <Card.Body>
          <Card.Title>Personal-Portfolio</Card.Title>
          <Card.Text>
            Skills: Using with HTML, CSS & JavaScript <br />
            ReactJS .
          </Card.Text>
          <Button disabled variant="primary">Check Out</Button>
        </Card.Body>
      </Card>

  
    </>
  );
}
