// SEARCH MODEL FROM JSON

export interface MovieModel {
    /*
    popularity: number;
    vote_count: number;
    video: boolean;
    poster_path: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    */
   original_name: string;
   genre_ids: number[];
   media_type: string;
   name: string;
   popularity: number;
   origin_country: string[];
   vote_count: number;
   first_air_date: string;
   backdrop_path: string;
   original_language: string;
   id: number;
   vote_average: number;
   overview: string;
   poster_path: string;
   known_for_department: string;
   known_for: KnownFor[];
   profile_path?: any;
   gender?: number;
   adult?: boolean;
   video?: boolean;
   title: string;
   release_date: string;
   original_title: string;
}

export interface RootObject {
    page: number;
    total_results: number;
    total_pages: number;
    results: MovieModel[];
}


// know for

export interface KnownFor {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    first_air_date: string;
    origin_country: string[];
    name: string;
    original_name: string;
}

//DETAIL MODEL FROM JSON

export interface RootObjectDetail {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: BelongsToCollection;
    budget: number;
    genres: Genre[];
    homepage?: any;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}

// getTREND

export interface Trend {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

export interface Result {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
    first_air_date: string;
    name: string;
    origin_country: string[];
    original_name: string;
}

// VIDEO JSON

export interface RootObjectVideo {
    id: number;
    results: ResultVideo[];
}

export interface ResultVideo {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}


// tv detail

export interface CreatedBy {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface LastEpisodeToAir {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
}

export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

export interface RootObjectTv {
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: LastEpisodeToAir;
    name: string;
    next_episode_to_air?: any;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    seasons: Season[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}