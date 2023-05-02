export const traerRopa = async () => {
    const response = await fetch("Assets/Script/ropa.json");
    const data = await response.json();
    return data;
};

export class Producto {
    titulo = "";
    id = "";
    imagen = "";
    descripcion = "";
    label = "";
    precio = "";
    constructor (id, title, price, description, category, image){
        this.titulo = title;
        this.id = id;
        this.imagen = image;
        this.descripcion = description;
        this.label = category;
        this.precio = price;
    }

    render () {
        const imagen = document.createElement("img");
        const caja = document.createElement("div");
        const carousel_men = document.querySelector("#carousel_men");
        const carousel_women = document.querySelector("#carousel_women");
        caja.classList.add ("image");

        imagen.src = this.imagen;
        caja.appendChild(imagen);
        if (this.label === "men's clothing") {
            carousel_men.appendChild(caja);
        } else {
            carousel_women.appendChild(caja);
        };
        return imagen;
    };

    addClickListener() {
        const image = document.querySelector("#image"+this.id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId="+this.id;
            //const img = document.createElement("img");
            //img.src = "image"
            //window.appendChild("img");
        });
    };
}