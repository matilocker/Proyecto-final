const PERSONAS = "personas";
const USUARIO = "usuario";

export const estaEnSesion = () => {
    const usuario = localStorage.getItem(USUARIO);

    if (usuario === null) {
        window.location.href = "./index.html";
    }

}

const usuarioExiste = (correoUsuario, contrasenaUsuario) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas !== null) {
        const personasArray = JSON.parse(personas);

        for (const persona of personasArray) {
            if (correoUsuario === persona.correo && contrasenaUsuario === persona.contrasena) {
                return true;
            }
        }
    }

    return false;
}

export const validarUsuario = (correoUsuario, contrasenaUsuario) => {
    if(usuarioExiste(correoUsuario, contrasenaUsuario) === true) {
        localStorage.setItem(USUARIO, correoUsuario);
        window.location.href = "./usuario.html";
    } else {
        alert("El usuario no existe");
    }
}

export const registrarPersona = (correoPersona, contrasenaPersona) => {
    const personas = localStorage.getItem(PERSONAS);

    if (personas === null) {
        const persona = {
            correo: correoPersona,
            contrasena: contrasenaPersona,
            favoritos: []
        }

        const personasArray = [persona];

        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    } else {
        const personasArray = JSON.parse(personas);

        const persona = {
            correo: correoPersona,
            contrasena: contrasenaPersona,
            favoritos: []
        }

        personasArray.push(persona);
        localStorage.setItem(PERSONAS, JSON.stringify(personasArray));
    }
}

export const actualizarLista = () => {
    const lista = document.querySelector("#lista");
    lista.innerHTML = "";

    const personas = localStorage.getItem(PERSONAS);

    if (personas !== null) {
        const personasArray = JSON.parse(personas);

        for (const persona of personasArray) {
            const div = document.createElement("div");
            div.classList.add("persona");

            const parrafo = document.createElement("p");
            parrafo.innerHTML = persona.correo + " " + persona.contrasena;

            div.appendChild(parrafo);

            lista.appendChild(div);
        }
    }
}

export const cerrarSesion = () => {
    localStorage.removeItem(USUARIO);
    window.location.reload();
}