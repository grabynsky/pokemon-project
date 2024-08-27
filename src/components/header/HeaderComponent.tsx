import React from 'react';
import {Link} from "react-router-dom";
import cl from "./HeaderComponent.module.css";

const HeaderComponent = () => {
    return (
        <main className={cl.mainHeader}>
            <Link
                className={cl.headerLink}
                to={'/pokemons'}
            >
                pokemons
            </Link>

        </main>
    );
};

export default HeaderComponent;