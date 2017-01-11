interface IFunctionArgs {
    content: string;
    element?: boolean;
    parent: any;
    place: string;
}

function insertInto(args: IFunctionArgs): void {
    const {content, element, parent, place} = args;
    const wherePlace = putIn(place);

    if (element) {
        parent.insertAdjacentElement(wherePlace, content);
    } else {
        parent.insertAdjacentHTML(wherePlace, content);
    }
}

function putIn(position: string): string {
    const places = {
        a: "afterend",
        b: "beforebegin",
        f: "afterbegin",
        l: "beforeend"
    };
    return places[position];
}
export {insertInto};
