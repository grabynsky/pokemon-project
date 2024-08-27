import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {IPokemon} from "../../models/IPokemons";
import {pokemonService} from "../../services/api.services";
import {IPokemonById} from "../../models/IPokemonById";


interface IState {
    next: string | null,
    previous: string | null,
    pokemons: IPokemon[],
    pokemonById: IPokemonById | null,
}

const initialState: IState = {
    next: null,
    previous: null,
    pokemons: [],
    pokemonById: null,
}

const loadPokemones = createAsyncThunk(
    'pokemonSlice/loadPokemones',
    async (url: string, thunkAPI) => {
        try {
            const getPokemons = await pokemonService.getAll(url)

            return thunkAPI.fulfillWithValue(getPokemons.data)

        } catch (e) {
            const error = e as AxiosError

            return thunkAPI.rejectWithValue(error.response?.data)
        }
    }
)


const loadPokemonById = createAsyncThunk(
    'pokemonSlice/loadPokemonById',
    async (id: string, thunkAPI) => {
        try {
            const getPokemonById = await pokemonService.getById(id)

            return thunkAPI.fulfillWithValue(getPokemonById.data)
        } catch (e) {
            const err = e as AxiosError

            return thunkAPI.rejectWithValue(err.response?.data)
        }
    }
)

export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(loadPokemones.fulfilled, (state, action) => {
                const {results, next, previous} = action.payload
                state.pokemons = results
                state.pokemonById = null
                state.previous = previous
                state.next = next

            })
            .addCase(loadPokemonById.fulfilled, (state, action) => {
                state.pokemonById = action.payload
            })
})


export const pokemonActions = {
    ...pokemonSlice.actions,
    loadPokemones,
    loadPokemonById,
}