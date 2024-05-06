import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function GithubCards() {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"13rem"}} src="7.svg" />
        <Card.Body>
          <Card.Title>01_React.js_Modify_UI</Card.Title>
          <Button variant="primary" href="https://github.com/VISHALSINGH678/01_React.js_Modify_UI">Click here</Button>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"13em"}} src="8.svg" />
        <Card.Body>
          <Card.Title>02_tailwindprops</Card.Title>
          <Button variant="primary" href="https://github.com/VISHALSINGH678/02_tailwindprops">Click here</Button>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"11rem"}} src="9.png" />
        <Card.Body>
          <Card.Title>03_bg_changer</Card.Title>
          <Button variant="primary" href="https://github.com/VISHALSINGH678/03_bg_changer">Click here</Button>
        </Card.Body>
      </Card>
<br />
<br />
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{width:"13rem"}} src="10.svg" />
        <Card.Body>
          <Card.Title>04_password_generator</Card.Title>
          <Button variant="primary" href="https://github.com/VISHALSINGH678/04_password_generator">Click here</Button>
        </Card.Body>
      </Card>
      
    </>
  );
}
