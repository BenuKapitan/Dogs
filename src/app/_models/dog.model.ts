import { Breeds } from './breeds.enum';

export interface Dog {
    id?: number;
    breed: Breeds[];
    size: string;
    image: string;
}