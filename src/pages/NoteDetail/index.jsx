import { useEffect, useState } from 'react';
import { Button, Card, Container, Form } from "react-bootstrap";
import { useParams, useHistory } from "react-router";

function NoteDetail() {
    const params = useParams()
  const [titulo, setTitulo] = useState(null)
  const [texto, setTexto] = useState(null)
  const history = useHistory();

    useEffect(() => {
      const notas = JSON.parse(localStorage.getItem("notas")) || [];
      const nota = notas[params.id] ?? null
      setTexto(nota.text)
      setTitulo(nota.title)
    }, [params])
  
  const handleTitulo = event => {
    setTitulo(event.target.value)
    }
  const handleTexto = event => {
    setTexto(event.target.value)
  }
  
  const handleForm = (event) => {
    event.preventDefault();

    const notaModificada = {
      title: titulo,
      text: texto,
    };

    let notas = JSON.parse(localStorage.getItem("notas")) || []

    notas[params.id] = notaModificada;

    localStorage.setItem("notas", JSON.stringify(notas));

    history.push("/all");
  };
    
  return (
    <Container>
      {(texto || titulo) &&
    <Form onSubmit={handleForm}>
      <Card className="p-2 m-2" bg="light">
        <Form.Group controlId="title">
          <Form.Label className="h4">Título</Form.Label>
          <Form.Control value={titulo} onChange={handleTitulo} />
        </Form.Group>
      </Card>
      <Card className="p-2 m-2" bg="light">
        <Form.Group controlId="text">
          <Form.Label className="h4">Texto</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
              value={texto}
              onChange={handleTexto}
          />
        </Form.Group>
      </Card>
      <div className="d-flex justify-content-center mt-2">
        <Button variant="primary" type="submit">
          Modificar Anotação!
        </Button>
      </div>
    </Form>
      }
      </Container>
  );
}

export default NoteDetail;