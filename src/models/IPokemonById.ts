export interface IPokemonById {
    base_experience: number;
    cries: Cries;
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    name: string;
    order: number;
    species: Species;
    moves: Move[];
    past_abilities: any[];
    past_types: any[];
    sprites: Sprites;
    forms: Form[];
    abilities: Ability[];
    game_indices: GameIndex[];
    held_items: any[];
    // stats: Stat[];
    types: any[];
}

interface Ability {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

interface GameIndex {
    game_index: number;
    version: Version;
}

interface Cries {
    latest: string;
    legacy: string;
}

interface Form {
    name: string;
    url: string;
}


interface Version {
    name: string;
    url: string;
}

interface Move {
    move: {
        name: string;
        url: string;
    };
    version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

interface MoveLearnMethod {
    name: string;
    url: string;
}

interface VersionGroup {
    name: string;
    url: string;
}

interface Species {
    name: string;
    url: string;
}

interface Sprites {
    back_default: string | undefined | null;
    back_female: string | undefined;
    back_shiny: string | undefined;
    back_shiny_female: string | undefined;
    front_default: string | undefined | null;
    front_female: string | undefined;
    front_shiny: string | undefined;
    front_shiny_female: string | undefined;
    other: OtherSprites;
}

interface OtherSprites {
    dream_world: DreamWorld;
    home: Home;
    official_artwork: OfficialArtwork;
    showdown: Showdown;
    versions: Versions;
}

interface DreamWorld {
    front_default: string | undefined;
    front_female: string | null;
}

interface Home {
    front_default: string | null;
    front_female: string | null;
    front_shiny_female: string | null;
    front_shiny: string | null;
}

interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

interface Showdown {
    front_default: string | undefined;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | undefined;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

interface Versions {
    generation_i: GenerationSprites;
    generation_ii: GenerationSprites;
    generation_iii: GenerationSprites;
    generation_iv: GenerationSprites;
    generation_v: GenerationSprites;
    generation_vi: GenerationSprites;
    generation_vii: GenerationSprites;
}

interface GenerationSprites {
    [key: string]: SpriteDetails;
}

interface SpriteDetails {
    front_default: string | null;
    front_shiny: string | null;
    front_transparent?: string | null;
    front_gray?: string | null;
    back_default: string | null;
    back_shiny: string | null;
    back_transparent?: string | null;
    back_gray?: string | null;
    animated?: AnimatedSprites;
}

interface AnimatedSprites {
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
}

interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
}

interface StatDetail {
    name: string;
    url: string;
}