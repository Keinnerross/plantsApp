import './App.css'
import LobyPlants from './components/lobyPlants';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Header from "./components/template/header"
import CardMain from './components/cardMain';
import IdeaCard from './components/ideaCard';
import { useState } from 'react';


const router = createHashRouter([
  {
    path: "/",
    element: <LobyPlants />
  },
  {
    path: "/planta/:idRender",
    element: <CardMain />
  },
  {
    path: "/planta",
    element: <span>All ok </span>
  }
])



function App() {


  const [isActiveIdea, setIsActiveIdea] = useState(false)


  const handleActiveIdea = () => {
    setIsActiveIdea(!isActiveIdea)
  }

  return (

    <>
      <Header handleActive={handleActiveIdea} />
      <IdeaCard isActive={isActiveIdea} handleIdea={handleActiveIdea} />
      <RouterProvider router={router}>
      </RouterProvider>
    </>

  )
}

export default App


