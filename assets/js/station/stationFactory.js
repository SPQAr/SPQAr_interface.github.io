import Station from "./ownedStation.js";

export default function createStation({id, title, status}) {

    if (!title || !status || !id ) {
        throw new Error('Dados incompletos para criar uma estação.');
    }

    return new Station(
        title,
        status,
        `station-${id}`
    );
};