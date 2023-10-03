import MyCard from "./MyCard";

const Gallery = ({ characters }) => {
    return (
        <section className="Gallery">
            <MyCard character={characters[0]}></MyCard>
            <MyCard character={characters[1]}></MyCard>
            <MyCard character={characters[2]}></MyCard>
            <MyCard character={characters[3]}></MyCard>
        </section>
    );
};

export default Gallery;
