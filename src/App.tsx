import React from "react";
import "./App.css";
import Lola from "./assets/Lola.jpeg";
import {Button, Col, Container, Row} from 'react-bootstrap';

function App(): React.JSX.Element {
    return (
        <div className="App">
            <h1> Task 3! </h1>
            <header className="App-header">
                Ava Natale UD CISC275 with React Hooks and TypeScript
            </header>
            <img src={Lola} alt="A picture of my dog Lola." 
            style={{width: "300px", height: "400px"}} />

        <Container>
            <Row>
                <Col>My favorite foods:
                    <ul>
                       <li>Sushi</li>
                       <li>Strawberries</li>
                       <li>Mozarella sticks</li>
                    </ul>
                    <div style={{width: "80px", height: "30px", backgroundColor: "red"}} />
                </Col>

                <Col> <Button onClick={ () => { console.log("Hello World!") } }>
                    Log Hello World</Button>
                   <div style={{width: "80px", height: "30px", backgroundColor: "red"}} />
                </Col>

            </Row>
        </Container>
        </div>
    );
}

export default App;
