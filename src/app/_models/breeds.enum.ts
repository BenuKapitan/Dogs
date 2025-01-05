export enum Breeds {
    UNKNOWN = "Unknown",
    GOLDEN_RETRIEVER = "Golden Retriever",
    LABRADOR_RETRIEVER = "Labrador Retriever",
    BEAGLE = "Beagle",
    POODLE = "Poodle",
    BULLDOG = "Bulldog",
    GERMAN_SHEPHERD = "German Shepherd",
    BOXER = "Boxer",
    COCKER_SPANIEL = "Cocker Spaniel",
    DOBERMAN = "Doberman",
    SHIH_TZU = "Shih Tzu",
    DALMATIAN = "Dalmatian",
    CHIHUAHUA = "Chihuahua",
    POMERANIAN = "Pomeranian",
    ROTTWEILER = "Rottweiler",
    SIBERIAN_HUSKY = "Siberian Husky",
    DACHSHUND = "Dachshund",
    GREAT_DANE = "Great Dane",
    PIT_BULL = "Pit Bull",
    AUSTRALIAN_SHEPHERD = "Australian Shepherd",
    BORDER_COLLIE = "Border Collie",
    BOSTON_TERRIER = "Boston Terrier",
    FRENCH_BULLDOG = "French Bulldog",
    AKITA = "Akita",
    SAINT_BERNARD = "Saint Bernard",
    PUG = "Pug"
}

export function getBreeds(): Breeds[] {
    return Object.values(Breeds);
}