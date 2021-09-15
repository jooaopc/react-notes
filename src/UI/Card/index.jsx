import { Button, Card } from "react-bootstrap";
import { BsTrashFill, BsFillGearFill } from "react-icons/bs";

function CardUI({onDelete, id, text, title, onModifica}) {
  return (
    <Card className="mt-2 p-2" bg="light">
      <Card.Title className="justify-content-between d-flex">
        <div className='mt-3 ms-3'>{title}</div>
        <div>
        <Button
          type="button"
          variant="outline-dark"
          className="p-2 m-1"
          onClick={() => {
            const confirmBox = window.confirm(
              "Deseja mesmo deletar?"
            )
            if (confirmBox === true) {
              onDelete(id)
            }
          }}
        >
          <BsTrashFill />
        </Button>
        <Button
          type="button"
          variant="outline-dark"
          className="p-2 m-1"
          onClick={() => onModifica(id)}
        >
          <BsFillGearFill />
        </Button>
        </div>
      </Card.Title>
      <Card.Body>{text}</Card.Body>
    </Card>
  );
}

export default CardUI;
