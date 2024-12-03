/**
 * Cria uma instância de uma estação com base nos dados fornecidos.
 * 
 * @module createStation
 * 
 * @param {Object} params - Objeto contendo as informações necessárias para criar a estação.
 * @param {number|string} params.id - Identificador único da estação.
 * @param {string} params.title - Título ou nome da estação.
 * @param {string} params.status - Status atual da estação (e.g., "ativo", "inativo").
 * 
 * @throws {Error} Lança um erro caso algum dos dados necessários (id, title ou status) não seja fornecido.
 * 
 * @returns {Station} Instância de uma estação criada com os dados fornecidos.
 * 
 * @example
 * import createStation from './createStation.js';
 * 
 * const station = createStation({
 *   id: 1,
 *   title: "Estação Central",
 *   status: "ativo"
 * });
 * 
 * console.log(station); // Exibe os detalhes da estação criada.
 */

import Station from "./ownedStation.js";

export default function createStation({ id, title, status }) {
    if (!title || !status || !id) {
        throw new Error('Dados incompletos para criar uma estação.');
    }

    return new Station(
        title,
        status,
        `station-${id}`
    );
};
