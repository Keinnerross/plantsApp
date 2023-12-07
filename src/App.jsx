import './App.css'
import CardMain from './components/cardMain'
import LobyPlants from './components/lobyPlants';
import Header from './components/template/header';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

function App() {


  return (

    <>
      <Header></Header>
      <div className="appMainContainer">

        <BrowserRouter>
          <Routes>
            <Route path="loby" element={<LobyPlants />} />
            <Route path="planta/:idRender" element={<CardMain />} />
          </Routes>
        </BrowserRouter>
      </div >
    </>

  )
}

export default App
