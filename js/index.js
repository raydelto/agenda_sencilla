function cargarContactos() {
    fetch("http://www.raydelto.org/agenda.php").then(function (contactos) {
        return contactos.json();
    }).then(function (contactos) {
        var cuerpo = document.getElementById("cuerpo");
        var primer = contactos[0];
        cuerpo.innerHTML = primer.nombre + " " + primer.apellido + " " + primer.telefono;
    });
}
