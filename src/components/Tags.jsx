import Badge from "react-bootstrap/Badge";

const Tags = ({ color, text }) => {
   return <Badge variant={color}>{text}</Badge>;
};

export default Tags;
