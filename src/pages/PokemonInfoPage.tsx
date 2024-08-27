import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../store/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import PokemonInfoComponent from "../components/pokemon/PokemonInfoComponent";

const PokemonInfoPage = () => {
    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {pokemonById} = useAppSelector(state => state.pokemonSlice)

    useEffect(() => {
        if (pokemonById === null) {
            if (id != null) {
                dispatch(pokemonActions.loadPokemonById(id))
            }
        }

    }, [dispatch, id, pokemonById]);

    return (
        <div>
            {
                pokemonById && <PokemonInfoComponent pokemonById={pokemonById}/>
            }
        </div>
    );
};

export default PokemonInfoPage;