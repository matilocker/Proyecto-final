export const traerRopa = async () => {
    const response = await fetch("https://raw.githubusercontent.com/matilocker/Proyecto-final/main/Assets/Script/ropa.json");
    const data = await response.json();
    console.log(data);
    return data;
};

export class Producto {
    titulo = "";
    id = "";
    imagen = "";
    descripcion = "";
    label = "";
    precio = "";
    constructor(id, title, price, description, category, image) {
        this.id = id;
        this.titulo = title;
        this.precio = price;
        this.label = category;
        this.descripcion = description;
        this.imagen = image;
    }

    render() {
        const imagen = document.createElement("img");
        const caja = document.createElement("div");
        caja.classList.add("image");

        imagen.src = this.imagen;
        caja.appendChild(imagen);
        return caja;
    };

    addClickListener() {
        const image = document.querySelector("#image" + this.id);
        image.addEventListener("click", () => {
            window.location = "/Producto.html?productId=" + this.id;
            const img = document.createElement("img");
            img.src = "image"
            window.appendChild("img");
        });
    };
}

export const navigation_bar = async () => { //Orgullosísimo porque esto lo escribí solo
    const header = await document.querySelector(".nav_bar");

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
    buscar.classList.add("buscar");
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
    favoritos.classList.add("favoritos");
    favoritos.id = "abrirgustar";
    favoritos.innerHTML = `
<i class="fa-regular fa-heart"></i>`+ " Favoritos";

    const carrito = document.createElement("a");
    carrito.classList.add("carrito");
    carrito.id = "abrircarrito";
    carrito.innerHTML = `
<i class="fa-solid fa-bag-shopping"></i>`+ " Carrito";

    const login = document.createElement("a");
    login.href = "Login.html";
    login.innerHTML = `
<i class="fa-regular fa-user"></i>`+ " Login";

    const signup = document.createElement("a");
    signup.href = "Registry.html";
    signup.innerHTML = `
<i class="fa-regular fa-user-plus"></i>`+ " Sign up";

    navegador.appendChild(buscar);
    navegador.appendChild(nosotros);
    navegador.appendChild(tienda);
    navegador.appendChild(favoritos);
    navegador.appendChild(carrito);
    navegador.appendChild(login);
    navegador.appendChild(signup);
    console.log(favoritos);
};

export const pieDePagina = async () => {
    const footer = await document.querySelector(".footer");

    const tituloPagyTarjeta = document.createElement("div");
    tituloPagyTarjeta.classList.add("privacidad");
    const tituloPag = document.createElement("h2");
    tituloPag.innerText = "Nuestra página";
    const tarjeta = document.createElement("a");
    tarjeta.href = "";
    tarjeta.innerHTML = `<i class="fa-regular fa-credit-card"></i>` + " Privacidad";

    footer.appendChild(tituloPagyTarjeta);
    tituloPagyTarjeta.appendChild(tituloPag);
    tituloPagyTarjeta.appendChild(tarjeta);

    const somos = document.createElement("div");
    somos.classList.add("nosotros");
    const parrafo = document.createElement("p");
    parrafo.innerText = "hola"
    const nosotros = document.createElement("a");
    nosotros.href = "contact.html";
    nosotros.innerText = "¿Quiénes somos?";

    footer.appendChild(somos);
    somos.appendChild(nosotros);
    somos.appendChild(parrafo);

    const contact = document.createElement("div");
    contact.classList.add("contacto");
    const siguenos = document.createElement("p");
    siguenos.id = "siguenos";
    siguenos.innerText = "¡Síguenos!";
    const iconos = document.createElement("div");
    iconos.classList.add("icons");
    iconos.innerHTML = `
    <a href=""><i class="fa-brands fa-square-twitter"></i></a>
    <a href=""><i class="fa-brands fa-square-facebook"></i></a>
    <a href=""><i class="fa-brands fa-square-instagram"></i></a>
    `
    const maps = document.createElement("iframe");
    maps.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0334477324554!2d-76.5327906846551!3d3.341900252867967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1eb8d09a3c1%3A0x766b9b441dfa8bbe!2sUniversidad%20ICESI!5e0!3m2!1ses!2sco!4v1679448223332!5m2!1ses!2sco";
    maps.width = "600";
    maps.height = "450";
    maps.style = "border:0;";
    maps.allowFullscreen = "true";
    maps.loading = "lazy";
    maps.referrerPolicy = "no-referrer-when-downgrade";

    footer.appendChild(contact);
    contact.appendChild(siguenos);
    contact.appendChild(iconos);
    contact.appendChild(maps);

}

export const ElementodelObjeto = async () => {
    const favorito = await document.querySelector(".favorito");
    const abrirgustar = await document.querySelector(".favoritos");
    const cerrargustar = await document.querySelector("#cerrargustar");
  
    // Abre el modal al hacer clic en el botón
    abrirgustar.onclick = () => {
      favorito.style.display = 'block';
      console.log("hola");
    }
  
    // Cierra el modal al hacer clic en la X
    cerrargustar.onclick = () => {
      favorito.style.display = 'none';
    }
  
    // Cierra el modal al hacer clic fuera del modal
    window.onclick = function(event) {
      if (event.target == favorito) {
        favorito.style.display = 'none';
      }
    }
  }; //HAcer pregunta sobre el modal.
  

    //abrirgustar.addEventListener("click", () => {
      //  favorito.classList.add("visible");
    //})
    
    //cerrargustar.addEventListener("click", () => {
      //  favorito.classList.remove("visible");
    //})

/*<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.0334477324554!2d-76.5327906846551!3d3.341900252867967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1eb8d09a3c1%3A0x766b9b441dfa8bbe!2sUniversidad%20ICESI!5e0!3m2!1ses!2sco!4v1679448223332!5m2!1ses!2sco"
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
referrerpolicy="no-referrer-when-downgrade"></iframe>*/