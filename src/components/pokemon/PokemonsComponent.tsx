import React, { FC } from 'react';
import {IPokemon} from "../../models/IPokemons";
import PokemonComponent from "./PokemonComponent";
import cl from "./Pokemons.module.css"

interface IProps{
    pokemons: IPokemon[]
}

const PokemonsComponent:FC<IProps> = ({pokemons}) => {

    return (
        <div className={cl.main}>
            {
                pokemons
                    .map((pokemon, index) =>
                        <PokemonComponent
                            key={index}
                            name={pokemon.name}
                            id = {pokemon.url.split('/').reverse()[1]}
                        />)
            }
        </div>
    );
};

export default PokemonsComponent;