import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const Readcard = ({ contact, handleEditClick, handleDeleteClick }) => {
  const k = contact.id;
  return (
    <Container>
      <Row>
        <Col key={k} xs={12} md={4} lg={3} >
          <Card className="Card">
            <Card.Img src="http://placekitten.com/150/75" />

            <Card.Body>
              <Card.Title>{contact.name}</Card.Title>
              <Card.Text>{contact.username}</Card.Text>
              <Card.Text>{contact.email}</Card.Text>
              <p />

              <EditIcon
                type="button"
                onClick={(event) => handleEditClick(event, contact)}
             />
              <DeleteIcon
                type="button"
                onClick={() => handleDeleteClick(contact.id)}
              />
               
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Readcard;
