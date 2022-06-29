window.addEventListener('load', () => {
    // Constantes
    const ul = document.querySelector("ul")
    const url = '/odontologos/listar'

    // GET
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
        data.forEach(e => {
            ul.innerHTML += `<li id="linea-${e.id}">
                                <button onclick="borrar()" id="${e.id}" class="borrar">X</button>
                                <button onclick="editar()" class="editar">${e.id}</button>
                                Odontologo: ${e.nombre} ${e.apellido}
                                . Matricula: ${e.matricula}.
                             </li>`
        })
    })
    .catch(e=>console.log(e))
})