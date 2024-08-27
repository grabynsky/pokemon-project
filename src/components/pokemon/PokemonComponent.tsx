import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../store/store";
import {pokemonActions} from "../../redux/slices/pokemonSlice";
import cl from "./Pokemons.module.css"

interface IProps {
    name: string,
    id: string,
}

const PokemonComponent: FC<IProps> = ({name, id}) => {
    const dispatch = useAppDispatch();

    return (
        <main className={cl.main}>
            <div className={cl.wrapper}>
                <Link
                    to={`/pokemons/${id}`}
                    onClick={() => dispatch(pokemonActions.loadPokemonById(id))}
                    className={cl.link}
                >
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={name}
                        className={cl.img}
                    />
                    {name.toUpperCase()}
                </Link>
            </div>
        </main>
    );
};

export default PokemonComponent;