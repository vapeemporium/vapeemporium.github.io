document.addEventListener("DOMContentLoaded", function() {
    const map = L.map('map').setView([38.482, -0.767], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const puntosRecogida = [
        { coords: [38.480, -0.765], title: "Punto 1", horario: "8:00 - 14:00" },
        { coords: [38.482, -0.770], title: "Punto 2", horario: "9:00 - 15:00" },
        { coords: [38.485, -0.760], title: "Punto 3", horario: "10:00 - 16:00" },
        { coords: [38.478, -0.775], title: "Punto 4", horario: "11:00 - 17:00" },
    ];

    puntosRecogida.forEach(punto => {
        const marker = L.marker(punto.coords).addTo(map)
            .bindPopup(`<h3>${punto.title}</h3><p>Horario: ${punto.horario}</p>`)
            .on('click', () => {
                document.getElementById('punto').value = punto.title; // Preseleccionar el punto de recogida
            });
    });
});
