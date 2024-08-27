import React from 'react';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {pokemonActions} from "../../redux/slices/pokemonSlice";
import cl from "./Pagination.module.css"

const PaginationComponent = () => {
    const dispatch = useAppDispatch();
    const {next, previous} = useAppSelector(state => state.pokemonSlice)

    return (
        <div className={cl.pagination}>
            <button
                onClick={() => previous && dispatch(pokemonActions.loadPokemones(previous))}
                className={cl.btn}
                disabled={!previous}
            >
                prev
            </button>

            <button
                onClick={() => next && dispatch(pokemonActions.loadPokemones(next))}
                className={cl.btn}
                disabled={!next}
            >
                next
            </button>
        </div>
    );
};

export default PaginationComponent;