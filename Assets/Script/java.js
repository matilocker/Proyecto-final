import { Producto, traerRopa, navigation_bar, pieDePagina } from "./utils.js";

let base = []; //Defino variable en blanco para meter la información del Json.


// header y footer: Aquí me aseguro de que cargue la página 
//y que luego se construyan la barra de navegación y el pie de página

const carruseles = document.querySelectorAll(".carrusel");

document.addEventListener('DOMContentLoaded', () => {
    navigation_bar();
});

document.addEventListener('DOMContentLoaded', () => {
    pieDePagina();
});

//carrusel 

const alimentarRopa = async () => {
    base = await traerRopa();
    console.log(base);
    for (let card of base.Ropa) {
        let image = new Producto(card.id, card.title, card.price, card.description, card.category, card.image); //Importa el orden
        const carousel_men = document.querySelector("#carousel_men");
        const carousel_women = document.querySelector("#carousel_women");
        
        if (image.label === "men's clothing") {
            carousel_men.appendChild(image.render());
        } else {
            carousel_women.appendChild(image.render());
        };
        /*carruseles.forEach((carrusel) => {
          carrusel.appendChild(images.cloneNode(true));
        });*/
      }
}

alimentarRopa();
/*let imagenes = ['https://i.pinimg.com/564x/21/d0/bd/21d0bde3ec55db35990ae5b59d32b295.jpg', 
'https://i.pinimg.com/564x/40/38/cc/4038ccbfa8b0e80bb438de1111d3d6a2.jpg', 
'https://i.pinimg.com/564x/6d/88/a6/6d88a67f13592dd5ccfed12b19925789.jpg',
'https://i.pinimg.com/564x/aa/32/6d/aa326d91cff3f9ff0a3519aeefdfd030.jpg',
'https://i.pinimg.com/564x/80/61/7d/80617dd6e3de3856a71f4f3e6a5ce078.jpg',
'https://i.pinimg.com/564x/7e/9b/09/7e9b092dc6b1cf3fcfdbd042220a7b5b.jpg'];*/

//tercer intento carrucel-------------------------------------------

/*const  carousel = document.querySelectorAll(".movimiento1 img");
const  arrowsIcon = document.querySelectorAll(".movimiento1 i");
//const = 0;

arrowsIcon.forEach(icon => {

    icon.addEventListener("click", e => {
 
        let atras = document.querySelector('.fa-chevron-left'),
            adelante = document.querySelector('.fa-chevron-right'),
            img1  = document.querySelector('.aa'),
            img2  = document.querySelector('.aa2'),
            img3  = document.querySelector('.aa3'),
            tgt = e.target; 

        if(tgt == atras){
            
            if(cont > 0){
                img1.src = imagenes[cont - 1];
                img2.src = imagenes[cont];
                img3.src = imagenes[cont+1];
                cont--;
            }else {  
                img1.src = imagenes[imagenes.length - 3];
                img2.src = imagenes[imagenes.length - 2];
                img3.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1 ;
            }

        } else  if (tgt == adelante){

            console.log(img1)

            if(cont < imagenes.length - 1) 
                img1.src = imagenes[cont + 1];
                img2.src = imagenes[cont + 2];
                img3.src = imagenes[cont + 3];
                cont++;
        
        }else {  
            img1.src = imagenes[0];
            img2.src = imagenes[1];
            img3.src = imagenes[2];
            cont = 0;
        }

    console.log(icon);

    })

})*/

//compra-------------------------------------------

const co = document.querySelector("#desplegar1");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/*abrir.addEventListener("click", () => {

    co.classList.add("visible");

})

cerrar.addEventListener("click", () => {

    co.classList.remove("visible");

})

// me gusta -------------------------------------------

const gg = document.querySelector("#desplegargustar");
const abrirgustar = document.querySelector("#abrirgustar");
const cerrargustar = document.querySelector("#cerrargustar");

abrirgustar.addEventListener("click", () => {

    gg.classList.add("visible");

})

cerrargustar.addEventListener("click", () => {

    gg.classList.remove("visible");

})

// Tarjeta -------------------------------------------

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.movimiento1 .imgproducto ').forEach(imgproducto => {
    imgproducto.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = imgproducto.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-rectangle-xmark').onclick = () => {
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

// añadir a compra segundo intento -------------------------------------------

const cartitem = document.querySelector('.cartunion');
const rowproduct = document.querySelector('.cart-item');

const productList = document.querySelector('.products-preview ');

let allProducts = [];

const valorTotal = document.querySelector('.subtotal')

const countProducts = document.querySelector('#contador-productos')

productList.addEventListener('click', e => {
    if (e.target.classList.contains('bt-a')) {
        const product = e.target.parentElement

        const infoProduct = {
            img: product.querySelector('img').textContent,
            quantify: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('span').textContent,
            info: product.querySelector('p').textContent,
        }

        // Aumento cantidad al carrito

        const exits = allProducts.some(product => product.title === infoProduct.title)
        console.log(exits)

        if (exits) {
            const products = allProducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantify++;
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...products]
        } else {

            allProducts = [...allProducts, infoProduct]

        }

        showHtml();
    }

})
// Eliminar del carrito

rowproduct.addEventListener('click', e => {
    if (e.target.classList.contains('fa-rectangle-xmark')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title

        );

        console.log(allProducts)
        showHtml()
    }

});

// añadir carrito mostrar html

const showHtml = () => {

    // Limpiar carrito

    rowproduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cartunion');

        containerProduct.innerHTML = `

    <div class="cart-item">

    <div  ><i  class="fa-solid fa-rectangle-xmark" ></i></div>
        <img src="${product.img}" alt="">
        <div class="detalles"> 
            <h3>${product.title}</h3>
            <p>${product.info}</p>
            <span class="cantidad">cantidad : ${product.quantify}</span>
            <div class="price"> <span>${product.price}</span></div>
        </div>
    </div>        
        
        `;

        rowproduct.append(containerProduct);

        total = total + product.quantify * parseInt(product.price.slice(1));

        totalOfProducts = totalOfProducts + product.quantify;

    });

    valorTotal.innerText = `$${total}`;

    countProducts.innerText = totalOfProducts;

};*/
