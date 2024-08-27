import {configureStore} from "@reduxjs/toolkit";
import {pokemonSlice} from "../redux/slices/pokemonSlice";
import {useDispatch, useSelector} from "react-redux";


export const store = configureStore({
    reducer: {
        pokemonSlice: pokemonSlice.reducer,
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();
