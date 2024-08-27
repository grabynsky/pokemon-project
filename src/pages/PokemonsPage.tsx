import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store/store";
import {pokemonActions} from "../redux/slices/pokemonSlice";
import {urls} from "../constants/urls";
import PokemonsComponent from "../components/pokemon/PokemonsComponent";
import PaginationComponent from "../components/pagination/PaginationComponent";

const PokemonsPage = () => {

    const dispatch = useAppDispatch()
    const {pokemons} = useAppSelector(state => state.pokemonSlice)

    useEffect(() => {

        dispatch(pokemonActions.loadPokemones(urls.pokemons))

    }, [dispatch]);

    return (
        <div>
            {
                pokemons && <PokemonsComponent pokemons={pokemons}/>
            }

            <PaginationComponent/>
        </div>
    );
};

export default PokemonsPage;