class InsertElement {
    static before(parent: any, content: string): void {
        parent.insertAdjacentHTML('beforebegin', content);
    }

    static after(parent: any, content: string): void {
        parent.insertAdjacentHTML('afterend', content);
    }

    static firstInside(parent: any, content: string): void {
        parent.insertAdjacentHTML('afterbegin', content);
    }

    static lastInside(parent: any, content: string): void {
        parent.insertAdjacentHTML('beforeend', content);
    }
}

export default InsertElement;