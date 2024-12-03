export class ElementContentUpdater {
    static update(selector, content) {
        const element = document.querySelector(`#${selector} article p`);
        if (element) element.innerText = content;
        console.log('ola ola')
    }
}

export class BackgroundColorUpdater {
    static update(selector, color) {
        const painel = document.querySelector(`#${selector} .active-painel`);
        if (painel) painel.style.backgroundColor = color;
    }
}

export class DOMAppender {
    static append(parent, child) {
        
        parent.appendChild(child);
    }
}