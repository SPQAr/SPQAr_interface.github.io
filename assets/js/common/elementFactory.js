class ElementCreator {

    static create(tag, properties={}, ...classes) {

        const element = document.createElement(tag);

        classes.forEach( className => { element.classList.add(className); });

        for (const [key, value] of Object.entries(properties)) {
            element[key] = value;
        }

        return element;
    }
}

export default ElementCreator;