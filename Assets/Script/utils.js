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

    /*addClickListener() {
        const image = document.querySelector("#image"+this.id);
        image.addEventListener("click", () => {
            window.location = "/product.html?productId="+this.id;
            //const img = document.createElement("img");
            //img.src = "image"
            //window.appendChild("img");
        });
    };*/
}

export const navigation_bar = async () => {
    const header = await document.querySelector(".contenedor");

const logo = document.createElement("a");
logo.href = "Landing.html";
const logo_imagen = document.createElement("img");
logo_imagen.src = "Logo/Logo nav.png";

const navegador = document.createElement("nav");
navegador.classList.add("nav");

logo.appendChild(logo_imagen);
header.appendChild(logo);
header.appendChild(navegador);

const buscar = document.createElement("input");
buscar.classList.add ("buscar");
buscar.type = "text";
buscar.placeholder = "buscar";

const nosotros = document.createElement("a");
nosotros.href = "contact.html";
nosotros.classList.add("nosotros");
nosotros.innerText = "¿Quiénes somos?";

const tienda = document.createElement("a");
tienda.href = "Landing.html";
tienda.classList.add("tienda");
tienda.innerText = "Tienda";

const favoritos = document.createElement("div");
favoritos.classList.add("favoritos")
favoritos.innerHTML = `
<i id="abrirgustar" class="fa-regular fa-heart"></i>`+" Favoritos";

const carrito = document.createElement("a");
carrito.classList.add("carrito");
carrito.innerHTML = `
<i id="abrir" class="fa-solid fa-bag-shopping"></i>`+" Carrito";

const login = document.createElement("a");
login.href = "Login.html";
login.innerHTML =`
<i class="fa-regular fa-user"></i>`+" Login";

const signup = document.createElement("a");
signup.href = "Registry.html";
signup.innerHTML = `
<i class="fa-regular fa-user-plus"></i>`+" Sign up";

navegador.appendChild(buscar);
navegador.appendChild(nosotros);
navegador.appendChild(tienda);
navegador.appendChild(favoritos);
navegador.appendChild(carrito);
navegador.appendChild(login); 
navegador.appendChild(signup);

}