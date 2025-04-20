const API_BASE = "https://pokeapi.co/api/v2";

async function loadPokemonList(selectId) {
  const res = await fetch(`${API_BASE}/pokemon?limit=151`);
  const data = await res.json();
  const select = document.getElementById(selectId);

  data.results.forEach((pokemon) => {
    const option = document.createElement("option");
    option.value = pokemon.name;
    option.textContent = pokemon.name;
    select.appendChild(option);
  });
}

async function showPokemonInfo(pokemonName, containerId, showVersions = false) {
  const res = await fetch(`${API_BASE}/pokemon/${pokemonName}`);
  const data = await res.json();
  const container = document.getElementById(containerId);

  const name = data.name;
  const types = data.types.map((t) => t.type.name).join(", ");
  const image = data.sprites.front_default;

  let html = `<h2>${name}</h2>
              <p><strong>Tipo:</strong> ${types}</p>
              <img src="${image}" alt="${name}">`;

  if (showVersions) {
    const versions = data.game_indices.map((g) => g.version.name).join(", ");
    html += `<p><strong>Versões (temporadas):</strong> ${versions}</p>`;
  }

  container.innerHTML = html;
}
