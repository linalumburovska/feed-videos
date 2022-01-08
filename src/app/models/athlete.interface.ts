export interface Athlete {
    id: number;
    age: number;
    name: string;
    avatar: string;
    club: string;
    isCelebrity: boolean;
    country: {
        id: number;
        name: string;
        slug: string;
        icon: string;
    };
    sport: {
        name: string;
        slug: string;
        icon: string;
    }
}