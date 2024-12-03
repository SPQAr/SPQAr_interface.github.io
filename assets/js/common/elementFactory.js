/**
 * Classe utilitária para criar elementos HTML dinâmicos.
 * 
 * A classe `ElementCreator` fornece uma maneira prática de criar elementos HTML
 * e adicionar propriedades e classes CSS a eles.
 * 
 * @class
 */
class ElementCreator {

    /**
     * Cria um novo elemento HTML com propriedades e classes fornecidas.
     * 
     * @param {string} tag - A tag HTML do elemento a ser criado (ex: 'div', 'p', 'span').
     * @param {Object} [properties={}] - Um objeto com propriedades a serem definidas no elemento criado (ex: { id: 'my-element', innerText: 'Texto' }).
     * @param {...string} classes - Um ou mais nomes de classes CSS a serem aplicados ao elemento.
     * 
     * @returns {HTMLElement} O elemento HTML criado com as propriedades e classes especificadas.
     * 
     * @example
     * const div = ElementCreator.create('div', { id: 'container', innerText: 'Olá Mundo' }, 'class1', 'class2');
     * console.log(div); // <div id="container" class="class1 class2">Olá Mundo</div>
     */
    static create(tag, properties={}, ...classes) {

        const element = document.createElement(tag);

        // Adiciona as classes fornecidas
        classes.forEach(className => { element.classList.add(className); });

        // Define as propriedades no elemento
        for (const [key, value] of Object.entries(properties)) {
            element[key] = value;
        }

        return element;
    }
}

export default ElementCreator;
