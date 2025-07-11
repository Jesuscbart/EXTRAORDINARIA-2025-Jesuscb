export type Character = {
    id: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
};

export type Origin = {
    name: string;
    url: string;
};

export type Location = {
    name: string;
    url: string;
};