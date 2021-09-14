import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import CardUI from "../../UI/Card";

function AllNotes() {
  const [notes, setNotes] = useState([]);

  const handleDeletaNota = (i) => {
    let notasRestantes = notes.filter((nota, index) => index !== i);
    setNotes(notasRestantes);
  };

  useEffect(() => {
    let notas = JSON.parse(localStorage.getItem("notas")) || [];
    setNotes(notas);
  }, []);

  useEffect(() => {
    localStorage.setItem("notas", JSON.stringify(notes));
  }, [notes]);

  // eslint-disable-next-line
  const temNotas = notes == ''

  return (
    <Container>
      {temNotas && <p className="mt-2 p-4 card-title h4 d-flex justify-content-center" bg="light">Não foram encontradas notas, adicione alguma!</p>}
      {notes.map((data, index) => (
        <CardUI
          key={index}
          id={index}
          title={data.title}
          text={data.text}
          onClick={handleDeletaNota}
        />
      ))}
    </Container>
  );
}

export default AllNotes;
