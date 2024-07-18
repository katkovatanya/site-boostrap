import React from "react";
import Slider from "./Components/Slider";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Arina from './Images/Arina.jpg';
import Tanya from './Images/Tanya.jpg';
import Zoya from './Images/Zoya.jpg';

export const Home = () => {
  return (
    <>
      <Slider />
      <Container>
        <Row>
          <Col>
            <Card style={{ marginTop: '2rem', marginBottom: '2rem', width: '18rem' }}>
              <Card.Img variant="top" src={Arina} style={{height: '23rem', objectFit: "cover", objectPosition: "top"}}/>
              <Card.Body>
                <Card.Title>
                  Укладка + макияж
                </Card.Title>
                <Card.Text>Занятость: 3,5 часа, стоимость 4000 р</Card.Text>
                <Button variant="primary">Узнать больше</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ marginTop: '2rem', marginBottom: '2rem', width: '18rem' }}>
              <Card.Img variant="top" src={Tanya} style={{height: '23rem', objectFit: "cover", objectPosition: "top"}} />
              <Card.Body>
                <Card.Title>
                  Макияж
                </Card.Title>
                <Card.Text>Занятость: 1,5 часа, стоимость 3000 р</Card.Text>
                <Button variant="primary">Узнать больше</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ marginTop: '2rem', marginBottom: '2rem', width: '18rem' }}>
              <Card.Img variant="top" src={Zoya} style={{height: '23rem', objectFit: "cover", objectPosition: "top"}}/>
              <Card.Body>
                <Card.Title>
                  Укладка
                </Card.Title>
                <Card.Text>Занятость: 2 часа, стоимость 2000 р</Card.Text>
                <Button variant="primary">Узнать больше</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}