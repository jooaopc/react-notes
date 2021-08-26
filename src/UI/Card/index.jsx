import { Button, Card } from "react-bootstrap";
import { BsTrashFill } from "react-icons/bs";

function CardUI(props) {
  const deletar = props.onClick;

  return (
    <Card className="mt-2 p-2" bg="light">
      <Card.Title className="justify-content-between d-flex">
        {props.title}
        <Button
          type="button"
          variant="light"
          className="p-0"
          onClick={() => deletar(props.id)}
        >
          <BsTrashFill />
        </Button>
      </Card.Title>
      <Card.Body>{props.text}</Card.Body>
    </Card>
  );
}

export default CardUI;
