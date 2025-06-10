function clearContainer() {
  document.getElementById('cat-container').innerHTML = '';
}

function showLoading() {
  const container = document.getElementById('cat-container');
  container.innerHTML = '<p>Cargando...</p>';
}

function renderCatCards(cats) {
  const container = document.getElementById('cat-container');
  container.innerHTML = '';

  cats.forEach(cat => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${cat.url}" class="card-img-top" alt="Gato bonito">
      </div>
    `;
    container.appendChild(col);
  });
}

function handleError(error) {
  console.error(error);
  const container = document.getElementById('cat-container');
  container.innerHTML = '<p class="text-danger">Error al cargar</p>';
}