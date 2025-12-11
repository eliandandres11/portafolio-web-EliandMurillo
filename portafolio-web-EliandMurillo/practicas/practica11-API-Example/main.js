const urls = {
  characters: "https://corsproxy.io/?https://thesimpsonsapi.com/api/characters",
  episodes: "https://corsproxy.io/?https://thesimpsonsapi.com/api/episodes",
  locations: "https://corsproxy.io/?https://thesimpsonsapi.com/api/locations"
};

document.getElementById("obtener").addEventListener("click", async () => {
  const tipo = document.getElementById("tipo").value;
  const contenedor = document.getElementById("resultado");
  contenedor.innerHTML = "Cargando datos...";

  try {
    const respuesta = await fetch(urls[tipo]);
    const datos = await respuesta.json();

    contenedor.innerHTML = ""; // limpiar

    if (tipo === "characters") {
      datos.forEach(c => {
        const card = `
          <div class="card">
            <h3>${c.name}</h3>
            <img src="${c.image}" alt="${c.name}">
            <p>${c.description || "Sin descripción"}</p>
          </div>
        `;
        contenedor.innerHTML += card;
      });
    }

    else if (tipo === "episodes") {
      datos.forEach(e => {
        const card = `
          <div class="card">
            <h3>${e.name}</h3>
            <p><b>Temporada:</b> ${e.season}</p>
            <p><b>Episodio:</b> ${e.episode}</p>
            <p>${e.description || "Sin descripción"}</p>
          </div>
        `;
        contenedor.innerHTML += card;
      });
    }

    else if (tipo === "locations") {
      datos.forEach(l => {
        const card = `
          <div class="card">
            <h3>${l.name}</h3>
            <p>${l.description || "Sin descripción"}</p>
          </div>
        `;
        contenedor.innerHTML += card;
      });
    }

  } catch (error) {
    contenedor.innerHTML = "❌ No se pudieron obtener los datos.";
    console.error(error);
  }
});