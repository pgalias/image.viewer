class GetElement {
    static byId(id: string): Element {
        return document.getElementById(id);
    }

    static byClass(className: string): Element {
        return document.getElementsByClassName(className)[0];
    }

    static byTag(tag: string): Element {
        return document.getElementsByTagName(tag)[0];
    }

    static byQuery(query: string, multiple: boolean = false, parent: any = document): Element | NodeList | Node {
        if (multiple) {
            return parent.querySelectorAll(query);
        } else {
            return parent.querySelector(query);
        }
    }
}

export default GetElement;