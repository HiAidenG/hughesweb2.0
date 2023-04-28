import { Card, Row, Text, Col } from "@nextui-org/react";
import { Modal, useModal, Button } from "@nextui-org/react";

export function PersonCard({ Name, Img, Bio, width = 400, height = 370, Role }) {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <Card isPressable isHoverable onClick={() => setVisible(true)}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={Img}
            showSkeleton
            objectFit="cover"
            width={width}
            height={height}
            alt={Name}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Col>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text h4 css={{ m: 2}}>
              {Name}
            </Text>
          </Row>
          <Row>
            <Text small css={{ m: 2 }}>
              {Role}
            </Text>
          </Row>
          </Col>
        </Card.Footer>
      </Card>
      <Modal
        scroll
        width="600px"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        {...bindings}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            {Name}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text id="modal-description">{Bio}</Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={() => setVisible(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

