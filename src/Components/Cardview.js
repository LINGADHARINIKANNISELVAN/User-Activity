import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Cardview() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUserData(data.slice(0, 15));
  };

  const handledelete = (index) => {
    if (index > -1) {
      userData.splice(index, 1);
    }
    console.log("Users", userData);
  };
  return (
    <Container>
      <Row>
        {userData.map((userData, k) => (
          <Col key={k} xs={12} md={4} lg={3}>
            <Card className="Card">
              <Card.Img src="http://placekitten.com/150/75" />

              <Card.Body>
                <Card.Title>{userData.name}</Card.Title>
                <Card.Text>{userData.username}</Card.Text>
                <Card.Text>{userData.email}</Card.Text>
                <p />
                <DeleteIcon onClick={() => handledelete(k)} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
