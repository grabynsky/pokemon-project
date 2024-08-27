import React from "react";
import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "../App";
import PokemonsPage from "../pages/PokemonsPage";
import PokemonInfoPage from "../pages/PokemonInfoPage";

const routers =[
    {
        path: '/', element: <App/>, children: [
            {index: true, element: <Navigate to={'pokemons'}/>},
            {path: 'pokemons', element: <PokemonsPage/>},
            {path: 'pokemons/:id', element: <PokemonInfoPage/>}
        ]
    }]

export const router = createBrowserRouter(routers);