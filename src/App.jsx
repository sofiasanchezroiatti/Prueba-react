import "./App.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

const data = {
   characters: [
      {
         name: "PEPE",
         description: "Lleno de energía y listo para jugar. Dale a Pepe el hogar amoroso que se merece!",
         image: "https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         type: "Pomerania",
         text: "Pomerania",
         color: "success",
      },

      {
         name: "HULK",
         description:
            "Es juguetona, amigable y se lleva bien con los niños y otros animales. Haz a Hulk parte de tu familia hoy mismo! ",
         image: "https://images.pexels.com/photos/2951921/pexels-photo-2951921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         type: "Bull Terrier",
         text: "Bull Terrier",
         color: "primary",
      },

      {
         name: "AMOR",
         description:
            "Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Amor y experimenta un amor incondicional!",
         image: "https://images.pexels.com/photos/5732474/pexels-photo-5732474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         type: "Yorkshire Terrier",
         text: "Yorkshire Terrier",
         color: "danger",
      },

      {
         name: "PEQUE",
         description:
            "Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Peque a encontrar su final feliz!",
         image: "https://images.pexels.com/photos/3433366/pexels-photo-3433366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
         type: "Chihuahua",
         text: "Chihuahua",
         color: "warning",
      },
   ],
};
function App() {
   return (
      <div className="container">
         <Header title="ADOPTA UN PERRITO"></Header>
         <main>
            <Gallery characters={data.characters}>
               <MyCard></MyCard>
            </Gallery>
         </main>
         <Footer></Footer>
      </div>
   );
}

export default App;
