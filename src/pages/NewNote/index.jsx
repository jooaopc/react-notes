import { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";

function NewNote() {
  const titleRef = useRef();
  const textRef = useRef();
  const history = useHistory();

  const formHandler = (event) => {
    event.preventDefault();
    const finalTitle = titleRef.current.value;
    const finalText = textRef.current.value;
    const oldNotes = JSON.parse(localStorage.getItem("notas")) || [];
    const newNote = {
      title: finalTitle,
      text: finalText,
    };

    oldNotes.push(newNote);
    localStorage.setItem("notas", JSON.stringify(oldNotes));

    history.push("/all");
  };

  return (
    <Container>
      <Form onSubmit={formHandler}>
        <Card className="p-2 m-2" bg="light">
          <Form.Group controlId="title">
            <Form.Label className="h4">Título</Form.Label>
            <Form.Control ref={titleRef} placeholder="Título da nova nota." />
          </Form.Group>
        </Card>
        <Card className="p-2 m-2" bg="light">
          <Form.Group controlId="text">
            <Form.Label className="h4">Texto</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              ref={textRef}
              placeholder="Texto da nova nota."
            />
          </Form.Group>
        </Card>
        <div className="d-flex justify-content-center mt-2">
          <Button variant="primary" type="submit">
            Registrar Anotação!
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default NewNote;
