import Badge from "react-bootstrap/Badge";

const MyCard = ({ character }) => {
    return (
        <div className="MyCard">
            <img src={character.image} alt={character.type} />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
            <h3>
                <Badge bg={character.color}>{character.text}</Badge>
            </h3>
        </div>
    );
};

export default MyCard;
