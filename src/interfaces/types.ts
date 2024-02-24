import React, { MouseEventHandler } from "react";


export interface StarWarsProduct {
    title?: string;
    episodeId?: string;
    releaseDate?: string;
    openingCrawl?: string;
    price?: string;
    redirect?: MouseEventHandler<HTMLDivElement>;
}
export interface ProductDetails {
    title?: string
    opening_crawl?: string;
    director?: string;
    producer?: string;
    characters?: Array<string>;
}

export interface CharacterTypes {
    name?: string;
    gender?: string;
}

export interface Film {
    url: string;
    title?: string | undefined;
    episode_id?: string | undefined;
    release_date?: string | undefined;
    opening_crawl?: string | undefined;
}

export interface CartItem {
    id: string;
    title: string;
    price: string;
    count: number;
}