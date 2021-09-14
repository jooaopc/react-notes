import { useEffect, useState } from 'react';
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

function NoteDetail() {
    const params = useParams()
    const [notaDetalhada, setNotaDetalhada] = useState(null) 



    useEffect(() => {
      const notas = JSON.parse(localStorage.getItem("notas")) || [];
      const nota =  notas[params.id] ?? null
      setNotaDetalhada(nota)
    }, [params])

  return (
    <>
      {notaDetalhada &&
    <Card className="mt-2 p-2" bg="light">

      <Card.Title className="justify-content-between d-flex">
        {notaDetalhada.title}
      </Card.Title>
      <Card.Body>{notaDetalhada.text}</Card.Body>
    </Card>
      }
    {!notaDetalhada && <p className="mt-2 p-4 card-title h4 d-flex justify-content-center" bg="light">Nota não encontrada.</p>}
      </>
  );
}

export default NoteDetail;