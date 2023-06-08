const TIENDA = "tienda";

export class Producto {
    #id = "";
    #image = "";
    constructor(id, image) {
        this.#id = id;
        this.#image = image;
    }

    render() {
        const image = document.createElement("img");
        image.id = this.#obtenerId();
        image.src = this.#image;
        image.classList.add("image");
        return image;

    }

    addClickListener() {
        const id = this.#obtenerId();
        const image = document.querySelector("#" + id);
        image.addEventListener("click", () => {
            alert("click");
        })
    }

    #obtenerId() {
        return "image-" + this.#id;
    }

}

export const cargarTienda = async () => {
    const tienda = localStorage.getItem(TIENDA);

    if (tienda === null) {
        const request = await fetch("https://fakestoreapi.com/products");
        const data = await request.json();

        localStorage.setItem(TIENDA, JSON.stringify(data));
        return data;
    }

    return JSON.parse(tienda);
}