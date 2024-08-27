import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";

function App() {


    return (

        <div className="App">
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
}

export default App;
