import { Card } from "react-bootstrap";
import { useParams } from "react-router";

function NoteDetail() {
    const params = useParams()

    const notaDetalhada = JSON.parse(localStorage.getItem("notas", params.id)) || [];
    const notaDetalhadaId = notaDetalhada.params

    console.log(notaDetalhadaId)

  return (
    <Card className="mt-2 p-2" bg="light">
      <Card.Title className="justify-content-between d-flex">
        {notaDetalhada.title}
      </Card.Title>
      <Card.Body>{notaDetalhada.text}</Card.Body>
    </Card>
  );
}

export default NoteDetail;