const baseURL = 'https://pokeapi.co/api/v2/pokemon';

export const urls = {
    pokemons: baseURL,
    pokemon: (id: string) => `${baseURL}/${id}`,
}
