import React from "react";
import "./messagePage.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function MessagePage() {
	return (
		<div className="message">
			<Container fluid>
				<Row>
					<Col style={{ backgroundColor: "Blue" }}> asdf</Col>
					<Col style={{ backgroundColor: "Green" }}>asdf </Col>
				</Row>
				<Row>
					<Col style={{ backgroundColor: "red" }}> asdf</Col>
					<Col style={{ backgroundColor: "black" }}>asdf </Col>
				</Row>
			</Container>
		</div>
	);
}
