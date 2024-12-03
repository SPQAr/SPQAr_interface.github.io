import ElementCreator from "../common/elementFactory.js";

export default class Station {
    constructor(titleContent, statusStation, idStation) {

        this.titleContent = titleContent;
        this.statusStation = statusStation;
        this.idStation = idStation;
        this.elementCreator = ElementCreator;
    }

    #createPainel() {

        return this.elementCreator.create('div', {}, 'active-painel');
    }

    #createActiveAlert() {
        
        return this.elementCreator.create('div', {}, 'active-alert', 'blibli');
    }

    #createContent() {

        const conteinerText = this.elementCreator.create('article', {}, 'station-content', 'segoe-ui');

        const h1 = this.elementCreator.create('h1');
        h1.innerText = this.titleContent;

        const p = this.elementCreator.create('p');
        p.innerText = this.statusStation;

        conteinerText.append(h1, p);

        return conteinerText;
    }

    create() {
        const station = this.elementCreator.create('section', { id: `${this.idStation}` }, 'station');

        const article = this.#createContent();
        const painelActive = this.#createPainel();
        const activeAlert = this.#createActiveAlert();

        station.append(painelActive, article, activeAlert);
    
        return station;
    }  
}