import { useState } from "react";
import { Container, Form } from "react-bootstrap";

function CreateNewPlayer(){
  const [player, setPlayer] = useState("");
  const [email, setEmail] = useState("");

  function handlePlayerChange(event) {
    const value = event.target.value;
    setPlayer(value);
  }

  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }

    return<Container className="pt-4">
        <Form.Group className="mb-3">
          <Form.Label>Username: </Form.Label>
          <Form.Control 
            value={player}
            onChange={handlePlayerChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email: </Form.Label>
          <Form.Control 
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password: </Form.Label>
          <Form.Control type="password"/>
        </Form.Group>

        
        
        

    </Container>
    
    
}

export default CreateNewPlayer;