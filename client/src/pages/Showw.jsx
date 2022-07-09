import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Showw() {
    const { id, username, email, password, experience, level } = useParams();
    
    return (
        <Container className="mt-3">
            <h1>Player {id}</h1>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Experience: {experience}</p>
            <p>Level: {level}</p>
        </Container>
    );

}

export default Showw;