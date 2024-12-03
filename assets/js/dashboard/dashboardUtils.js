/**
 * Classe utilitária para atualizar o conteúdo de um elemento no DOM.
 * 
 * A classe `ElementContentUpdater` fornece uma maneira de atualizar o texto
 * de um parágrafo dentro de um artigo, em um elemento selecionado pelo ID.
 * 
 * @class
 */
export class ElementContentUpdater {
    /**
     * Atualiza o conteúdo de um parágrafo dentro de um artigo de um elemento especificado.
     * 
     * @param {string} selector - O ID do elemento que contém o artigo e o parágrafo a ser atualizado.
     * @param {string} content - O novo conteúdo a ser exibido no parágrafo.
     * 
     * @returns {void}
     * 
     * @example
     * ElementContentUpdater.update('station-1', 'Bom estado');
     */
    static update(selector, content) {
        const element = document.querySelector(`#${selector} article p`);
        if (element) element.innerText = content;
    }
}

/**
 * Classe utilitária para atualizar a cor de fundo de um painel.
 * 
 * A classe `BackgroundColorUpdater` permite alterar a cor de fundo do painel
 * de uma estação específica, identificada pelo ID fornecido.
 * 
 * @class
 */
export class BackgroundColorUpdater {
    /**
     * Atualiza a cor de fundo de um painel de uma estação.
     * 
     * @param {string} selector - O ID do elemento que contém o painel a ser atualizado.
     * @param {string} color - A nova cor a ser aplicada ao fundo do painel.
     * 
     * @returns {void}
     * 
     * @example
     * BackgroundColorUpdater.update('station-1', 'green');
     */
    static update(selector, color) {
        const painel = document.querySelector(`#${selector} .active-painel`);
        if (painel) painel.style.backgroundColor = color;
    }
}

/**
 * Classe utilitária para adicionar elementos ao DOM.
 * 
 * A classe `DOMAppender` permite adicionar um elemento filho a um elemento pai no DOM.
 * 
 * @class
 */
export class DOMAppender {
    /**
     * Adiciona um elemento filho a um elemento pai.
     * 
     * @param {HTMLElement} parent - O elemento pai ao qual o filho será adicionado.
     * @param {HTMLElement} child - O elemento filho a ser adicionado ao pai.
     * 
     * @returns {void}
     * 
     * @example
     * DOMAppender.append(document.body, newElement);
     */
    static append(parent, child) {
        parent.appendChild(child);
    }
}
