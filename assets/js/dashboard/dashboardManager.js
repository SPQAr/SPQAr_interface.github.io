import { DOMAppender, ElementContentUpdater, BackgroundColorUpdater } from "./dashboardUtils.js";

/**
 * Classe responsável por gerenciar a atualização e adição de estações em um dashboard.
 * 
 * A classe `Dashboard` permite atualizar o conteúdo e a cor de uma estação específica,
 * bem como adicionar novas estações ao dashboard.
 * 
 * @class
 */
export default class Dashboard {
    /**
     * Cria uma instância da classe `Dashboard` e inicializa os utilitários necessários para atualizar
     * o conteúdo, a cor e adicionar novos elementos ao dashboard.
     * 
     * @param {HTMLElement} dashboardElement - O elemento HTML onde as estações serão exibidas.
     * 
     * @example
     * const dashboard = new Dashboard(document.getElementById('dashboard'));
     */
    constructor(dashboardElement) {
        this.dashboard = dashboardElement;
        this.contentUpdater = ElementContentUpdater;
        this.colorUpdater = BackgroundColorUpdater;
        this.domAppender = DOMAppender;
    }

    /**
     * Atualiza o conteúdo e a cor de uma estação específica no dashboard.
     * 
     * @param {string} idStation - O ID da estação a ser atualizada.
     * @param {Object} updateData - Dados para atualização da estação.
     * @param {string} updateData.content - O novo conteúdo a ser exibido na estação.
     * @param {string} updateData.color - A nova cor de fundo da estação.
     * 
     * @returns {void}
     * 
     * @example
     * dashboard.updateStation('station-1', { content: "bom", color: "green" });
     */
    updateStation(idStation, { content, color }) {
        this.contentUpdater.update(idStation, content);
        this.colorUpdater.update(idStation, color);
    }

    /**
     * Adiciona novas estações ao dashboard.
     * 
     * @param {HTMLElement[]} stations - Um array de elementos HTML representando as estações.
     * 
     * @returns {void}
     * 
     * @example
     * dashboard.addStations([station1, station2, station3]);
     */
    addStations(stations) {
        this.domAppender.append(this.dashboard, stations);
    }
}
