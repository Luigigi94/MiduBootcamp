import "./App.css";
import Mensaje from "./Mensaje.js";
const Descritpion = () => {
  return <p>Esta es la app del curso del Midu</p>;
};

const App = () => {
  const a = 2;
  const b = 3;
  return (
    <div className="App">
      <Mensaje color="red" msg="Estamos viendo " />
      <Mensaje color="green" msg="un curso del" />
      <Mensaje color="yellow" msg="2021 de REACT" />
      <h1>Titulo de la App</h1>
      <strong>Estamos trabajando en ello</strong>
      <div>
        <p>El resultado es:</p>
        {a + b}
      </div>
      <Descritpion />
    </div>
  );
};

export default App;
