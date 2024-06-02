document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([38.482, -0.767], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const puntosRecogida = [
        { coords: [38.472364, -0.770311], title: "Punto 1", horario: "Lunes: 18:30 - 22:00<br>Martes: 18:30 - 22:00<br>Miercoles: 18:30 - 22:00<br>Jueves: 18:30 - 22:00<br>Viernes: 18:30 - 22:00" },
        { coords: [38.4787133, -0.77995051], title: "Punto 2", horario: "Lunes: 7:55 - 13:45<br>Martes: 7:55 - 13:45<br>Miercoles: 7:55 - 13:45<br>Jueves: 7:55 - 14:35<br>Viernes: 7:55 - 12:55" },
        { coords: [38.4780073, -0.7907172], title: "Punto 3", horario: "Lunes: 14:00 - 15:00 20:15 - 22:00<br>Miércoles: 11:00 - 17:00" },
        { coords: [38.4801482, -0.7824300], title: "Punto 4", horario: "no disponible" },
        { coords: [38.4778235, -0.7941092], title: "Punto 5", horario: "Lunes: 18:00 - 20:00<br>Martes: 18:00 - 20:00<br>Miercoles: 18:00 - 20:00<br>Jueves: 18:00 - 20:00<br>Viernes: 18:00 - 20:00" },
    ];

    puntosRecogida.forEach(punto => {
        const marker = L.marker(punto.coords).addTo(map)
            .bindPopup(`<h3>${punto.title}</h3><p>Horario:<br>${punto.horario}</p>`)
            .on('click', () => {
                document.getElementById('punto').value = punto.title; // Preseleccionar el punto de recogida
            });
    });
});
