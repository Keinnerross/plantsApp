import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Header from './components/template/header';

import CardMain from './components/cardMain'
import LobyPlants from './components/lobyPlants.jsx';



const router = createHashRouter([
    {
        path: "/plantsApp",
        element: <LobyPlants />
    },
    {
        path: "/plantsApp/planta/:idRender",
        element: <CardMain />
    },
    {
        path: "/plantsApp/planta",
        element: <span>All ok </span>
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <div className="appMainContainer">

            <Header />
            <RouterProvider router={router}>
                {/* <App /> */}
            </RouterProvider>
        </div >

    </>


)
