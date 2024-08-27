import axios, {AxiosResponse} from "axios";
import {urls} from "../constants/urls";
import {IPokemons} from "../models/IPokemons";

export const pokemonService = {
    getAll:(url: string): Promise<AxiosResponse<IPokemons>> => axios.get(url),
    getById: (id: string) => axios.get(urls.pokemon(id)),
}
