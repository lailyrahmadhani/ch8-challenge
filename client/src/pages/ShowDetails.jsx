import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ShowDetails() {
    const { id } = useParams();
    
    return (
        <Container className="mt-3">
            <h1>Player {id}</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nullaest ipsum tenetur cumque fugiat sequi rem, in nostrum reprehenderititaque odio, cum quam repellat eveniet officiis iste dolor cupiditate?
            </p>
        </Container>
    );

}

export default ShowDetails;