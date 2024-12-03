/**
 * Classe que representa uma estação e sua criação de elementos no DOM.
 * 
 * @module Station
 * 
 * Esta classe é responsável por criar uma estação com base nas informações fornecidas, incluindo
 * a criação de elementos de interface relacionados à estação, como painel, alerta e conteúdo.
 * Utiliza o módulo `ElementCreator` para facilitar a criação de elementos HTML.
 */

import ElementCreator from "../common/elementFactory.js";

/**
 * Classe `Station` que permite criar uma estação e seus componentes associados.
 * 
 * @class
 */
export default class Station {
    /**
     * Cria uma instância da classe `Station`.
     * 
     * @param {string} titleContent - O título da estação.
     * @param {string} statusStation - O status atual da estação (ex: "ativo", "inativo").
     * @param {string} idStation - O identificador único da estação.
     */
    constructor(titleContent, statusStation, idStation) {
        this.titleContent = titleContent;
        this.statusStation = statusStation;
        this.idStation = idStation;
        this.elementCreator = ElementCreator;
    }

    /**
     * Cria um painel de status da estação.
     * 
     * @private
     * @returns {HTMLElement} O painel de status como um elemento `div`.
     */
    #createPainel() {
        return this.elementCreator.create('div', {}, 'active-painel');
    }

    /**
     * Cria um alerta ativo relacionado à estação.
     * 
     * @private
     * @returns {HTMLElement} O alerta ativo como um elemento `div`.
     */
    #createActiveAlert() {
        return this.elementCreator.create('div', {}, 'active-alert', 'blibli');
    }

    /**
     * Cria o conteúdo da estação, incluindo título e status.
     * 
     * @private
     * @returns {HTMLElement} O conteúdo da estação como um elemento `article`.
     */
    #createContent() {
        const conteinerText = this.elementCreator.create('article', {}, 'station-content', 'segoe-ui');

        const h1 = this.elementCreator.create('h1');
        h1.innerText = this.titleContent;

        const p = this.elementCreator.create('p');
        p.innerText = this.statusStation;

        conteinerText.append(h1, p);

        return conteinerText;
    }

    /**
     * Cria e retorna a estação como um elemento HTML com todos os seus componentes.
     * 
     * @returns {HTMLElement} A estação completa como um elemento `section`.
     * 
     * @example
     * const station = new Station("Estação Central", "Ativa", "station-1");
     * const stationElement = station.create();
     * document.body.appendChild(stationElement);
     * 
     * // Exibe a estação na página com seus componentes.
     */
    create() {
        const station = this.elementCreator.create('section', { id: `${this.idStation}` }, 'station');

        const article = this.#createContent();
        const painelActive = this.#createPainel();
        const activeAlert = this.#createActiveAlert();

        station.append(painelActive, article, activeAlert);

        return station;
    }
}
