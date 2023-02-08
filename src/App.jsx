import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido"} />
    </>
  )
}

export default App